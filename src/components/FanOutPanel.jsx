import React, { useState } from 'react';

export default function FanOutPanel({ factor, variants, onSelect, onCancel }) {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(null);
  if (!variants || variants.length === 0) return null;
  const icons = ['A', 'B', 'C'];

  return (
    <div className="mt-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border-2 border-indigo-300 rounded-2xl p-5 animate-slide-up">
      <div className="text-center mb-5">
        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-2">
          Metoda MSWRP — wybierz swoją ścieżkę
        </span>
        <h3 className="text-lg font-bold text-indigo-900 mt-1">{factor.name}</h3>
        <p className="text-indigo-600/70 text-sm mt-1 max-w-md mx-auto">
          Każdy wariant to inna <strong>metoda specyficzna M = Zasada &bull; Procedura</strong>.
        </p>
      </div>

      <div className="space-y-3 mb-5">
        {variants.map((v, i) => {
          const isExpanded = expanded === i;
          return (
            <div key={i} className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
              selected === i ? 'border-indigo-500 shadow-lg shadow-indigo-200 ring-2 ring-indigo-200' : 'border-stone-200 hover:border-indigo-300 hover:shadow-md'
            }`} onClick={() => setSelected(i)}>
              <div className="flex items-center gap-3 p-4">
                <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center text-lg font-bold">{icons[i]}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-800 text-sm">{v.label}</h4>
                  <p className="text-stone-500 text-xs truncate">R: {v.Z.R.slice(0, 60)}&hellip;</p>
                </div>
                <button className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isExpanded ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-stone-100 text-stone-500'}`}
                  onClick={(e) => { e.stopPropagation(); setExpanded(isExpanded ? null : i); }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-stone-100 pt-3 space-y-2">
                  <div className="bg-green-50 rounded-lg p-2"><span className="text-xs font-bold text-green-700">R — Reguła</span><p className="text-green-800 text-sm">{v.Z.R}</p></div>
                  <div className="bg-blue-50 rounded-lg p-2"><span className="text-xs font-bold text-blue-700">U — Podejście</span><p className="text-blue-800 text-sm">{v.Z.U}</p></div>
                  <div className="bg-amber-50 rounded-lg p-2"><span className="text-xs font-bold text-amber-700">J — Język / Metryka</span><p className="text-amber-800 text-sm">{v.Z.J}</p></div>
                  <div className="bg-purple-50 rounded-lg p-2"><span className="text-xs font-bold text-purple-700">W — Wyposażenie</span><p className="text-purple-800 text-sm">{v.Z.W}</p></div>
                  <div className="bg-indigo-50 rounded-lg p-2"><span className="text-xs font-bold text-indigo-700">Q — Procedura</span><ol className="list-decimal list-inside text-indigo-800 text-sm mt-1 space-y-0.5">{v.Q.map((s,si)=><li key={si}>{s}</li>)}</ol></div>
                  <div className="bg-red-50 rounded-lg p-2"><span className="text-xs font-bold text-red-700">E — Ograniczenia</span><ul className="text-red-700 text-sm mt-0.5 space-y-0.5">{v.E.map((c,ci)=><li key={ci} className="flex items-start gap-1"><span>!</span>{c}</li>)}</ul></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-white border-2 border-stone-300 text-stone-600 font-semibold rounded-xl hover:bg-stone-100 active:scale-95 transition-all">Anuluj</button>
        <button onClick={() => selected !== null && onSelect(selected)} disabled={selected === null}
          className={`flex-1 px-4 py-2.5 font-semibold rounded-xl transition-all ${selected !== null ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-200 cursor-pointer' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}>
          Wybierz i personalizuj →
        </button>
      </div>
    </div>
  );
}
