import { useState, useCallback, useMemo, useEffect } from 'react';
import { getModules } from '../data/modules.js';

function lsKeys(themeId) {
  return {
    factorStates: `mindfullness_factorStates_${themeId}`,
    activeModuleId: `mindfullness_activeModuleId_${themeId}`,
    activeFactorId: `mindfullness_activeFactorId_${themeId}`,
    userContext: `mindfullness_userContext_${themeId}`,
  };
}

function loadFromLS(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}

function saveToLS(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* quota exceeded */ }
}

export default function useModuleState(themeId = 'mindfullness') {
  const KEYS = lsKeys(themeId);
  const modules = getModules(themeId);

  const [activeModuleId, setActiveModuleIdState] = useState(() => loadFromLS(KEYS.activeModuleId, 1));
  const [activeFactorId, setActiveFactorIdState] = useState(() => loadFromLS(KEYS.activeFactorId, ''));
  const [factorStates, setFactorStates] = useState(() => loadFromLS(KEYS.factorStates, {}));
  const [userContext, setUserContextState] = useState(() => loadFromLS(KEYS.userContext, ''));

  useEffect(() => {
    if (!modules || modules.length === 0) { setActiveModuleIdState(1); setActiveFactorIdState(''); return; }
    setActiveModuleIdState(1); setActiveFactorIdState('');
  }, [themeId]);

  useEffect(() => { saveToLS(KEYS.activeModuleId, activeModuleId); }, [activeModuleId, KEYS.activeModuleId]);
  useEffect(() => { saveToLS(KEYS.activeFactorId, activeFactorId); }, [activeFactorId, KEYS.activeFactorId]);
  useEffect(() => { saveToLS(KEYS.factorStates, factorStates); }, [factorStates, KEYS.factorStates]);
  useEffect(() => { saveToLS(KEYS.userContext, userContext); }, [userContext, KEYS.userContext]);

  const activeModule = useMemo(() => modules.find((m) => m.id === activeModuleId) || modules[0], [activeModuleId, modules]);
  const factors = activeModule ? activeModule.factors : [];

  const { unimplemented, nextFactor, doneCount, total, progress } = useMemo(() => {
    const total = factors.length; let doneCount = 0; const unimplemented = [];
    for (const f of factors) { const st = factorStates[f.id]; if (st && st.status === 'done') doneCount++; else unimplemented.push(f); }
    return { unimplemented, nextFactor: unimplemented.length > 0 ? unimplemented[0] : null, doneCount, total, progress: total > 0 ? doneCount / total : 0 };
  }, [factors, factorStates]);

  const selectModule = useCallback((id) => { setActiveModuleIdState(id); setActiveFactorIdState(''); }, []);
  const selectFactor = useCallback((id) => { setActiveFactorIdState(id); }, []);
  const markFactorDone = useCallback((factorId) => { setFactorStates((prev) => ({ ...prev, [factorId]: { ...prev[factorId], status: 'done' } })); setActiveFactorIdState(''); }, []);
  const markFactorProblem = useCallback((factorId) => { setFactorStates((prev) => ({ ...prev, [factorId]: { ...prev[factorId], status: 'problem' } })); }, []);
  const setFactorInProgress = useCallback((factorId) => { setFactorStates((prev) => ({ ...prev, [factorId]: { ...prev[factorId], status: 'in_progress' } })); }, []);
  const setRecommendation = useCallback((factorId, rec) => { setFactorStates((prev) => ({ ...prev, [factorId]: { ...prev[factorId], recommendation: rec } })); }, []);
  const setChallenge = useCallback((factorId, challenge) => { setFactorStates((prev) => ({ ...prev, [factorId]: { ...prev[factorId], challenge } })); }, []);
  const setUserContext = useCallback((text) => { setUserContextState(text); }, []);

  const saveMswrpReport = useCallback((report) => {
    setFactorStates((prev) => {
      const list = prev._reports || [];
      return { ...prev, _reports: [report, ...list] };
    });
  }, []);

  return { modules, activeModule, activeModuleId, activeFactorId, factorStates, userContext, unimplemented, nextFactor, doneCount, total, progress,
    selectModule, selectFactor, markFactorDone, markFactorProblem, setFactorInProgress, setRecommendation, setUserContext, setChallenge, saveMswrpReport };
}
