import React from 'react';

const STATUS_ICONS = {
  done: '\u2713',
  in_progress: '\u25B6',
  problem: '\u26A0',
  not_started: '\u25CB',
};

const STATUS_LABELS = {
  done: 'Wdro\u017Cone',
  in_progress: 'W trakcie',
  problem: 'Problem',
  not_started: 'Nie rozpocz\u0119to',
};

export default function FactorDropdown({ factors, activeId, onSelect, factorStates }) {
  const available = factors.filter((f) => {
    const st = factorStates[f.id];
    return !st || st.status !== 'done';
  });

  return (
    <div className="factor-dropdown">
      <label className="factor-dropdown__label">
        Wybierz czynnik do wdro\u017Cenia ({available.length} dost\u0119pnych):
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
