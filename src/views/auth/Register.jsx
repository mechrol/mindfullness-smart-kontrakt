import React, { useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { Input } from '../../components/auth/Input.jsx';
import { PasswordInput } from '../../components/auth/PasswordInput.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { Checkbox } from '../../components/auth/Checkbox.jsx';
import Turnstile from '../../components/auth/Turnstile.jsx';
import { useAuth, passwordStrength } from '../../contexts/AuthContext.jsx';
import { Link } from 'react';

export default function Register({ onSwitch, onSuccess, navigate }) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const strength = passwordStrength(pw);
  const pwColors = ['', '#ef4444', '#f59e0b', '#eab308', '#22c55e', '#15803d'];

  function validate() {
    const e = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Podaj imię (min. 2 znaki).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Niepoprawny e-mail.';
    if (!strength.valid) e.pw = 'Hasło musi mieć ≥12 znaków, wielkie/małe litery, cyfry i znak specjalny.';
    if (pw !== pw2) e.pw2 = 'Hasła nie są zgodne.';
    if (!accept) e.accept = 'Wymagana akceptacja regulaminu.';
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    setServerMsg('');
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    try {
      await register({ name: name.trim(), email: email.trim(), password: pw, acceptTerms: accept });
      navigate?.('verify-email');
    } catch (err) {
      // Generyczny komunikat — ukrywamy szczegóły enumeracji
      setServerMsg('Rejestracja nie powiodła się. Spróbuj ponownie.');
    } finally { setLoading(false); }
  }

  return (
    <AuthLayout title="Utwórz konto" subtitle="Dołącz do Smart Kontrakt Wellness"
      footer={<span>Masz już konto? <button onClick={() => onSwitch('login')} className="text-green-700 dark:text-green-600 font-semibold">Zaloguj się →</button></span>}>
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <Input id="name" required autoFocus value={name} onChange={setName} error={errors.name} disabled={loading} placeholder="Imię" autoComplete="given-name" />
        <Input id="email" type="email" required value={email} onChange={setEmail} error={errors.email} disabled={loading} placeholder="E-mail" autoComplete="email" />
        <div>
          <PasswordInput id="pw" required autoComplete="new-password" value={pw} onChange={setPw} error={errors.pw} disabled={loading} placeholder="Hasło (min. 12 znaków, A-z, 0-9, znak specjalny)" />
          {pw && (
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-stone-200 dark:bg-stone-300/20 overflow-hidden">
                  <div className="h-full pw-bar" style={{ width: (strength.score/5)*100 + '%', background: pwColors[strength.score] }} />
                </div>
                <span className="text-xs font-medium" style={{ color: pwColors[strength.score] }}>{strength.label}</span>
              </div>
            </div>
          )}
        </div>
        <PasswordInput id="pw2" required autoComplete="new-password" value={pw2} onChange={setPw2} error={errors.pw2} disabled={loading} placeholder="Powtórz hasło" />
        <Checkbox id="accept" checked={accept} onChange={setAccept} disabled={loading}>
          Akceptuję <a href="/terms" className="underline text-green-700 dark:text-green-600">Regulamin</a> oraz <a href="/privacy" className="underline text-green-700 dark:text-green-600">Politykę prywatności</a>.
        </Checkbox>
        {errors.accept && <p role="alert" className="text-xs text-red-600 dark:text-red-400">{errors.accept}</p>}
        {serverMsg && <div role="alert" className="bg-red-100 dark:bg-red-100/10 border border-red-200 dark:border-red-300/20 text-red-700 dark:text-red-600 text-sm font-medium px-4 py-3 rounded-xl">{serverMsg}</div>}
        <Button type="submit" full loading={loading}>Utwórz konto</Button>
      </form>
    </AuthLayout>
  );
}
