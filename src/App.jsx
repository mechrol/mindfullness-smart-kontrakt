import React, { useState, useEffect, useCallback } from 'react';
import useModuleState from './hooks/useModuleState.js';
import { THEMES } from './data/themes.js';
import { generateRecommendation } from './services/foxoraApi.js';
import ModuleDropdown from './components/ModuleDropdown.jsx';
import FactorDropdown from './components/FactorDropdown.jsx';
import FactorCard from './components/FactorCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';

export default function App() {
  const [themeId, setThemeId] = useState('mindfullness');
  const {
    modules,
    activeModule,
    activeModuleId,
    activeFactorId,
    factorStates,
    userContext,
    nextFactor,
    doneCount,
    total,
    progress,
    selectModule,
    selectFactor,
    markFactorDone,
    markFactorProblem,
    setFactorInProgress,
    setRecommendation,
    setUserContext,
  } = useModuleState(themeId);

  const [showSettings, setShowSettings] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFactorSelect = useCallback((id) => {
    if (!id) return;
    selectFactor(id);
    const st = factorStates[id];
    if (!st || st.status === 'not_started') {
      setFactorInProgress(id);
    }
  }, [selectFactor, setFactorInProgress, factorStates]);

  const handleStart = useCallback((id) => {
    setFactorInProgress(id);
  }, [setFactorInProgress]);

  const handleProblem = useCallback(async (id) => {
    markFactorProblem(id);
    const factor = activeModule.factors.find((f) => f.id === id);
    if (!factor) return;

    setIsGenerating(true);
    try {
      const rec = await generateRecommendation(factor, userContext);
      setRecommendation(id, rec);
    } catch (err) {
      setRecommendation(id, { error: 'Failed to generate: ' + err.message });
    } finally {
      setIsGenerating(false);
    }
  }, [activeModule, markFactorProblem, setRecommendation, userContext]);

  const handleDone = useCallback((id) => {
    markFactorDone(id);
    // Auto-advance to next unimplemented factor
  }, [markFactorDone]);

  // Auto-advance when no active factor and there's a next one
  useEffect(() => {
    if (!activeFactorId && nextFactor) {
      // Don't auto-advance if user explicitly deselected; just show the hint
    }
  }, [activeFactorId, nextFactor]);

  const activeFactorData = activeModule.factors.find((f) => f.id === activeFactorId);
  const allDone = doneCount === total && total > 0;

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__top">
            <h1 className="app-title">Mindfullness</h1>
            <button
              className="btn btn-sm btn-outline-white"
              onClick={() => setShowSettings(true)}
              title="Ustawienia"
            >
              ⚙
            </button>
          </div>
          <p className="app-subtitle">Długowieczność przez świadome odżywianie</p>
        </div>
      </header>

      <main className="app-main">
        <div className="theme-select">
          <label className="theme-select__label">Temat:</label>
          <select
            className="theme-select__dropdown"
            value={themeId}
            onChange={(e) => setThemeId(e.target.value)}
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        <ModuleDropdown modules={modules} activeId={activeModuleId} onSelect={selectModule} />

        <section className="module-section">
          <div className="module-card">
            <div className="module-card__badge">Moduł {activeModule.id}</div>
            <h2 className="module-card__title">{activeModule.title}</h2>
            <p className="module-card__desc">{activeModule.desc}</p>
            <div className="module-card__count">
              {doneCount}/{total} czynników wdrożonych
            </div>
          </div>

          <ProgressBar done={doneCount} total={total} label={`Postęp modułu ${activeModule.id}`} />

          <FactorDropdown
            factors={activeModule.factors}
            activeId={activeFactorId}
            onSelect={handleFactorSelect}
            factorStates={factorStates}
          />

          {!activeFactorId && nextFactor && (
            <div className="next-hint" onClick={() => handleFactorSelect(nextFactor.id)}>
              <div>
                <strong>Następny krok:</strong> {nextFactor.name}
                <br />
                <small>Kliknij, aby rozpocząć →</small>
              </div>
            </div>
          )}

          {allDone && (
            <div className="all-done-banner">
              <p>Wszystkie 15 czynników wdrożonych! Gratulacje!</p>
            </div>
          )}

          {activeFactorData && (
            <FactorCard
              factor={activeFactorData}
              factorState={factorStates[activeFactorData.id] || { status: 'not_started' }}
              onStart={handleStart}
              onProblem={handleProblem}
              onDone={handleDone}
              userContext={userContext}
              onContextChange={setUserContext}
              isGenerating={isGenerating}
            />
          )}
        </section>
      </main>

      {showSettings && (
        <SettingsPanel onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}
