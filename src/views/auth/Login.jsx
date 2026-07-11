import React, { useState } from 'react';
import AuthLayout from './AuthLayout.jsx';
import { Input } from '../../components/auth/Input.jsx';
import { PasswordInput } from '../../components/auth/PasswordInput.jsx';
import { Button } from '../../components/auth/Button.jsx';
import { Checkbox } from '../../components/auth/Checkbox.jsx';
import Turnstile from '../../components/auth/Turnstile.jsx';
import { useAuth, normalizeAuthError, GENERIC_AUTH_ERROR } from '../../contexts/AuthContext.jsx';

const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login({ onSwitch, onSuccess, navigate }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const turnstileRef = useState({ current: null })[0];

  function validate() {
    const e = {};
    if (!VALID_EMAIL.test(email)) e.email = 'Niepoprawny format e-mail.';
    if (!password) e.password = 'Wprowadź hasło.';
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    setFormError('');
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.requiresMfa) {
        navigate?.('mfa');
        return;
      }
      onSuccess?.();
    } catch (err) {
      setFormError(GENERIC_AUTH_ERROR);
    } finally {
      setLoading(false);
    }
  }

  async function social(provider) {
    setFormError('');
    try {
      const { useAuth: ctx } = { useAuth };
      const auth = ctx();
      await auth.oauth(provider);
      onSuccess?.();
    } catch (e) {
      setFormError(GENERIC_AUTH_ERROR);
    }
  }

  return (
    <AuthLayout title="Zaloguj się" subtitle="Kontynuuj swoją drogę Wellness"
      footer={<span>Nie masz konta? <button onClick={() => onSwitch('register')} className="text-green-700 dark:text-green-600 hover:text-green-800 font-semibold">Utwórz konto →</button></span>}>
      <form onSubmit={onSubmit} noValidate aria-describedby="login-error" className="space-y-4">
        <Input id="email" type="email" placeholder="E-mail" autoComplete="username" required autoFocus
          value={email} onChange={setEmail} error={errors.email} disabled={loading} />
        <PasswordInput id="password" placeholder="Hasło" autoComplete="current-password" required
          value={password} onChange={setPassword} error={errors.password} disabled={loading} />
        <div className="flex items-center justify-between">
          <Checkbox id="remember" checked={remember} onChange={setRemember}>Zapamiętaj mnie</Checkbox>
          <button type="button" onClick={() => onSwitch('forgot')} className="text-sm font-semibold text-green-700 dark:text-green-600 hover:text-green-800">Zapomniałeś?</button>
        </div>
        <Turnstile ref={turnstileRef} siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} />
        {formError && <div id="login-error" role="alert" className="bg-red-100 dark:bg-red-100/10 border border-red-200 dark:border-red-300/20 text-red-700 dark:text-red-600 text-sm font-medium px-4 py-3 rounded-xl">{formError}</div>}
        <Button type="submit" full loading={loading}>Zaloguj się</Button>
        <div className="relative my-2"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-200 dark:border-stone-300/20"/></div><div className="relative flex justify-center"><span className="bg-white dark:bg-stone-100/5 px-3 text-xs text-stone-500">lub kontynuuj przez</span></div></div>
        <div className="grid grid-cols-1 gap-2">
          <Button type="button" variant="social" full onClick={() => social('google')} disabled={loading}>🔵 Google</Button>
          <Button type="button" variant="social" full onClick={() => social('apple')} disabled={loading}>🍎 Apple</Button>
          <Button type="button" variant="social" full onClick={() => social('github')} disabled={loading}>🐙 GitHub</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
