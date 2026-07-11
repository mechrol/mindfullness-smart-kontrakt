import { useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';

const EVENTS = ['mousemove','keydown','click','scroll','touchstart','focus'];

export function useIdleLogout(minutes = 15) {
  const { accessToken, logout } = useAuth();
  const timerRef = useRef(null);

  useEffect(() => {
    if (!accessToken) return undefined;
    const ms = minutes * 60 * 1000;
    const reset = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        logout().catch(() => {});
        try { alert('Zostałeś automatycznie wylogowany z powodu braku aktywności.'); } catch (e) {}
      }, ms);
    };
    EVENTS.forEach((ev) => window.addEventListener(ev, reset, { passive: true }));
    reset();
    return () => {
      EVENTS.forEach((ev) => window.removeEventListener(ev, reset));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [accessToken, logout, minutes]);
}
