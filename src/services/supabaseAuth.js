// Backendless Auth (Supabase-backed).
// Haszowanie haseł po stronie klienta: Web Crypto PBKDF2-SHA-256, 100k iteracji.
// Refresh-token przechowujemy w localStorage (symulacja HttpOnly cookie).

import { supabase } from './supabaseClient.js';

// Local in-memory copy for use by other services. Mutated only inside this module.
export function setAccessToken(token) {
  if (typeof window === 'undefined') return;
  if (token) window.__accessToken = token;
  else window.__accessToken = null;
}

const ACCESS_TTL_MS = 10 * 60 * 1000;          // 10 min
const REFRESH_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 dni
const PBKDF2_ITERS = 100_000;
const LOCKOUT_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

const LS_ACCESS = 'auth_access';
const LS_REFRESH = 'auth_refresh';
const LS_USER = 'auth_user';

// ===== Crypto helpers =====
function b64encode(buf) {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64decode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
async function pbkdf2(password, saltBytes, iterations) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: saltBytes, iterations },
    key, 256
  );
  return new Uint8Array(bits);
}
async function hashPassword(password, saltB64) {
  const salt = saltB64 ? b64decode(saltB64) : crypto.getRandomValues(new Uint8Array(16));
  const h = await pbkdf2(password, salt, PBKDF2_ITERS);
  return { hash: b64encode(h), salt: b64encode(salt) };
}
async function verifyPassword(password, storedHashB64, saltB64) {
  const { hash } = await hashPassword(password, saltB64);
  return constantTimeEqual(hash, storedHashB64);
}
function constantTimeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
function randomToken(len = 32) {
  const b = crypto.getRandomValues(new Uint8Array(len));
  return b64encode(b);
}
async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return b64encode(buf);
}
function normEmail(e) { return (e || '').trim().toLowerCase(); }

// ===== Rate limit (Supabase) =====
async function rateLimitCheck(scope) {
  const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  const { data } = await supabase.from('auth_rate_limits').select('*').eq('scope_key', scope).single();
  if (!data) return { ok: true, remaining: 10 };
  if (data.blocked_until && new Date(data.blocked_until) > new Date()) return { ok: false, retryAfter: Math.ceil((new Date(data.blocked_until).getTime() - Date.now()) / 1000) };
  return { ok: true };
}
async function rateLimitBump(scope) {
  const { data: existing } = await supabase.from('auth_rate_limits').select('*').eq('scope_key', scope).maybeSingle();
  const now = new Date().toISOString();
  if (!existing) {
    await supabase.from('auth_rate_limits').insert({ scope_key: scope, attempt_count: 1, window_started_at: now });
  } else {
    const newCount = existing.attempt_count + 1;
    const blocked = newCount >= LOCKOUT_ATTEMPTS ? new Date(Date.now() + LOCKOUT_MS).toISOString() : null;
    await supabase.from('auth_rate_limits').update({ attempt_count: newCount, last_attempt_at: now, blocked_until: blocked }).eq('scope_key', scope);
  }
}

// ===== Logging =====
async function logEvent(user_id, event, metadata = {}) {
  try {
    await supabase.from('auth_access_log').insert({
      user_id: user_id || null,
      event,
      metadata,
      ip: null,
      user_agent: navigator.userAgent.slice(0, 255),
    });
  } catch (e) {}
}

// ===== Session =====
function setSession({ accessToken, refreshToken, user }) {
  if (accessToken) {
    setAccessToken(accessToken);
    localStorage.setItem(LS_ACCESS, JSON.stringify({ token: accessToken, expiresAt: Date.now() + ACCESS_TTL_MS }));
  }
  if (refreshToken) localStorage.setItem(LS_REFRESH, refreshToken);
  if (user) localStorage.setItem(LS_USER, JSON.stringify(user));
  return { accessToken, refreshToken, user };
}
function clearSession() {
  setAccessToken(null);
  localStorage.removeItem(LS_ACCESS);
  localStorage.removeItem(LS_REFRESH);
  localStorage.removeItem(LS_USER);
}

// ===== Bootstrap =====
export async function bootstrap() {
  try {
    const rawAcc = localStorage.getItem(LS_ACCESS);
    const refresh = localStorage.getItem(LS_REFRESH);
    const rawUser = localStorage.getItem(LS_USER);
    if (!refresh) return { accessToken: null, user: null };

    if (rawUser) {
      const access = await refreshTokens(refresh);
      if (access) return { accessToken: access, user: JSON.parse(rawUser) };
    }
    clearSession();
    return { accessToken: null, user: null };
  } catch (e) {
    return { accessToken: null, user: null };
  }
}

async function refreshTokens(refreshToken) {
  const tokenHash = await sha256Hex(refreshToken);
  const { data } = await supabase.from('auth_sessions')
    .select('id, user_id, expires_at, revoked, auth_users(id,email,display_name,email_verified)')
    .eq('refresh_token_hash', tokenHash).maybeSingle();
  if (!data || data.revoked || new Date(data.expires_at) < new Date()) return null;

  const newRefresh = randomToken();
  const newHash = await sha256Hex(newRefresh);
  await supabase.from('auth_sessions').update({
    refresh_token_hash: newHash,
    expires_at: new Date(Date.now() + REFRESH_TTL_MS).toISOString(),
  }).eq('id', data.id);
  localStorage.setItem(LS_REFRESH, newRefresh);

  const access = randomToken(24);
  setAccessToken(access);
  localStorage.setItem(LS_ACCESS, JSON.stringify({ token: access, expiresAt: Date.now() + ACCESS_TTL_MS }));
  return access;
}

// ===== PUBLIC =====
export async function register({ name, email, password, acceptTerms }) {
  if (!acceptTerms) throw new Error('GENERIC');
  const e = normEmail(email);
  const rl = await rateLimitCheck('register:' + e);
  if (!rl.ok) throw new Error('RATE_LIMIT');

  const { data: existing } = await supabase.from('auth_users').select('id').eq('email_normalized', e).maybeSingle();
  if (existing) {
    await logEvent(existing.id, 'register_failed_duplicate');
    throw new Error('GENERIC');
  }

  const { hash, salt } = await hashPassword(password);
  const { data: row, error } = await supabase.from('auth_users').insert({
    email, email_normalized: e,
    password_hash: hash, salt,
    display_name: name,
  }).select('id,email,display_name,email_verified').single();
  if (error || !row) throw new Error('GENERIC');

  // Tworzenie sesji (refresh token)
  const refresh = randomToken();
  await supabase.from('auth_sessions').insert({
    user_id: row.id,
    refresh_token_hash: await sha256Hex(refresh),
    user_agent: navigator.userAgent.slice(0, 255),
    expires_at: new Date(Date.now() + REFRESH_TTL_MS).toISOString(),
  });
  // Token weryfikacyjny
  const verifyToken = randomToken();
  await supabase.from('auth_email_tokens').insert({
    user_id: row.id,
    purpose: 'verify_email',
    token_hash: await sha256Hex(verifyToken),
    expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  });

  await logEvent(row.id, 'register_success');
  const access = randomToken(24);
  setSession({
    accessToken: access,
    refreshToken: refresh,
    user: { id: row.id, email: row.email, name: row.display_name, email_verified: row.email_verified },
  });
  return { ok: true, accessToken: access, user: row };
}

export async function login(email, password) {
  const e = normEmail(email);
  const rl = await rateLimitCheck('login:' + e);
  if (!rl.ok) throw new Error('RATE_LIMIT');
  await rateLimitBump('login:' + e);

  const { data: row } = await supabase.from('auth_users')
    .select('id,email,display_name,email_verified,password_hash,salt,locked_until,failed_attempts')
    .eq('email_normalized', e).maybeSingle();

  // Generyczny timeout even for missing user — anti-enumeration
  await new Promise((r) => setTimeout(r, 250));

  if (!row) throw new Error('GENERIC');
  if (row.locked_until && new Date(row.locked_until) > new Date()) throw new Error('LOCKED');

  const ok = await verifyPassword(password, row.password_hash, row.salt);
  if (!ok) {
    const newFail = (row.failed_attempts || 0) + 1;
    const locked = newFail >= LOCKOUT_ATTEMPTS ? new Date(Date.now() + LOCKOUT_MS).toISOString() : null;
    await supabase.from('auth_users').update({ failed_attempts: newFail, locked_until: locked }).eq('id', row.id);
    await logEvent(row.id, 'login_failed', { attempts: newFail });
    throw new Error('GENERIC');
  }

  await supabase.from('auth_users').update({ failed_attempts: 0, locked_until: null }).eq('id', row.id);

  const refresh = randomToken();
  await supabase.from('auth_sessions').insert({
    user_id: row.id,
    refresh_token_hash: await sha256Hex(refresh),
    user_agent: navigator.userAgent.slice(0, 255),
    expires_at: new Date(Date.now() + REFRESH_TTL_MS).toISOString(),
  });

  await logEvent(row.id, 'login_success');
  const access = randomToken(24);
  setSession({
    accessToken: access,
    refreshToken: refresh,
    user: { id: row.id, email: row.email, name: row.display_name, email_verified: row.email_verified },
  });
  return { ok: true, accessToken: access, user: { id: row.id, email: row.email, name: row.display_name, email_verified: row.email_verified } };
}

export async function logout() {
  try {
    const refresh = localStorage.getItem(LS_REFRESH);
    if (refresh) {
      const tokenHash = await sha256Hex(refresh);
      await supabase.from('auth_sessions').update({ revoked: true }).eq('refresh_token_hash', tokenHash);
    }
  } catch (e) {}
  const u = localStorage.getItem(LS_USER);
  const id = u ? (JSON.parse(u).id || null) : null;
  await logEvent(id, 'logout');
  clearSession();
}

export async function forgot(email) {
  const e = normEmail(email);
  await new Promise((r) => setTimeout(r, 250));
  const { data: row } = await supabase.from('auth_users').select('id').eq('email_normalized', e).maybeSingle();
  if (!row) return { ok: true }; // generyczne
  const t = randomToken();
  await supabase.from('auth_email_tokens').insert({
    user_id: row.id,
    purpose: 'reset_password',
    token_hash: await sha256Hex(t),
    expires_at: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  });
  await logEvent(row.id, 'forgot_requested');
  return { ok: true };
}

export async function reset(token, newPassword) {
  const tokenHash = await sha256Hex(token);
  const { data: tok } = await supabase.from('auth_email_tokens')
    .select('id,user_id,expires_at,consumed')
    .eq('token_hash', tokenHash).eq('purpose', 'reset_password').maybeSingle();
  if (!tok || tok.consumed || new Date(tok.expires_at) < new Date()) throw new Error('INVALID_TOKEN');

  const { hash, salt } = await hashPassword(newPassword);
  await supabase.from('auth_users').update({ password_hash: hash, salt }).eq('id', tok.user_id);
  await supabase.from('auth_email_tokens').update({ consumed: true, consumed_at: new Date().toISOString() }).eq('id', tok.id);
  await logEvent(tok.user_id, 'password_reset');
  return { ok: true };
}

export async function verifyEmail(token) {
  const tokenHash = await sha256Hex(token);
  const { data: tok } = await supabase.from('auth_email_tokens')
    .select('id,user_id,expires_at,consumed')
    .eq('token_hash', tokenHash).eq('purpose', 'verify_email').maybeSingle();
  if (!tok || tok.consumed || new Date(tok.expires_at) < new Date()) throw new Error('INVALID_TOKEN');
  await supabase.from('auth_users').update({ email_verified: true }).eq('id', tok.user_id);
  await supabase.from('auth_email_tokens').update({ consumed: true, consumed_at: new Date().toISOString() }).eq('id', tok.id);
  await logEvent(tok.user_id, 'email_verified');
  return { ok: true };
}

export async function resendVerification(email) {
  const e = normEmail(email);
  const { data: row } = await supabase.from('auth_users').select('id,email_verified').eq('email_normalized', e).maybeSingle();
  if (!row) return { ok: true }; // generyczne
  if (row.email_verified) return { ok: true };
  const t = randomToken();
  await supabase.from('auth_email_tokens').insert({
    user_id: row.id,
    purpose: 'verify_email',
    token_hash: await sha256Hex(t),
    expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  });
  return { ok: true };
}

// ===== Password strength =====
export function passwordStrength(pw = '') {
  const rules = {
    length: pw.length >= 12,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  const score = Object.values(rules).filter(Boolean).length;
  const levels = ['', 'Bardzo słabe', 'Słabe', 'Średnie', 'Silne', 'Bardzo silne'];
  return { score, label: levels[score], valid: rules.length && rules.upper && rules.lower && rules.digit && rules.special, rules };
}

export const GENERIC_AUTH_ERROR = 'Niepoprawny login lub hasło';

// ===== Reports / choices (MSWRP) — już istniało, tutaj integracja =====
export async function saveReportToSupabase(report, userId) {
  try {
    await supabase.from('mswrp_reports').insert({
      user_id: userId || null,
      factor_id: report.meta.factor_id,
      factor_name: report.meta.factor_name,
      skill_name: report.meta.skill_name,
      report: report,
      context: report.user_context || '',
    });
  } catch (e) {}
}

export async function saveChoiceToSupabase(choice, userId) {
  try {
    await supabase.from('mswrp_choices').insert({
      user_id: userId || null,
      report_id: choice.report_id,
      approach_id: choice.approach_id,
      approach_label: choice.approach_label,
      factor_name: choice.factor_name,
    });
  } catch (e) {}
}
