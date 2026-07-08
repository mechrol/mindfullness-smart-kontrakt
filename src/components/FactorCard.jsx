import React from 'react';
import RecommendationPanel from './RecommendationPanel.jsx';

const STATUS_BADGE = {
  not_started: { label: 'Nie rozpoczęto', cls: 'bg-stone-100 text-stone-500' },
  in_progress: { label: 'W trakcie', cls: 'bg-blue-100 text-blue-600' },
  problem: { label: 'Problem — potrzebna metoda', cls: 'bg-red-100 text-red-600' },
  done: { label: 'Wdrożone', cls: 'bg-green-100 text-green-700' },
};

export default function FactorCard({
  factor,
  factorState,
  onStart,
  onProblem,
  onDone,
  userContext,
  onContextChange,
  isGenerating,
}) {
  const status = (factorState && factorState.status) || 'not_started';
  const badge = STATUS_BADGE[status] || STATUS_BADGE.not_started;
  const rec = factorState && factorState.recommendation;

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

      {/* Description */}
      <p className="text-stone-600 leading-relaxed mb-4">{factor.desc}</p>

      {/* Barriers */}
      {factor.barriers && factor.barriers.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <strong className="text-amber-800 text-sm block mb-2">⚠ Bariery:</strong>
          <ul className="space-y-1">
            {factor.barriers.map((b, i) => (
              <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* User context */}
      <div className="mb-5">
        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
          Twój kontekst (opcjonalnie):
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm
                     focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                     transition-all duration-200 resize-none"
          value={userContext || ''}
          onChange={(e) => onContextChange(e.target.value)}
          placeholder="Opisz swoją sytuację, trudności, cele..."
          rows={3}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {(status === 'not_started') && (
          <>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl
                         hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
              onClick={() => onStart(factor.id)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rozpocznij wdrażanie
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl
                         hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200"
              onClick={() => onProblem(factor.id)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mam problem — potrzebuję metody
            </button>
          </>
        )}

        {(status === 'in_progress') && (
          <>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl
                         hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
              onClick={() => onDone(factor.id)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Oznacz jako wdrożone
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 font-semibold rounded-xl
                         hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-md shadow-amber-200"
              onClick={() => onProblem(factor.id)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mam problem — potrzebuję metody
            </button>
          </>
        )}

        {(status === 'problem') && (
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl
                       hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
            onClick={() => onDone(factor.id)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Oznacz jako wdrożone
          </button>
        )}
      </div>

      {/* Generating spinner */}
      {isGenerating && (
        <div className="flex items-center gap-3 mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 animate-fade-in">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-700 text-sm font-medium">Generuję rekomendację metodą MSWRP...</span>
        </div>
      )}

      {/* Recommendation panel */}
      {rec && !rec.error && (
        <RecommendationPanel recommendation={rec} onDone={() => onDone(factor.id)} />
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
