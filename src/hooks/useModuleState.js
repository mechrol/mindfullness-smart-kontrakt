import { useState, useCallback } from "react";
import { MODULES, correlateProblemToProcedure } from "../data/modules.js";

const STORAGE_KEY = "mindfullness-state";

function loadState() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return {};
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

export default function useModuleState() {
  var module = MODULES[0];
  var [factorStates, setFactorStates] = useState(function () {
    var saved = loadState();
    var initial = {};
    module.factors.forEach(function (f) {
      initial[f.id] = saved[f.id] || { status: "not_started", barrierId: null, note: "" };
    });
    return initial;
  });

  var setFactorStatus = useCallback(function (factorId, status) {
    setFactorStates(function (prev) {
      var next = Object.assign({}, prev, {
        [factorId]: Object.assign({}, prev[factorId], { status: status })
      });
      saveState(next);
      return next;
    });
  }, []);

  var reportProblem = useCallback(function (factorId, description) {
    var result = correlateProblemToProcedure(factorId, description);
    setFactorStates(function (prev) {
      var next = Object.assign({}, prev, {
        [factorId]: Object.assign({}, prev[factorId], {
          status: "problem",
          barrierId: result.barrierId,
          note: description
        })
      });
      saveState(next);
      return next;
    });
    return result;
  }, []);

  var getRecommendation = useCallback(function (factorId) {
    var fs = factorStates[factorId];
    if (!fs || fs.status !== "problem") return null;
    return correlateProblemToProcedure(factorId, fs.note || "");
  }, [factorStates]);

  var progress = module.factors.filter(function (f) {
    var s = factorStates[f.id];
    return s && (s.status === "done" || s.status === "in_progress");
  }).length / module.factors.length * 100;

  return { module: module, factorStates: factorStates, setFactorStatus: setFactorStatus, reportProblem: reportProblem, getRecommendation: getRecommendation, progress: progress };
}
