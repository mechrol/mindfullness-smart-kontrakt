import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

// Wrapper dla Turnstile/reCAPTCHA. Pozostaje stub-injection: rodzic dostaje token przez onVerify(ref).
// Nie ładuje skryptu (wymaga konfiguracji backendu). Renderuje "ukryty input" + badge.

const Turnstile = forwardRef(function Turnstile({ siteKey, onVerify, onExpired, action = 'auth' }, ref) {
  const tokenRef = useRef(null);
  useEffect(() => { /* tu wstrzyknąłbyś skrypt Turnstile */ }, [siteKey]);
  useImperativeHandle(ref, () => ({
    getToken: () => tokenRef.current,
    reset: () => { tokenRef.current = null; onExpired?.(); },
  }));
  // Placeholder ukrytego inputu — w realu zastąpiony widgetem Turnstile.
  return (
    <div className="rounded-xl border border-dashed border-stone-300 dark:border-stone-300/30 bg-stone-50 dark:bg-stone-100/5 p-3 text-xs text-stone-500">
      🛡 Ochrona przed botami ({siteKey ? 'Turnstile skonfigurowany' : 'Tryb demo — skonfiguruj VITE_TURNSTILE_SITE_KEY'})
    </div>
  );
});
export default Turnstile;
