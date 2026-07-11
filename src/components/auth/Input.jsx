import React from 'react';

export function Input({ id, name, type = 'text', placeholder = '', value, onChange, error, disabled, autoComplete, required = false, autoFocus = false, 'aria-describedby': ariaDesc }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <input
        id={id} name={name || id} type={type} value={value || ''} disabled={disabled} required={required}
        autoComplete={autoComplete} autoFocus={autoFocus} aria-invalid={!!error} aria-describedby={ariaDesc}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-100/5 border border-stone-200 dark:border-stone-300/20 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white dark:focus:bg-stone-100/10 transition-all duration-200 ${error ? 'input-error animate-shake' : ''}`}
      />
      {error && <p id={ariaDesc} role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
