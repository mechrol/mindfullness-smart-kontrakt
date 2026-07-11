import React, { useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';

export default function MfaVerify({ onSuccess, onBack }) {
  const { verifyMfa } = useAuth();
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('totp');

  async function onSubmit(ev) {
    ev.preventDefault();
    setErr('');
    if (!/^\d{6}$/.test(code) && mode === 'totp') { setErr('Wprowadź 6-cyfrowy kod TOTP.'); return; }
    if (code.length < 8 && mode === 'backup') { setErr('Kod zapasowy powinien mieć min. 8 znaków.'); return; }
    setLoading(true);
    try {
      await verifyMfa(code);
      onSuccess?.();
    } catch (e) {
      setErr('Niepoprawny kod. Spróbuj ponownie.');
    } finally { setLoading(false); }
  }

  return (
    <AuthLayout title="Weryfikacja dwuetapowa" subtitle="Wprowadź kod z aplikacji uwierzytelniającej">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode('totp')} className={`flex-1 py-2 rounded-xl text-sm font-semibold ${mode==='totp' ? 'bg-green-600 text-white' : 'bg-stone-100 dark:bg-stone-100/10 text-stone-700 dark:text-stone-300'}`}>Aplikacja (TOTP)</button>
        <button onClick={() => setMode('backup')} className={`flex-1 py-2 rounded-xl text-sm font-semibold ${mode==='backup' ? 'bg-green-600 text-white' : 'bg-stone-100 dark:bg-stone-100/10 text-stone-700 dark:text-stone-300'}`}>Kod zapasowy</button>
      </div>
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <input
          type="text" inputMode={mode==='totp' ? 'numeric' : 'text'} maxLength={mode==='totp' ? 6 : 12}
          autoFocus autoComplete="one-time-code" value={code}
          onChange={(e) => setCode(e.target.value.replace(/\s/g, ''))}
          aria-invalid={!!err} aria-describedby="mfa-err"
          placeholder={mode==='totp' ? '000000' : 'ABCD-1234'}
          className={`w-full text-center tracking-[0.5em] font-mono text-xl px-4 py-4 rounded-xl bg-stone-50 dark:bg-stone-100/5 border border-stone-200 dark:border-stone-300/20 text-stone-800 dark:text-stone-100 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 ${err ? 'input-error' : ''}`}
        />
        {err && <p id="mfa-err" role="alert" className="text-xs font-medium text-red-600 dark:text-red-400">{err}</p>}
        <Button type="submit" full loading={loading}>Zweryfikuj</Button>
      </form>
      <div className="mt-4 flex justify-between text-xs">
        <button onClick={onBack} className="text-stone-500 hover:text-stone-700 dark:hover:text-stone-300">← Powrót do logowania</button>
        <button onClick={() => onSuccess?.()} className="text-green-700 dark:text-green-600 hover:text-green-800">Użyj innej metody →</button>
      </div>
    </AuthLayout>
  );
}
