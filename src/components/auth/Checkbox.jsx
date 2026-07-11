import React from 'react';

export function Checkbox({ id, name, checked, onChange, disabled, children }) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer select-none">
      <input id={id} name={name || id} type="checkbox" checked={!!checked} onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled} className="mt-0.5 h-4 w-4 rounded border-stone-300 text-green-600 focus:ring-2 focus:ring-green-300" />
      <span className="text-sm text-stone-700 dark:text-stone-300">{children}</span>
    </label>
  );
}
