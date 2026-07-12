import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import * as supabaseAuth from '../services/supabaseAuth.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [pendingMfaToken, setPendingMfaToken] = useState(null);
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await supabaseAuth.bootstrap();
        if (r?.accessToken) {
          setAccessToken(r.accessToken);
          setUser(r.user);
        }
      } catch (e) {}
      setBootstrapped(true);
    })();
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const r = await supabaseAuth.login(email, password);
      setAccessToken(r.accessToken);
      setUser(r.user);
      return { ok: true };
    } catch (e) {
      // Wszystkie błędy → generyczny komunikat
      throw new Error('Niepoprawny login lub hasło');
    }
  }, []);

  const verifyMfa = useCallback(async (code) => {
    // Tu w prawdziwym systemie byłby osobny przepływ — teraz toast-only
    if (!/^\d{6}$/.test(code)) throw new Error('Niepoprawny kod');
    return { ok: true };
  }, []);

  const register = useCallback(async (payload) => {
    try {
      const r = await supabaseAuth.register(payload);
      setAccessToken(r.accessToken);
      setUser(r.user);
      return { ok: true, email: r.user.email };
    } catch (e) {
      throw new Error('Rejestracja nie powiodła się. Spróbuj ponownie.');
    }
  }, []);

  const logout = useCallback(async () => {
    try { await supabaseAuth.logout(); } catch (e) {}
    setAccessToken(null);
    setUser(null);
  }, []);

  const forgot = useCallback(async (email) => {
    await supabaseAuth.forgot(email);
    return { ok: true };
  }, []);

  const reset = useCallback(async (token, newPassword) => {
    try {
      await supabaseAuth.reset(token, newPassword);
      return { ok: true };
    } catch (e) {
      throw new Error('Link wygasł lub jest nieprawidłowy. Poproś o nowy.');
    }
  }, []);

  const resendVerification = useCallback(async (email) => {
    await supabaseAuth.resendVerification(email);
    return { ok: true };
  }, []);

  const verifyEmail = useCallback(async (token) => {
    try {
      await supabaseAuth.verifyEmail(token);
      return { ok: true };
    } catch (e) {
      throw new Error('Nieprawidłowy link weryfikacyjny.');
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      accessToken, user, pendingMfaToken, bootstrapped,
      login, verifyMfa, register, logout,
      forgot, reset, verifyEmail, resendVerification,
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
