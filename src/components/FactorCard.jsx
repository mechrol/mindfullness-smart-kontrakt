import React from 'react';
import RecommendationPanel from './RecommendationPanel.jsx';

const STATUS_BADGE = {
  not_started: { label: 'Nie rozpoczęto', cls: 'bg-stone-100 text-stone-500' },
  in_progress: { label: 'W trakcie', cls: 'bg-blue-100 text-blue-600' },
  problem: { label: 'Problem — potrzebna metoda', cls: 'bg-red-100 text-red-600' },
  done: { label: 'Wdrożone', cls: 'bg-green-100 text-green-700' },
};

export default function FactorCard({
  factor, factorState, onStart, onProblem, onDone, userContext, onContextChange,
  isGenerating, onShowMSWRP, mswrpMode, mswrpVariant, onCancelMSWRP, onSaveContract,
  children,
}) {
  const status = (factorState && factorState.status) || 'not_started';
  const badge = STATUS_BADGE[status] || STATUS_BADGE.not_started;
  const rec = factorState && factorState.recommendation;
  const contract = factorState && factorState.smartContract;

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 border transition-all duration-300 factor-card-hover ${
      status === 'problem' ? 'border-red-300 bg-red-50/50' : 'border-stone-200'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-stone-800 flex-1">{factor.name}</h3>
        <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap ml-3 ${badge.cls}`}>
          {badge.label}
        </span>
      </div>

      <p className="text-stone-600 leading-relaxed mb-4">{factor.desc}</p>

      {/* Barriers */}
      {factor.barriers && factor.barriers.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <strong className="text-amber-800 text-sm block mb-2">Bariery:</strong>
          <ul className="space-y-1">
            {factor.barriers.map((b, i) => (
              <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span> {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* User context */}
      <div className="mb-5">
        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Twój kontekst (opcjonalnie):</label>
        <textarea className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white transition-all duration-200 resize-none"
          value={userContext || ''} onChange={(e) => onContextChange(e.target.value)}
          placeholder="Opisz swoją sytuację, trudności, cele..." rows={3} />
      </div>

      {/* Actions */}
      {!mswrpMode && (
        <div className="flex flex-wrap gap-3">
          {(status === 'not_started') && (
            <>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
                onClick={() => onStart(factor.id)}>
                Rozpocznij wdrażanie
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200"
                onClick={() => onProblem(factor.id)}>
                Mam problem — potrzebuję metody
              </button>
            </>
          )}
          {(status === 'in_progress') && (
            <>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
                onClick={() => onDone(factor.id)}>
                Oznacz jako wdrożone
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200"
                onClick={() => onProblem(factor.id)}>
                Mam problem — potrzebuję metody
              </button>
            </>
          )}
          {(status === 'problem') && (
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
              onClick={() => onDone(factor.id)}>
              Oznacz jako wdrożone
            </button>
          )}
          {/* MSWRP button */}
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all duration-200 shadow-md shadow-indigo-200"
            onClick={() => onShowMSWRP && onShowMSWRP(factor.id)}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            Metoda MSWRP (wachlarz)
          </button>
        </div>
      )}

      {/* FanOut / SmartContract children rendered by parent */}
      {children}

      {/* Generating spinner */}
      {isGenerating && (
        <div className="flex items-center gap-3 mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 animate-fade-in">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-700 text-sm font-medium">Generuję rekomendację metodą MSWRP...</span>
        </div>
      )}

      {/* Recommendation panel */}
      {rec && !rec.error && <RecommendationPanel recommendation={rec} onDone={() => onDone(factor.id)} />}

      {/* Smart Contract View (after saving) */}
      {contract && status === 'problem' && (
        <div className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📜</span>
            <h4 className="font-bold text-indigo-800 text-sm">Smart Kontrakt MSWRP — {contract.variantLabel}</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white rounded-lg p-2"><span className="font-bold text-green-700">R:</span> {contract.R?.slice(0,40)}…</div>
            <div className="bg-white rounded-lg p-2"><span className="font-bold text-blue-700">U:</span> {contract.U?.slice(0,40)}…</div>
            <div className="bg-white rounded-lg p-2"><span className="font-bold text-amber-700">J:</span> {contract.J?.slice(0,40)}…</div>
            <div className="bg-white rounded-lg p-2"><span className="font-bold text-purple-700">W:</span> {contract.W?.slice(0,40)}…</div>
          </div>
          <p className="text-xs text-indigo-600 mt-2">
            {contract.Q?.length} kroków procedury | {contract.E?.length} ograniczeń
            {contract.deadline ? ` | Termin: ${contract.deadline}` : ''}
            {contract.signature ? ` | Podpisano: ${contract.signature}` : ''}
          </p>
        </div>
      )}

      {/* Error */}
      {rec && rec.error && (
        <div className="mt-4 bg-red-50 border border-red-300 rounded-xl px-4 py-3 text-red-700 text-sm">
          Błąd generowania: {rec.error}
        </div>
      )}
    </div>
  );
}
