export default function RecommendationPanel({ factor, recommendation, onDismiss }) {
  if (!recommendation) return null;
  var p = recommendation.procedure;

  return (
    <div className="rec-panel">
      <div className="rec-panel__header">
        <span className="rec-panel__emoji">{factor.emoji}</span>
        <div>
          <h2 className="rec-panel__title">{p.title}</h2>
          <p className="rec-panel__subtitle">
            Dopasowano do: {recommendation.barrierLabel}
          </p>
        </div>
        <button className="btn btn-ghost rec-panel__close" onClick={onDismiss}>✕</button>
      </div>

      <p className="rec-panel__intro">
        Poniżej Twoja spersonalizowana ścieżka przejścia od problemu (NIE) do rozwiązania (TAK).
        Realizuj krok po kroku — każda faza buduje fundament pod następną.
      </p>

      <div className="rec-panel__steps">
        {p.steps.map(function (step, i) {
          return (
            <div key={i} className="step-card">
              <div className="step-card__phase">
                <span className="step-card__dot">{i + 1}</span>
                {step.phase}
              </div>
              <p className="step-card__instruction">{step.instruction}</p>
              <span className="step-card__duration">{step.duration}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
