import React from 'react';
import RecommendationPanel from './RecommendationPanel.jsx';

const STATUS_BADGE = {
  not_started: { label: 'Nie rozpoczęto', cls: 'badge-todo' },
  in_progress: { label: 'W trakcie', cls: 'badge-progress' },
  problem: { label: 'Problem — potrzebna metoda', cls: 'badge-problem' },
  done: { label: 'Wdrożone', cls: 'badge-done' },
};

export default function FactorCard({
  factor,
  factorState,
  onStart,
  onProblem,
  onDone,
  userContext,
  onContextChange,
  isGenerating,
}) {
  const status = (factorState && factorState.status) || 'not_started';
  const badge = STATUS_BADGE[status] || STATUS_BADGE.not_started;
  const rec = factorState && factorState.recommendation;

  return (
    <div className={`factor-card${status === 'problem' ? ' factor-card--problem' : ''}`}>
      <div className="factor-card__header">
        <div className="factor-card__info">
          <h3 className="factor-card__name">{factor.name}</h3>
          <span className={`factor-card__badge ${badge.cls}`}>{badge.label}</span>
        </div>
      </div>

      <p className="factor-card__desc">{factor.desc}</p>

      {factor.barriers && factor.barriers.length > 0 && (
        <div className="factor-card__barriers">
          <strong>Bariery:</strong>
          <ul>
            {factor.barriers.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="factor-card__context">
        <label className="factor-card__context-label">Twój kontekst (opcjonalnie):</label>
        <textarea
          className="factor-card__context-input"
          value={userContext || ''}
          onChange={(e) => onContextChange(e.target.value)}
          placeholder="Opisz swoją sytuację, trudności, cele..."
          rows={3}
        />
      </div>

      <div className="factor-card__actions">
        {(status === 'not_started') && (
          <>
            <button className="btn btn-primary" onClick={() => onStart(factor.id)}>
              Rozpocznij wdrażanie
            </button>
            <button className="btn btn-accent" onClick={() => onProblem(factor.id)}>
              Mam problem — potrzebuję metody
            </button>
          </>
        )}

        {(status === 'in_progress') && (
          <>
            <button className="btn btn-primary" onClick={() => onDone(factor.id)}>
              Oznacz jako wdrożone
            </button>
            <button className="btn btn-accent" onClick={() => onProblem(factor.id)}>
              Mam problem — potrzebuję metody
            </button>
          </>
        )}

        {(status === 'problem') && (
          <button className="btn btn-primary" onClick={() => onDone(factor.id)}>
            Oznacz jako wdrożone
          </button>
        )}

        {isGenerating && (
          <div className="factor-card__generating">
            <div className="spinner" />
            <span>Generuję rekomendację metodą MSWRP...</span>
          </div>
        )}
      </div>

      {rec && !rec.error && (
        <RecommendationPanel recommendation={rec} onDone={() => onDone(factor.id)} />
      )}

      {rec && rec.error && (
        <div className="factor-card__error">
          Błąd generowania: {rec.error}
        </div>
      )}
    </div>
  );
}
