import React from 'react';

const STATUS_ICONS = {
  done: '✓',
  in_progress: '▶',
  problem: '⚠',
  not_started: '○',
};

const STATUS_LABELS = {
  done: 'Wdrożone',
  in_progress: 'W trakcie',
  problem: 'Problem',
  not_started: 'Nie rozpoczęto',
};

export default function FactorDropdown({ factors, activeId, onSelect, factorStates }) {
  const available = factors.filter((f) => {
    const st = factorStates[f.id];
    return !st || st.status !== 'done';
  });

  return (
    <div className="factor-dropdown">
      <label className="factor-dropdown__label">
        Wybierz czynnik do wdrożenia:
      </label>
      <select
        className="factor-dropdown__select"
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
