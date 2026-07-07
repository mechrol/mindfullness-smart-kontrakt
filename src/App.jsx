import useModuleState from "./hooks/useModuleState.js";
import FactorCard from "./components/FactorCard.jsx";
import RecommendationPanel from "./components/RecommendationPanel.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { useState } from "react";

export default function App() {
  var _a = useModuleState(), module = _a.module, factorStates = _a.factorStates,
      setFactorStatus = _a.setFactorStatus, reportProblem = _a.reportProblem,
      getRecommendation = _a.getRecommendation, progress = _a.progress;
  var [activeRec, setActiveRec] = useState(null);
  var [activeFactor, setActiveFactor] = useState(null);

  function handleReportProblem(factorId, description) {
    var result = reportProblem(factorId, description);
    var factor = module.factors.find(function (f) { return f.id === factorId; });
    setActiveFactor(factor);
    setActiveRec(result);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-title">Mindfullness</h1>
          <p className="app-subtitle">Długowieczność przez świadome odżywianie</p>
        </div>
      </header>

      <main className="app-main">
        <section className="module-section">
          <div className="module-card">
            <div className="module-card__badge">Moduł {module.id}</div>
            <h2 className="module-card__title">{module.title}</h2>
            <p className="module-card__subtitle">{module.subtitle}</p>
            <p className="module-card__desc">{module.description}</p>
          </div>

          <ProgressBar value={progress} label="Postęp modułu" />

          <div className="factors-grid">
            {module.factors.map(function (factor) {
              return (
                <FactorCard
                  key={factor.id}
                  factor={factor}
                  state={factorStates[factor.id] || { status: "not_started", barrierId: null, note: "" }}
                  onStatusChange={setFactorStatus}
                  onReportProblem={handleReportProblem}
                />
              );
            })}
          </div>
        </section>

        {activeRec && activeFactor && (
          <RecommendationPanel
            factor={activeFactor}
            recommendation={activeRec}
            onDismiss={function () { setActiveRec(null); setActiveFactor(null); }}
          />
        )}
      </main>
    </div>
  );
}
