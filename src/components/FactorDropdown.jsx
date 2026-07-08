import React from 'react';

const STATUS_ICONS = {
  done: '✓',
  in_progress: '▶',
  problem: '⚠',
  not_started: '○',
};

export default function FactorDropdown({ factors, activeId, onSelect, factorStates }) {
  return (
    <div>
      <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
        Wybierz czynnik do wdrożenia:
      </label>
      <select
        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800
                   focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                   transition-all duration-200 appearance-none cursor-pointer
                   bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%2378716c%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
                   bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
        value={activeId}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Wybierz czynnik --</option>
        {factors.map((f) => {
          const st = factorStates[f.id];
          const status = (st && st.status) || 'not_started';
          const icon = STATUS_ICONS[status] || STATUS_ICONS.not_started;
          return (
            <option key={f.id} value={f.id}>
              {icon} {f.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
