import React from 'react';

export function Button({ children, type = 'button', onClick, disabled, loading, variant = 'primary', full = false, className = '', ariaLabel }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed';
  const w = full ? 'w-full' : '';
  const styles = {
    primary: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md shadow-green-200 btn-shine',
    secondary: 'bg-stone-100 dark:bg-stone-100/10 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-100/20 border border-stone-200 dark:border-stone-300/20',
    social: 'bg-white dark:bg-stone-100/5 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-300/20 hover:bg-stone-50 dark:hover:bg-stone-100/10 shadow-sm',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md shadow-red-200',
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} aria-label={ariaLabel}
      className={`${base} ${w} ${styles[variant] || styles.primary} ${className} text-sm px-5 py-3`}>
      {loading && <span className="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
