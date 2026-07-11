import React, { useState, useEffect, useCallback } from 'react';
import useModuleState from './hooks/useModuleState.js';
import { THEMES } from './data/themes.js';
import { generateRecommendation } from './services/foxoraApi.js';
import CHALLENGES from './data/challenges.js';
import ModuleDropdown from './components/ModuleDropdown.jsx';
import FactorDropdown from './components/FactorDropdown.jsx';
import FactorCard from './components/FactorCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';

const COMMUNITY_URL = 'https://dobrobyt.aitribes.app/s/bW6xX';
const INACTIVE_THEMES = new Set(['sport','sen','relacje','praca','finanse']);

const TABS = [
  { id:'mindfullness', label:'Mindfullness', icon:'🧠' },
  { id:'dzienniczek', label:'Dzienniczek', icon:'📓' },
  { id:'zdarzenia', label:'Zdarzenia', icon:'📅' },
  { id:'raport', label:'Raport', icon:'📊' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('mindfullness');
  const [themeId, setThemeId] = useState('mindfullness');
  const {
    modules, activeModule, activeModuleId, activeFactorId, factorStates, userContext,
    nextFactor, doneCount, total, progress,
    selectModule, selectFactor, markFactorDone, markFactorProblem, setFactorInProgress,
    setRecommendation, setUserContext, setChallenge,
  } = useModuleState(themeId);

  const [showSettings, setShowSettings] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handleShowChallenge = useCallback((factorId) => {
    const ch = CHALLENGES[factorId];
    if (ch) setChallenge(factorId, ch);
  }, [setChallenge]);

  const handleCloseChallenge = useCallback((factorId) => {
    setChallenge(factorId, null);
  }, [setChallenge]);

  useEffect(() => {}, [activeFactorId, nextFactor]);

  const activeFactorData = activeModule.factors.find((f) => f.id === activeFactorId);
  const activeFactorState = activeFactorData ? (factorStates[activeFactorData.id] || { status: 'not_started' }) : null;
  const allDone = doneCount === total && total > 0;
  const currentTheme = THEMES.find((t) => t.id === themeId);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* PEMF Banner */}
      <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer"
        className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white hover:from-violet-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3"><span className="text-2xl">⚡</span><div><p className="font-bold text-base sm:text-lg leading-tight">Wzmocnij swój zdrowy styl życia z technologią <span className="underline decoration-2 decoration-white/40">PEMF</span></p><p className="text-violet-200 text-sm mt-0.5 hidden sm:block">Terapia polem elektromagnetycznym — odzyskaj energię, zredukuj stres, przyspiesz regenerację →</p></div></div>
          <span className="flex-shrink-0 ml-4 px-4 py-2 bg-white text-purple-700 font-bold text-sm rounded-full group-hover:bg-violet-100 group-hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">Sprawdź →</span>
        </div>
      </a>

      {/* Tab Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-3xl mx-auto flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'border-green-600 text-green-700 bg-green-50/50'
                  : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tab: Mindfullness */}
      {activeTab === 'mindfullness' && (
        <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 pb-12 w-full pt-6">
          {/* Theme dropdown + Module dropdown */}
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-5 mb-6 animate-slide-up">
            <div className="mb-4">
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Temat Wellness</label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 font-medium
                           focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                           transition-all duration-200 appearance-none cursor-pointer
                           bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%2378716c%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
                           bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
                value={themeId}
                onChange={(e) => {
                  const val = e.target.value;
                  if (INACTIVE_THEMES.has(val)) {
                    window.open(COMMUNITY_URL, '_blank', 'noopener');
                  } else {
                    setThemeId(val);
                  }
                }}
              >
                {THEMES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} {INACTIVE_THEMES.has(t.id) ? '→ (otwiera społeczność)' : ''}
                  </option>
                ))}
              </select>
            </div>
            <ModuleDropdown modules={modules} activeId={activeModuleId} onSelect={selectModule} />
          </div>

          {/* Module card */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-6 mb-6 animate-slide-up">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Moduł {activeModule.id}</span>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">{activeModule.title}</h2>
            <p className="text-stone-500 leading-relaxed mb-4">{activeModule.desc}</p>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <span className="inline-flex items-center gap-1 bg-stone-100 rounded-full px-3 py-1 font-semibold text-green-700">{doneCount}/{total} czynników wdrożonych</span>
            </div>
          </div>

          <ProgressBar done={doneCount} total={total} label={`Postęp modułu ${activeModule.id}`} />
          <div className="mt-5"><FactorDropdown factors={activeModule.factors} activeId={activeFactorId} onSelect={handleFactorSelect} factorStates={factorStates} /></div>

          {!activeFactorId && nextFactor && (
            <div onClick={() => handleFactorSelect(nextFactor.id)} className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all duration-200 animate-slide-up">
              <div className="flex items-center gap-3"><div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse-green"><svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></div><div><strong className="text-green-800">Następny krok:</strong> <span className="text-green-700">{nextFactor.name}</span><br/><small className="text-green-500">Kliknij, aby rozpocząć →</small></div></div>
            </div>
          )}

          {allDone && (
            <div className="mt-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-center animate-slide-up shadow-lg"><div className="text-4xl mb-2">🎉</div><p className="text-xl font-bold">Wszystkie 15 czynników wdrożonych!</p><p className="text-green-100 mt-1">Gratulacje! Wybierz kolejny moduł, aby kontynuować.</p></div>
          )}

          {activeFactorData && activeFactorState && (
            <div className="mt-5 animate-slide-up">
              <FactorCard factor={activeFactorData} factorState={activeFactorState}
                onStart={handleStart} onProblem={handleProblem} onDone={handleDone}
                userContext={userContext} onContextChange={setUserContext} isGenerating={isGenerating}
                onShowChallenge={handleShowChallenge}
                showChallenge={!!activeFactorState.challenge}
                challenge={activeFactorState.challenge}
                onCloseChallenge={() => handleCloseChallenge(activeFactorData.id)}
                hasChallenge={!!CHALLENGES[activeFactorData.id]}
              />
            </div>
          )}
        </main>
      )}

      {/* Tab: Dzienniczek */}
      {activeTab === 'dzienniczek' && (
        <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 pb-12 w-full pt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">📓</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Dzienniczek</h2>
            <p className="text-stone-500 leading-relaxed mb-6 max-w-md mx-auto">
              Tutaj będziesz mógł zapisywać swoje codzienne postępy, refleksje i notatki z wdrażania czynników wellness.
            </p>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-200">
              🌐 Otwórz wersję rozszerzoną →
            </a>
          </div>
        </main>
      )}

      {/* Tab: Zdarzenia */}
      {activeTab === 'zdarzenia' && (
        <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 pb-12 w-full pt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Zdarzenia</h2>
            <p className="text-stone-500 leading-relaxed mb-6 max-w-md mx-auto">
              Tutaj znajdziesz kalendarz wyzwań, przypomnienia o codziennych zadaniach i terminarz realizacji celów wellness.
            </p>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-200">
              🌐 Otwórz wersję rozszerzoną →
            </a>
          </div>
        </main>
      )}

      {/* Tab: Raport */}
      {activeTab === 'raport' && (
        <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 pb-12 w-full pt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Raport</h2>
            <p className="text-stone-500 leading-relaxed mb-6 max-w-md mx-auto">
              Tutaj zobaczysz podsumowania swoich postępów, statystyki wdrożonych czynników i analizę efektywności poszczególnych metod.
            </p>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-200">
              🌐 Otwórz wersję rozszerzoną →
            </a>
          </div>
        </main>
      )}

      {/* Settings modal */}
      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </div>
  );
}
