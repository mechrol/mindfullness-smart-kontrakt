import React, { useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { PasswordInput } from '../../components/auth/PasswordInput.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { passwordStrength } from '../../contexts/AuthContext.jsx';

export default function Reset({ token, onSwitch }) {
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const s = passwordStrength(pw);
  const colors = ['', '#ef4444', '#f59e0b', '#eab308', '#22c55e', '#15803d'];

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = {};
    if (!s.valid) e.pw = 'Hasło nie spełnia wymagań.';
    if (pw !== pw2) e.pw2 = 'Hasła nie są zgodne.';
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    try {
      // Symulacja wywołania API — prawdziwa usługa byłaby tu z AuthContext
      await new Promise((r) => setTimeout(r, 600));
      setOk(true);
    } catch (err) {
      setErrors({ general: 'Link wygasł lub jest nieprawidłowy. Poproś o nowy.' });
    } finally { setLoading(false); }
  }

  return (
    <AuthLayout title="Ustaw nowe hasło" subtitle="Wprowadź silne hasło spełniające wymogi.">
      {ok ? (
        <div className="text-center py-6 animate-slide-up">
          <div className="text-5xl mb-3">✅</div>
          <p className="text-stone-700 dark:text-stone-200">Hasło zostało zmienione.</p>
          <Button onClick={() => onSwitch('login')} full className="mt-4">Zaloguj się</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          <PasswordInput id="pw" required value={pw} onChange={setPw} error={errors.pw} disabled={loading} placeholder="Nowe hasło" />
          {pw && (
            <div className="-mt-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-stone-200 dark:bg-stone-300/20 overflow-hidden">
                  <div className="h-full pw-bar" style={{ width: (s.score/5)*100 + '%', background: colors[s.score] }} />
                </div>
                <span className="text-xs font-medium" style={{ color: colors[s.score] }}>{s.label}</span>
              </div>
            </div>
          )}
          <PasswordInput id="pw2" required autoComplete="new-password" value={pw2} onChange={setPw2} error={errors.pw2} disabled={loading} placeholder="Powtórz nowe hasło" />
          {errors.general && <div role="alert" className="bg-red-100 dark:bg-red-100/10 border border-red-200 dark:border-red-300/20 text-red-700 dark:text-red-600 text-sm font-medium px-4 py-3 rounded-xl">{errors.general}</div>}
          <Button type="submit" full loading={loading}>Zmień hasło</Button>
        </form>
      )}
    </AuthLayout>
  );
}
