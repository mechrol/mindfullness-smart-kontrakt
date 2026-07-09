import React from 'react';
import RecommendationPanel from './RecommendationPanel.jsx';
import SevenDayChallenge from './SevenDayChallenge.jsx';

const STATUS_BADGE = {
  not_started: { label: 'Nie rozpoczęto', cls: 'bg-stone-100 text-stone-500' },
  in_progress: { label: 'W trakcie', cls: 'bg-blue-100 text-blue-600' },
  problem: { label: 'Problem — potrzebna metoda', cls: 'bg-red-100 text-red-600' },
  done: { label: 'Wdrożone', cls: 'bg-green-100 text-green-700' },
};

export default function FactorCard({
  factor, factorState, onStart, onProblem, onDone, userContext, onContextChange,
  isGenerating, onShowChallenge, showChallenge, challenge, onCloseChallenge,
}) {
  const status = (factorState && factorState.status) || 'not_started';
  const badge = STATUS_BADGE[status] || STATUS_BADGE.not_started;
  const rec = factorState && factorState.recommendation;

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 border transition-all duration-300 factor-card-hover ${
      status === 'problem' ? 'border-red-300 bg-red-50/50' : 'border-stone-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-stone-800 flex-1">{factor.name}</h3>
        <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap ml-3 ${badge.cls}`}>{badge.label}</span>
      </div>
      <p className="text-stone-600 leading-relaxed mb-4">{factor.desc}</p>
      {factor.barriers && factor.barriers.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <strong className="text-amber-800 text-sm block mb-2">Bariery:</strong>
          <ul className="space-y-1">{factor.barriers.map((b,i)=><li key={i} className="text-amber-700 text-sm flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>{b}</li>)}</ul>
        </div>
      )}
      <div className="mb-5">
        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Twój kontekst (opcjonalnie):</label>
        <textarea className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white transition-all duration-200 resize-none"
          value={userContext||''} onChange={e=>onContextChange(e.target.value)} placeholder="Opisz swoją sytuację, trudności, cele..." rows={3} />
      </div>
      <div className="flex flex-wrap gap-3">
        {(status==='not_started')&&(<>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200" onClick={()=>onStart(factor.id)}>Rozpocznij wdrażanie</button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200" onClick={()=>onProblem(factor.id)}>Mam problem — potrzebuję metody</button>
        </>)}
        {(status==='in_progress')&&(<>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200" onClick={()=>onDone(factor.id)}>Oznacz jako wdrożone</button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200" onClick={()=>onProblem(factor.id)}>Mam problem — potrzebuję metody</button>
        </>)}
        {(status==='problem')&&(
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200" onClick={()=>onDone(factor.id)}>Oznacz jako wdrożone</button>
        )}
        {/* Challenge button */}
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
          onClick={() => onShowChallenge && onShowChallenge(factor.id)}>
          🎯 7-dniowe wyzwanie
        </button>
      </div>
      {isGenerating&&(<div className="flex items-center gap-3 mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 animate-fade-in"><div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"/><span className="text-blue-700 text-sm font-medium">Generuję rekomendację metodą MSWRP...</span></div>)}
      {rec&&!rec.error&&<RecommendationPanel recommendation={rec} onDone={()=>onDone(factor.id)}/>}
      {rec&&rec.error&&<div className="mt-4 bg-red-50 border border-red-300 rounded-xl px-4 py-3 text-red-700 text-sm">Błąd generowania: {rec.error}</div>}

      {/* 7-Day Challenge */}
      {showChallenge && challenge && (
        <SevenDayChallenge factor={factor} challenge={challenge} onClose={onCloseChallenge} />
      )}
    </div>
  );
}
