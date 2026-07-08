import React from 'react';

export default function RecommendationPanel({ recommendation, onDone }) {
  if (!recommendation) return null;

  const sections = [
    { title: 'ZASADA', content: recommendation.zasada },
    { title: 'PROCEDURA', content: recommendation.procedura, pre: true },
    { title: 'PIERWSZY KROK (24H)', content: recommendation.pierwszyKrok, highlight: true },
    { title: 'WERYFIKACJA', content: recommendation.weryfikacja },
  ];

  return (
    <div className="mt-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 animate-slide-up">
      <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
        <span className="text-xl">💡</span> Rekomendacja MSWRP
      </h3>

      <div className="space-y-4">
        {sections.map((sec, i) => (
          <div key={i}>
            <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1.5">
              {sec.title}
            </h4>
            {sec.highlight ? (
              <p className="text-green-800 font-semibold bg-white/60 rounded-lg p-3 border border-green-300">
                {sec.content}
              </p>
            ) : (
              <p className={`text-stone-700 leading-relaxed ${sec.pre ? 'whitespace-pre-wrap' : ''}`}>
                {sec.content}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white font-bold rounded-xl
                   hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
        onClick={onDone}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Oznacz jako wdrożone
      </button>
    </div>
  );
}
