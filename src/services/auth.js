// Warstwa serwisu auth — z założeniem backendu JWT + HttpOnly refresh cookie.
// Endpointy są konfigurowalne przez VITE_API_BASE_URL.

import { setAccessToken, clearAccessToken } from './apiClient.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function postJson(path, body) {
  const res = await fetch(BASE_URL + path, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(body),
  });
  const ct = res.headers.get('content-type') || '';
  const data = ct.includes('application/json') ? await res.json() : await res.text();
  if (!res.ok) {
    const err = new Error(data?.message || `HTTP ${res.status}`);
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
}

export async function fetchCsrf() {
  try {
    const res = await fetch(BASE_URL + '/csrf', { credentials: 'include' });
    if (!res.ok) return { token: null };
    return await res.json();
  } catch (e) { return { token: null }; }
}

export async function login(email, password) {
  const data = await postJson('/auth/login', { email, password });
  if (data.accessToken) setAccessToken(data.accessToken);
  return data;
}

export async function verifyMfa(mfaToken, code) {
  const data = await postJson('/auth/mfa/verify', { mfaToken, code });
  if (data.accessToken) setAccessToken(data.accessToken);
  return data;
}

export async function register(payload) {
  return await postJson('/auth/register', payload);
}

export async function logout() {
  try { await postJson('/auth/logout', {}); } finally { clearAccessToken?.(); }
}

export async function refresh() {
  try {
    const res = await fetch(BASE_URL + '/auth/refresh', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.accessToken) setAccessToken(data.accessToken);
    return data;
  } catch (e) { return null; }
}

export async function oauth(provider) {
  // W realnym świecie — redirect do /auth/oauth/:provider (OIDC).
  // Tu symulujemy callback — zakładamy, że backend zwraca accessToken.
  const res = await fetch(BASE_URL + `/auth/oauth/${provider}/callback`, {
    credentials: 'include',
    headers: { 'Accept': 'application/json' },
  });
  if (!res.ok) throw new Error(`OAuth ${provider} failed`);
  const data = await res.json();
  if (data.accessToken) setAccessToken(data.accessToken);
  return data;
}

export async function forgot(email) {
  return await postJson('/auth/forgot', { email });
}

export async function reset(token, newPassword) {
  return await postJson('/auth/reset', { token, newPassword });
}

export async function verifyEmail(token) {
  return await postJson('/auth/verify-email', { token });
}

export async function resendVerification(email) {
  return await postJson('/auth/resend-verification', { email });
}

// Password strength check (client-side, OWASP-recommended)
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
export function normalizeAuthError(e) {
  // Bezwzględnie ukrywaj szczegóły błędów logowania.
  return GENERIC_AUTH_ERROR;
}
