import { useState } from "react";

const STATUS_BADGES = {
  not_started: { label: "Do zrobienia", cls: "badge-todo" },
  in_progress: { label: "W trakcie", cls: "badge-progress" },
  done: { label: "Wdrożone", cls: "badge-done" },
  problem: { label: "Problem", cls: "badge-problem" },
};

export default function FactorCard({ factor, state, onStatusChange, onReportProblem }) {
  var [showProblem, setShowProblem] = useState(false);
  var [problemDesc, setProblemDesc] = useState("");
  var badge = STATUS_BADGES[state.status] || STATUS_BADGES.not_started;

  function handleReport() {
    if (problemDesc.trim()) {
      onReportProblem(factor.id, problemDesc);
      setShowProblem(false);
    }
  }

  return (
    <div className={"factor-card " + (state.status === "problem" ? "factor-card--problem" : "")}>
      <div className="factor-card__header">
        <span className="factor-card__emoji">{factor.emoji}</span>
        <div className="factor-card__info">
          <h3 className="factor-card__name">{factor.name}</h3>
          <p className="factor-card__target">{factor.target}</p>
        </div>
        <span className={"factor-card__badge " + badge.cls}>{badge.label}</span>
      </div>
      <p className="factor-card__desc">{factor.description}</p>

      {state.status === "problem" && state.barrierId !== "default" && (
        <div className="factor-card__problem-tag">
          Problem: {state.note || "zgłoszono"}
        </div>
      )}

      <div className="factor-card__actions">
        {state.status !== "done" && (
          <button className="btn btn-sm btn-outline" onClick={function () { onStatusChange(factor.id, "done"); }}>
            ✓ Oznacz jako wdrożone
          </button>
        )}
        {state.status === "not_started" && (
          <button className="btn btn-sm btn-primary" onClick={function () { onStatusChange(factor.id, "in_progress"); }}>
            ▶ Rozpocznij
          </button>
        )}
        {state.status === "in_progress" && (
          <button className="btn btn-sm btn-accent" onClick={function () { setShowProblem(true); }}>
            ⚠ Mam problem
          </button>
        )}
        {state.status === "problem" && (
          <button className="btn btn-sm btn-outline" onClick={function () { setShowProblem(true); }}>
            🔄 Zmień opis problemu
          </button>
        )}
      </div>

      {showProblem && (
        <div className="factor-card__problem-form">
          <p className="form-label">Opisz, co sprawia Ci trudność:</p>
          <textarea
            className="form-textarea"
            rows="2"
            placeholder="Np. nie lubię smaku, nie mam czasu przygotowywać..."
            value={problemDesc}
            onChange={function (e) { setProblemDesc(e.target.value); }}
          />
          <div className="form-actions">
            <button className="btn btn-sm btn-primary" onClick={handleReport}>
              Pobierz rekomendację
            </button>
            <button className="btn btn-sm btn-ghost" onClick={function () { setShowProblem(false); }}>
              Anuluj
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
