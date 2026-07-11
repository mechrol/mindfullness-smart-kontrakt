import React from 'react';
import { useTheme } from '../../contexts/ThemeContext.jsx';

export default function AuthLayout({ title, subtitle, children, footer }) {
  const { theme, toggle } = useTheme();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-stone-50 px-4 py-12">
      <button onClick={toggle} className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-100/10 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-100/20 transition" aria-label="Przełącz motyw">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-6 animate-slide-up">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-200 mb-3 animate-float">🧠</div>
          <h1 className="text-2xl font-extrabold text-stone-800 dark:text-stone-800 tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-stone-500 dark:text-stone-500 mt-1">{subtitle}</p>}
        </div>

        <div className="bg-white dark:bg-stone-100/5 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-300/20 p-6 sm:p-8 animate-slide-up card-soft">
          {children}
        </div>

        {footer && <div className="text-center mt-5 text-sm text-stone-500 dark:text-stone-500">{footer}</div>}
      </div>
    </div>
  );
}
