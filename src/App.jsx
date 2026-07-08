import useModuleState from "./hooks/useModuleState.js";
import ModuleDropdown from "./components/ModuleDropdown.jsx";
import FactorDropdown from "./components/FactorDropdown.jsx";
import FactorCard from "./components/FactorCard.jsx";
import RecommendationPanel from "./components/RecommendationPanel.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { useState } from "react";

export default function App() {
  var _a = useModuleState(),
      modules = _a.modules, activeModule = _a.activeModule, activeModuleId = _a.activeModuleId,
      factorStates = _a.factorStates, setFactorStatus = _a.setFactorStatus,
      reportProblem = _a.reportProblem, selectModule = _a.selectModule,
      nextFactor = _a.nextFactor, unimplemented = _a.unimplemented,
      progress = _a.progress, doneCount = _a.doneCount, total = _a.total;

  var [activeFactorId, setActiveFactorId] = useState("");
  var [activeRec, setActiveRec] = useState(null);
  var [activeFactor, setActiveFactor] = useState(null);

  function handleFactorSelect(id) {
    setActiveFactorId(id);
    setActiveRec(null);
    setActiveFactor(null);
    /* auto-start */
    var st = factorStates[id];
    if (!st || st.status === "not_started") {
      setFactorStatus(id, "in_progress");
    }
  }

  function handleReportProblem(factorId, description) {
    var result = reportProblem(factorId, description);
    var factor = activeModule.factors.find(function (f) { return f.id === factorId; });
    setActiveFactor(factor);
    setActiveRec(result);
  }

  function handleMarkDone(factorId) {
    setFactorStatus(factorId, "done");
    /* po oznaczeniu jako done — auto-następny */
    setActiveRec(null);
    setActiveFactor(null);
    var remaining = activeModule.factors.filter(function (f) {
      var s = factorStates[f.id];
      var fid = f.id;
      if (fid === factorId) return false; /* pomiń właśnie zakończony */
      return !s || s.status !== "done";
    });
    if (remaining.length > 0) {
      setActiveFactorId(remaining[0].id);
      setFactorStatus(remaining[0].id, "in_progress");
    } else {
      setActiveFactorId("");
    }
  }

  var activeFactorData = activeFactorId ? activeModule.factors.find(function (f) { return f.id === activeFactorId; }) : null;

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-title">Mindfullness</h1>
          <p className="app-subtitle">Akademia Wellness — 100 modułów, krok po kroku</p>
        </div>
      </header>

      <main className="app-main">
        {/* ── Selektor modułu ── */}
        <ModuleDropdown modules={modules} activeId={activeModuleId} onSelect={selectModule} />

        <section className="module-section">
          <div className="module-card">
            <div className="module-card__badge">Moduł {activeModule.id}</div>
            <h2 className="module-card__title">{activeModule.title}</h2>
            <p className="module-card__subtitle">{activeModule.subtitle}</p>
            <p className="module-card__desc">{activeModule.description}</p>
            <div className="module-card__count">
              {doneCount}/{total} czynników wdrożonych
            </div>
          </div>

          <ProgressBar value={progress} label={"Postęp modułu " + activeModule.id} />

          {/* ── Selektor czynnika (tylko niewdrożone) ── */}
          {unimplemented.length > 0 && (
            <FactorDropdown
              factors={unimplemented}
              factorStates={factorStates}
              onSelect={handleFactorSelect}
              activeFactorId={activeFactorId}
            />
          )}

          {/* ── Auto-następny podpowiedź ── */}
          {!activeFactorId && nextFactor && (
            <div className="next-hint" onClick={function () { handleFactorSelect(nextFactor.id); }}>
              <span className="next-hint__emoji">{nextFactor.emoji}</span>
              <div>
                <strong>Następny krok:</strong> {nextFactor.name}
                <br />
                <small>Kliknij, aby rozpocząć →</small>
              </div>
            </div>
          )}

          {/* ── Aktywny czynnik — karta interakcji ── */}
          {activeFactorData && (
            <div className="factors-grid">
              <FactorCard
                factor={activeFactorData}
                state={factorStates[activeFactorData.id] || { status: "not_started", barrierId: null, note: "" }}
                onStatusChange={function (fid, status) {
                  if (status === "done") { handleMarkDone(fid); }
                  else { setFactorStatus(fid, status); }
                }}
                onReportProblem={handleReportProblem}
                showDoneButton={true}
              />
            </div>
          )}

          {/* ── Panel rekomendacji (Metoda) ── */}
          {activeRec && activeFactor && (
            <RecommendationPanel
              factor={activeFactor}
              recommendation={activeRec}
              onDismiss={function () { setActiveRec(null); setActiveFactor(null); }}
            />
          )}

          {/* ── Wszystkie czynniki — podgląd statusów ── */}
          {activeModule.factors.length > 0 && (
            <details className="all-factors">
              <summary>Wszystkie czynniki ({activeModule.factors.length})</summary>
              <div className="factors-grid">
                {activeModule.factors.map(function (f) {
                  var st = factorStates[f.id] || { status: "not_started" };
                  var isActive = f.id === activeFactorId;
                  return (
                    <div
                      key={f.id}
                      className={"factor-mini" + (isActive ? " factor-mini--active" : "") + (st.status === "done" ? " factor-mini--done" : "")}
                      onClick={function () { handleFactorSelect(f.id); }}
                    >
                      <span className="factor-mini__emoji">{f.emoji}</span>
                      <span className="factor-mini__name">{f.name}</span>
                      {st.status === "done" && <span className="factor-mini__check">✓</span>}
                    </div>
                  );
                })}
              </div>
            </details>
          )}
        </section>
      </main>
    </div>
  );
}
