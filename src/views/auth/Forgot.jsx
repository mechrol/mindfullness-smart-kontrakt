import React, { useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { Input } from '../../components/auth/Input.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';

const COOLDOWN_MS = 60_000; // 1 min — anti-abuse rate limit na UI

export default function Forgot({ onSwitch }) {
  const { forgot } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  async function onSubmit(ev) {
    ev.preventDefault();
    setErr('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('Niepoprawny e-mail.'); return; }
    if (Date.now() - lastSent < COOLDOWN_MS) { setErr('Poczekaj chwilę przed ponowną próbą.'); return; }
    setLoading(true);
    try {
      await forgot(email.trim());
      setSent(true);
      setLastSent(Date.now());
    } catch (e) {
      // Generycznie: nie ujawniamy, czy konto istnieje
      setSent(true); // zawsze "udane" — zapobiega enumeracji
    } finally { setLoading(false); }
  }

  return (
    <AuthLayout title="Resetuj hasło" subtitle="Wyślemy link resetujący na Twój e-mail"
      footer={<button onClick={() => onSwitch('login')} className="text-green-700 dark:text-green-600 font-semibold">← Powrót do logowania</button>}>
      {sent ? (
        <div className="text-center py-6 animate-slide-up">
          <div className="text-5xl mb-3">📧</div>
          <p className="text-stone-700 dark:text-stone-200">Jeśli konto istnieje, link resetujący został wysłany.</p>
          <p className="text-xs text-stone-500 mt-2">Sprawdź skrzynkę (także spam).</p>
          <Button onClick={() => onSwitch('login')} full className="mt-4">Powrót do logowania</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          <Input id="email" type="email" required autoFocus value={email} onChange={setEmail} error={err} disabled={loading} placeholder="E-mail" autoComplete="email" />
          <Button type="submit" full loading={loading}>Wyślij link resetujący</Button>
        </form>
      )}
    </AuthLayout>
  );
}
