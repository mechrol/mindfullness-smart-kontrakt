export default function FactorDropdown({ factors, factorStates, onSelect, activeFactorId }) {
  return (
    <div className="dropdown-section">
      <label className="dropdown-label" htmlFor="factor-select">
        Wybierz czynnik do wdrożenia ({factors.length} dostępnych):
      </label>
      <select
        id="factor-select"
        className="dropdown-select"
        value={activeFactorId || ""}
        onChange={function (e) { onSelect(e.target.value); }}
      >
        <option value="">— wybierz czynnik —</option>
        {factors.map(function (f) {
          var st = factorStates[f.id];
          var statusLabel = "";
          if (st && st.status === "done") statusLabel = " ✓";
          else if (st && st.status === "in_progress") statusLabel = " ▶";
          else if (st && st.status === "problem") statusLabel = " ⚠";
          return (
            <option key={f.id} value={f.id}>
              {f.emoji} {f.name}{statusLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
