import React, { useState, useEffect, useCallback } from 'react';
import useModuleState from './hooks/useModuleState.js';
import { THEMES } from './data/themes.js';
import { generateRecommendation } from './services/foxoraApi.js';
import VARIANTS from './data/mswrpVariants.js';
import ModuleDropdown from './components/ModuleDropdown.jsx';
import FactorDropdown from './components/FactorDropdown.jsx';
import FactorCard from './components/FactorCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import FanOutPanel from './components/FanOutPanel.jsx';
import SmartContractPanel from './components/SmartContractPanel.jsx';

export default function App() {
  const [themeId, setThemeId] = useState('mindfullness');
  const { modules, activeModule, activeModuleId, activeFactorId, factorStates, userContext, nextFactor, doneCount, total, progress,
    selectModule, selectFactor, markFactorDone, markFactorProblem, setFactorInProgress, setRecommendation, setUserContext, saveSmartContract,
  } = useModuleState(themeId);

  const [showSettings, setShowSettings] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  // MSWRP state
  const [mswrpFactorId, setMswrpFactorId] = useState(null);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(null);

  const handleFactorSelect = useCallback((id) => {
    if (!id) return;
    selectFactor(id);
    const st = factorStates[id];
    if (!st || st.status === 'not_started') setFactorInProgress(id);
  }, [selectFactor, setFactorInProgress, factorStates]);

  const handleStart = useCallback((id) => { setFactorInProgress(id); }, [setFactorInProgress]);

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
    } finally { setIsGenerating(false); }
  }, [activeModule, markFactorProblem, setRecommendation, userContext]);

  const handleDone = useCallback((id) => { markFactorDone(id); }, [markFactorDone]);

  // MSWRP handlers
  const handleShowMSWRP = useCallback((factorId) => {
    setMswrpFactorId(factorId);
    setSelectedVariantIdx(null);
    markFactorProblem(factorId);
  }, [markFactorProblem]);

  const handleSelectVariant = useCallback((idx) => {
    setSelectedVariantIdx(idx);
  }, []);

  const handleCancelMSWRP = useCallback(() => {
    setMswrpFactorId(null);
    setSelectedVariantIdx(null);
  }, []);

  const handleSaveContract = useCallback((contract) => {
    saveSmartContract(contract.factorId, contract);
    setMswrpFactorId(null);
    setSelectedVariantIdx(null);
  }, [saveSmartContract]);

  useEffect(() => {}, [activeFactorId, nextFactor]);

  const activeFactorData = activeModule.factors.find((f) => f.id === activeFactorId);
  const allDone = doneCount === total && total > 0;
  const currentTheme = THEMES.find((t) => t.id === themeId);
  const mswrpVariants = mswrpFactorId ? (VARIANTS[mswrpFactorId] || null) : null;
  const mswrpFactor = mswrpFactorId ? activeModule.factors.find((f) => f.id === mswrpFactorId) : null;
  const currentVariant = selectedVariantIdx !== null && mswrpVariants ? mswrpVariants[selectedVariantIdx] : null;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* PEMF Banner */}
      <a href="https://dobrobyt.aitribes.app/s/bW6xX" target="_blank" rel="noopener noreferrer"
        className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white hover:from-violet-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3"><span className="text-2xl">⚡</span><div><p className="font-bold text-base sm:text-lg leading-tight">Wzmocnij swój zdrowy styl życia z technologią <span className="underline decoration-2 decoration-white/40">PEMF</span></p><p className="text-violet-200 text-sm mt-0.5 hidden sm:block">Terapia polem elektromagnetycznym — odzyskaj energię, zredukuj stres, przyspiesz regenerację →</p></div></div>
          <span className="flex-shrink-0 ml-4 px-4 py-2 bg-white text-purple-700 font-bold text-sm rounded-full group-hover:bg-violet-100 group-hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">Sprawdź →</span>
        </div>
      </a>

      {/* Header */}
      <header className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-3xl mx-auto px-6 py-8 pb-12">
          <div className="flex items-center justify-between mb-2">
            <div><h1 className="text-4xl font-extrabold tracking-tight">Mindfullness</h1><p className="text-green-100 text-lg mt-1 font-light">{currentTheme?.description || 'Długowieczność przez świadome odżywianie i styl życia'}</p></div>
            <button onClick={() => setShowSettings(true)} className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 text-white text-xl" title="Ustawienia">⚙</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 -mt-6 pb-12 w-full">
        {/* Theme & Module selects */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-5 mb-6 animate-slide-up">
          <div className="mb-4"><label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Temat</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {THEMES.map((t) => (
                <button key={t.id} onClick={() => setThemeId(t.id)} className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${themeId === t.id ? 'bg-green-600 text-white shadow-md shadow-green-200 scale-105' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800'}`}>{t.name}</button>
              ))}
            </div>
          </div>
          <ModuleDropdown modules={modules} activeId={activeModuleId} onSelect={selectModule} />
        </div>

        {/* Module card */}
        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-6 mb-6 animate-slide-up">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Moduł {activeModule.id}</span>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">{activeModule.title}</h2>
          <p className="text-stone-500 leading-relaxed mb-4">{activeModule.desc}</p>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1 bg-stone-100 rounded-full px-3 py-1 font-semibold text-green-700">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {doneCount}/{total} czynników wdrożonych
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <ProgressBar done={doneCount} total={total} label={`Postęp modułu ${activeModule.id}`} />

        {/* Factor dropdown */}
        <div className="mt-5"><FactorDropdown factors={activeModule.factors} activeId={activeFactorId} onSelect={handleFactorSelect} factorStates={factorStates} /></div>

        {/* Next hint */}
        {!activeFactorId && nextFactor && (
          <div onClick={() => handleFactorSelect(nextFactor.id)} className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all duration-200 animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse-green">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              <div><strong className="text-green-800">Następny krok:</strong> <span className="text-green-700">{nextFactor.name}</span><br /><small className="text-green-500">Kliknij, aby rozpocząć →</small></div>
            </div>
          </div>
        )}

        {/* All done */}
        {allDone && (
          <div className="mt-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-center animate-slide-up shadow-lg">
            <div className="text-4xl mb-2">🎉</div><p className="text-xl font-bold">Wszystkie 15 czynników wdrożonych!</p><p className="text-green-100 mt-1">Gratulacje! Wybierz kolejny moduł, aby kontynuować.</p>
          </div>
        )}

        {/* Factor card */}
        {activeFactorData && (
          <div className="mt-5 animate-slide-up">
            <FactorCard
              factor={activeFactorData}
              factorState={factorStates[activeFactorData.id] || { status: 'not_started' }}
              onStart={handleStart} onProblem={handleProblem} onDone={handleDone}
              userContext={userContext} onContextChange={setUserContext}
              isGenerating={isGenerating} onShowMSWRP={handleShowMSWRP}
            >
              {/* FanOut Panel for active factor */}
              {mswrpFactorId === activeFactorData.id && mswrpVariants && selectedVariantIdx === null && (
                <FanOutPanel factor={mswrpFactor} variants={mswrpVariants} onSelect={handleSelectVariant} onCancel={handleCancelMSWRP} />
              )}
              {/* SmartContract Panel */}
              {mswrpFactorId === activeFactorData.id && mswrpVariants && selectedVariantIdx !== null && currentVariant && (
                <SmartContractPanel factor={mswrpFactor} variant={currentVariant} onSave={handleSaveContract} onCancel={handleCancelMSWRP} />
              )}
            </FactorCard>
          </div>
        )}

        {/* FanOut / SmartContract for MSWRP factor NOT currently active */}
        {mswrpFactorId && mswrpFactorId !== activeFactorData?.id && mswrpFactor && mswrpVariants && (
          <div className="mt-5 animate-slide-up">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-stone-200">
              <h3 className="text-lg font-bold text-stone-800 mb-2">{mswrpFactor.name}</h3>
              {selectedVariantIdx === null ? (
                <FanOutPanel factor={mswrpFactor} variants={mswrpVariants} onSelect={handleSelectVariant} onCancel={handleCancelMSWRP} />
              ) : (
                <SmartContractPanel factor={mswrpFactor} variant={mswrpVariants[selectedVariantIdx]} onSave={handleSaveContract} onCancel={handleCancelMSWRP} />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Settings modal */}
      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </div>
  );
}
