import { useState, useCallback } from "react";
import { MODULES, correlateProblemToProcedure } from "../data/modules.js";

var STORAGE_KEY = "mindfullness-state";

function loadState() {
  try { var raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; }
  catch (e) { return {}; }
}
function saveState(s) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {} }

export default function useModuleState() {
  var [activeModuleId, setActiveModuleId] = useState(function () {
    return loadState().activeModuleId || 1;
  });

  var activeModule = MODULES.find(function (m) { return m.id === activeModuleId; }) || MODULES[0];

  var [factorStates, setFactorStates] = useState(function () {
    var saved = loadState();
    var st = saved.factorStates || {};
    activeModule.factors.forEach(function (f) {
      if (!st[f.id]) st[f.id] = { status: "not_started", barrierId: null, note: "" };
    });
    return st;
  });

  /* zmiana modułu resetuje stany czynników */
  var selectModule = useCallback(function (modId) {
    setActiveModuleId(modId);
    var mod = MODULES.find(function (m) { return m.id === modId; });
    var fresh = {};
    if (mod) mod.factors.forEach(function (f) { fresh[f.id] = { status: "not_started", barrierId: null, note: "" }; });
    setFactorStates(fresh);
    saveState({ activeModuleId: modId, factorStates: fresh });
  }, []);

  var setFactorStatus = useCallback(function (factorId, status) {
    setFactorStates(function (prev) {
      var next = Object.assign({}, prev, { [factorId]: Object.assign({}, prev[factorId], { status: status }) });
      saveState({ activeModuleId: activeModuleId, factorStates: next });
      return next;
    });
  }, [activeModuleId]);

  var reportProblem = useCallback(function (factorId, description) {
    var result = correlateProblemToProcedure(factorId, description);
    setFactorStates(function (prev) {
      var next = Object.assign({}, prev, { [factorId]: Object.assign({}, prev[factorId], { status: "problem", barrierId: result.barrierId, note: description }) });
      saveState({ activeModuleId: activeModuleId, factorStates: next });
      return next;
    });
    return result;
  }, [activeModuleId]);

  /* następny niezrealizowany czynnik */
  var nextFactor = activeModule.factors.find(function (f) {
    var s = factorStates[f.id]; return !s || s.status === "not_started" || s.status === "problem";
  });

  var unimplemented = activeModule.factors.filter(function (f) {
    var s = factorStates[f.id]; return !s || s.status !== "done";
  });

  var doneCount = activeModule.factors.filter(function (f) {
    return factorStates[f.id] && factorStates[f.id].status === "done";
  }).length;
  var total = activeModule.factors.length;
  var progress = total ? Math.round(doneCount / total * 100) : 0;

  return {
    modules: MODULES,
    activeModule: activeModule,
    activeModuleId: activeModuleId,
    factorStates: factorStates,
    setFactorStatus: setFactorStatus,
    reportProblem: reportProblem,
    selectModule: selectModule,
    nextFactor: nextFactor,
    unimplemented: unimplemented,
    progress: progress,
    doneCount: doneCount,
    total: total
  };
}
