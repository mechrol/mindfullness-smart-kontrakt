import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import * as authService from '../services/auth.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [pendingMfaToken, setPendingMfaToken] = useState(null);
  const [bootstrapped, setBootstrapped] = useState(false);
  const csrfRef = useRef(null);

  const bootstrap = useCallback(async () => {
    try {
      const csrf = await authService.fetchCsrf();
      csrfRef.current = csrf;
      const refreshed = await authService.refresh();
      if (refreshed?.accessToken) {
        setAccessToken(refreshed.accessToken);
        setUser(refreshed.user || null);
      }
    } catch (e) {}
    setBootstrapped(true);
  }, []);

  useEffect(() => { bootstrap(); }, [bootstrap]);

  const login = useCallback(async (email, password, opts = {}) => {
    const data = await authService.login(email, password);
    if (data.requiresMfa) {
      setPendingMfaToken(data.mfaToken);
      return { requiresMfa: true };
    }
    if (data.accessToken) {
      setAccessToken(data.accessToken);
      setUser(data.user || null);
      return { ok: true };
    }
    throw new Error('Nieoczekiwana odpowiedź logowania');
  }, []);

  const verifyMfa = useCallback(async (code) => {
    const data = await authService.verifyMfa(pendingMfaToken, code);
    if (data.accessToken) {
      setPendingMfaToken(null);
      setAccessToken(data.accessToken);
      setUser(data.user || null);
      return { ok: true };
    }
    throw new Error('Niepoprawny kod');
  }, [pendingMfaToken]);

  const register = useCallback(async (payload) => {
    await authService.register(payload);
    return { ok: true };
  }, []);

  const logout = useCallback(async () => {
    try { await authService.logout(); } catch (e) {}
    setAccessToken(null);
    setUser(null);
    setPendingMfaToken(null);
  }, []);

  const oauth = useCallback(async (provider) => {
    const data = await authService.oauth(provider);
    setAccessToken(data.accessToken);
    setUser(data.user || null);
    return { ok: true };
  }, []);

  const forgot = useCallback(async (email) => authService.forgot(email), []);
  const reset = useCallback(async (token, newPassword) => authService.reset(token, newPassword), []);
  const resendVerification = useCallback(async (email) => authService.resendVerification(email), []);
  const verifyEmail = useCallback(async (token) => authService.verifyEmail(token), []);

  const getCsrf = useCallback(() => csrfRef.current, []);

  return (
    <AuthContext.Provider value={{
      accessToken, user, pendingMfaToken, bootstrapped,
      login, verifyMfa, register, logout, oauth,
      forgot, reset, verifyEmail, resendVerification, getCsrf,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
