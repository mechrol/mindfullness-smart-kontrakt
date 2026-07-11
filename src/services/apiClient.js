import * as auth from './auth.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const ACCESS_HEADER = 'X-Access-Token';
let memoryAccessToken = null;

export function setAccessToken(token) { memoryAccessToken = token; }
export function getAccessToken() { return memoryAccessToken; }
export function clearAccessToken() { memoryAccessToken = null; }

async function rawFetch(url, opts = {}) {
  const headers = new Headers(opts.headers || {});
  headers.set('Accept', 'application/json');
  if (opts.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const csrf = await auth.fetchCsrf();
  if (csrf?.token) headers.set('X-CSRF-Token', csrf.token);
  if (memoryAccessToken) headers.set(ACCESS_HEADER, memoryAccessToken);
  const res = await fetch(BASE_URL + url, { ...opts, headers, credentials: 'include' });
  return res;
}

export async function apiFetch(url, opts = {}) {
  let res = await rawFetch(url, opts);
  if (res.status === 401 && memoryAccessToken) {
    try {
      const r = await auth.refresh();
      if (r?.accessToken) {
        memoryAccessToken = r.accessToken;
        res = await rawFetch(url, opts);
      }
    } catch (e) {
      auth.clearAccessToken?.();
    }
  }
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
