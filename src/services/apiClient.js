// Minimalny wrapper fetch — bez wstrzykiwania tokenów CSRF (Supabase SDK zarządza dostępem).
// Pozostawiam kompatybilność: setAccessToken/clearAccessToken/getAccessToken dla kodu auth.

let memoryAccessToken = null;

export function setAccessToken(token) { memoryAccessToken = token; }
export function getAccessToken() { return memoryAccessToken; }
export function clearAccessToken() { memoryAccessToken = null; }

export async function apiFetch(url, opts = {}) {
  const headers = new Headers(opts.headers || {});
  headers.set('Accept', 'application/json');
  if (opts.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const res = await fetch(url, { ...opts, headers, credentials: 'include' });
  const ct = res.headers.get('content-type') || '';
  const data = ct.includes('application/json') ? await res.json() : await res.text();
  if (!res.ok) {
    const err = new Error(typeof data === 'string' ? data : data?.message || `HTTP ${res.status}`);
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
}
