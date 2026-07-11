import React, { useState } from 'react';

export function PasswordInput({ id, name, value, onChange, error, disabled, autoComplete = 'current-password', required = false, placeholder = 'Hasło' }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="relative">
      <input
        id={id} name={name || id} type={shown ? 'text' : 'password'}
        autoComplete={autoComplete} required={required} disabled={disabled}
        aria-invalid={!!error} aria-describedby={id + '-err'}
        value={value || ''} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder}
        className={`w-full px-4 py-3 pr-12 rounded-xl bg-stone-50 dark:bg-stone-100/5 border border-stone-200 dark:border-stone-300/20 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white dark:focus:bg-stone-100/10 transition-all duration-200 ${error ? 'input-error animate-shake' : ''}`}
      />
      <button type="button" tabIndex={-1} aria-label={shown ? 'Ukryj hasło' : 'Pokaż hasło'}
        disabled={disabled} onClick={() => setShown((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition">
        <span aria-hidden="true">{shown ? '🙈' : '👁'}</span>
      </button>
      {error && <p id={id + '-err'} role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
