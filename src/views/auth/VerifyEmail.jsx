import React, { useEffect, useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';

export default function VerifyEmail({ email, onSwitch }) {
  const { resendVerification, verifyEmail } = useAuth();
  const [status, setStatus] = useState('pending');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Token może być w URL (#token) — auto-weryfikacja
    const m = window.location.hash.match(/token=([^&]+)/);
    if (m) {
      (async () => {
        try { await verifyEmail(m[1]); setStatus('success'); }
        catch { setStatus('failed'); }
      })();
    }
  }, [verifyEmail]);

  async function resend() {
    setErr(''); setLoading(true);
    try { await resendVerification(email); }
    catch (e) { setErr('Spróbuj ponownie za minutę.'); }
    finally { setLoading(false); }
  }

  return (
    <AuthLayout title="Potwierdź e-mail" subtitle="Sprawdź swoją skrzynkę">
      <div className="text-center py-4">
        <div className="text-5xl mb-3">{status==='success' ? '✅' : status==='failed' ? '⚠' : '📬'}</div>
        <p className="text-stone-700 dark:text-stone-200">
          {status==='success' && 'E-mail potwierdzony. Możesz się zalogować.'}
          {status==='failed' && 'Link wygasł lub jest nieprawidłowy.'}
          {status==='pending' && `Wysłaliśmy link aktywacyjny na ${email}. Sprawdź także folder spam.`}
        </p>
        {err && <p role="alert" className="text-xs text-red-600 dark:text-red-400 mt-2">{err}</p>}
        <div className="mt-5 flex gap-2 justify-center">
          <Button onClick={onSwitch('login')} variant="secondary">Przejdź do logowania</Button>
          {status==='pending' && <Button onClick={resend} loading={loading}>Wyślij ponownie</Button>}
        </div>
      </div>
    </AuthLayout>
  );
}
