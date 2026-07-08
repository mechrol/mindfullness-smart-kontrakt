import React from 'react';

export default function ModuleDropdown({ modules, activeId, onSelect }) {
  return (
    <div className="module-dropdown">
      <label className="module-dropdown__label">Wybierz moduł:</label>
      <select
        className="module-dropdown__select"
        value={activeId}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        {modules.map((m) => (
          <option key={m.id} value={m.id}>
            {m.id}. {m.title}
          </option>
        ))}
      </select>
    </div>
  );
}
