import React from 'react';

export default function RecommendationPanel({ recommendation, onDone }) {
  if (!recommendation) return null;

  return (
    <div className="rec-panel">
      <h3 className="rec-panel__title">Rekomendacja MSWRP</h3>

      <div className="rec-panel__section">
        <h4 className="rec-panel__section-title">ZASADA</h4>
        <p className="rec-panel__text">{recommendation.zasada}</p>
      </div>

      <div className="rec-panel__section">
        <h4 className="rec-panel__section-title">PROCEDURA</h4>
        <p className="rec-panel__text rec-panel__text--pre">{recommendation.procedura}</p>
      </div>

      <div className="rec-panel__section">
        <h4 className="rec-panel__section-title">PIERWSZY KROK (24H)</h4>
        <p className="rec-panel__text rec-panel__text--highlight">{recommendation.pierwszyKrok}</p>
      </div>

      <div className="rec-panel__section">
        <h4 className="rec-panel__section-title">WERYFIKACJA</h4>
        <p className="rec-panel__text">{recommendation.weryfikacja}</p>
      </div>

      <button className="btn btn-primary rec-panel__done-btn" onClick={onDone}>
        Oznacz jako wdrożone
      </button>
    </div>
  );
}
