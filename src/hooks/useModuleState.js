import { useState, useCallback, useMemo, useEffect } from 'react';
import { MODULES } from '../data/modules.js';

const LS_KEYS = {
  factorStates: 'mindfullness_factorStates',
  activeModuleId: 'mindfullness_activeModuleId',
  activeFactorId: 'mindfullness_activeFactorId',
  userContext: 'mindfullness_userContext',
};

function loadFromLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch { /* quota exceeded — ignore */ }
}

export default function useModuleState() {
  const [activeModuleId, setActiveModuleIdState] = useState(() =>
    loadFromLS(LS_KEYS.activeModuleId, 1)
  );
  const [activeFactorId, setActiveFactorIdState] = useState(() =>
    loadFromLS(LS_KEYS.activeFactorId, '')
  );
  const [factorStates, setFactorStates] = useState(() =>
    loadFromLS(LS_KEYS.factorStates, {})
  );
  const [userContext, setUserContextState] = useState(() =>
    loadFromLS(LS_KEYS.userContext, '')
  );

  // Persist to localStorage
  useEffect(() => { saveToLS(LS_KEYS.activeModuleId, activeModuleId); }, [activeModuleId]);
  useEffect(() => { saveToLS(LS_KEYS.activeFactorId, activeFactorId); }, [activeFactorId]);
  useEffect(() => { saveToLS(LS_KEYS.factorStates, factorStates); }, [factorStates]);
  useEffect(() => { saveToLS(LS_KEYS.userContext, userContext); }, [userContext]);

  const activeModule = useMemo(
    () => MODULES.find((m) => m.id === activeModuleId) || MODULES[0],
    [activeModuleId]
  );

  const factors = activeModule.factors;

  // Derive unimplemented, nextFactor, progress
  const { unimplemented, nextFactor, doneCount, total, progress } = useMemo(() => {
    const total = factors.length;
    let doneCount = 0;
    const unimplemented = [];
    for (const f of factors) {
      const st = factorStates[f.id];
      if (st && st.status === 'done') {
        doneCount++;
      } else {
        unimplemented.push(f);
      }
    }
    const nextFactor = unimplemented.length > 0 ? unimplemented[0] : null;
    return {
      unimplemented,
      nextFactor,
      doneCount,
      total,
      progress: total > 0 ? doneCount / total : 0,
    };
  }, [factors, factorStates]);

  const selectModule = useCallback((id) => {
    setActiveModuleIdState(id);
    setActiveFactorIdState('');
  }, []);

  const selectFactor = useCallback((id) => {
    setActiveFactorIdState(id);
  }, []);

  const markFactorDone = useCallback((factorId) => {
    setFactorStates((prev) => ({
      ...prev,
      [factorId]: { ...prev[factorId], status: 'done' },
    }));
    setActiveFactorIdState('');
  }, []);

  const markFactorProblem = useCallback((factorId) => {
    setFactorStates((prev) => ({
      ...prev,
      [factorId]: { ...prev[factorId], status: 'problem' },
    }));
  }, []);

  const setFactorInProgress = useCallback((factorId) => {
    setFactorStates((prev) => ({
      ...prev,
      [factorId]: { ...prev[factorId], status: 'in_progress' },
    }));
  }, []);

  const setRecommendation = useCallback((factorId, rec) => {
    setFactorStates((prev) => ({
      ...prev,
      [factorId]: { ...prev[factorId], recommendation: rec },
    }));
  }, []);

  const setUserContext = useCallback((text) => {
    setUserContextState(text);
  }, []);

  return {
    modules: MODULES,
    activeModule,
    activeModuleId,
    activeFactorId,
    factorStates,
    userContext,
    unimplemented,
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
  };
}
