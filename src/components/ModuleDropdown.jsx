export default function ModuleDropdown({ modules, activeId, onSelect }) {
  return (
    <div className="dropdown-section">
      <label className="dropdown-label" htmlFor="module-select">Wybierz moduł:</label>
      <select
        id="module-select"
        className="dropdown-select"
        value={activeId}
        onChange={function (e) { onSelect(Number(e.target.value)); }}
      >
        {modules.map(function (m) {
          return (
            <option key={m.id} value={m.id}>
              {m.id}. {m.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
