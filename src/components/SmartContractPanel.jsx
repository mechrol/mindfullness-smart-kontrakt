import React, { useState } from 'react';

/**
 * SmartContractPanel — personalizowany smart-kontrakt MSWRP.
 * M(P) = Z(P,E) • Q(P,E)  gdzie Z = R • U • J • W
 */
export default function SmartContractPanel({ factor, variant, onSave, onCancel }) {
  const [contract, setContract] = useState(() => ({
    R: variant.Z.R, U: variant.Z.U, J: variant.Z.J, W: variant.Z.W,
    Q: [...variant.Q], E: [...variant.E],
    deadline: '', verificationDay: 7, reward: '', penalty: '', signature: '',
  }));
  const [newStep, setNewStep] = useState('');
  const [newConstraint, setNewConstraint] = useState('');

  function update(f, v) { setContract(p => ({...p, [f]: v})); }
  function addStep() { if (!newStep.trim()) return; setContract(p => ({...p, Q: [...p.Q, newStep.trim()]})); setNewStep(''); }
  function removeStep(i) { setContract(p => ({...p, Q: p.Q.filter((_,j) => j!==i)})); }
  function addConstraint() { if (!newConstraint.trim()) return; setContract(p => ({...p, E: [...p.E, newConstraint.trim()]})); setNewConstraint(''); }
  function removeConstraint(i) { setContract(p => ({...p, E: p.E.filter((_,j) => j!==i)})); }
  function handleSave() { onSave({...contract, factorId: factor.id, variantLabel: variant.label}); }

  return (
    <div className="mt-5 bg-white rounded-2xl shadow-xl border-2 border-indigo-400 p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">M</span>
        <div>
          <h3 className="text-xl font-bold text-stone-800">Smart Kontrakt MSWRP</h3>
          <p className="text-stone-500 text-sm">Personalizujesz <strong>M = Zasada &bull; Procedura</strong>: {factor.name}</p>
        </div>
        <span className="ml-auto inline-flex bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">{variant.label}</span>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-4 mb-6 text-center">
        <p className="text-lg font-mono font-bold">M(P) = Z(P,E) &bull; Q(P,E)</p>
        <p className="text-indigo-200 text-xs mt-1">Z = R &bull; U &bull; J &bull; W | Metoda specyficzna Antoszkiewicza</p>
      </div>

      {/* Zasada */}
      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Zasada metodyczna (Z)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[['R','Reguła (co robić?)','Normy postępowania'],['U','Podejście (od czego zacząć?)','Punkt wyjścia'],['J','Język / Metryka','Jak mierzysz postęp?'],['W','Wyposażenie','Czego potrzebujesz?']].map(([f,label,hint]) => (
            <div key={f}>
              <span className="block text-xs font-bold text-stone-400 uppercase mb-1">{label}</span>
              <textarea className="w-full px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 resize-none" rows={2} value={contract[f]} onChange={e=>update(f,e.target.value)} />
              <p className="text-stone-400 text-xs mt-0.5">{hint}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Procedura */}
      <div className="mb-6"><h4 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">Procedura (Q)</h4>
        <ol className="space-y-1.5 mb-2">{contract.Q.map((s,i)=>(
          <li key={i} className="flex items-start gap-2 bg-green-50 rounded-lg p-2 group"><span className="flex-shrink-0 w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</span><span className="text-green-800 text-sm flex-1">{s}</span><button onClick={()=>removeStep(i)} className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-lg ml-1">&times;</button></li>
        ))}</ol>
        <div className="flex gap-2"><input type="text" className="flex-1 px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-green-400" value={newStep} onChange={e=>setNewStep(e.target.value)} onKeyDown={e=>e.key==='Enter'&&addStep()} placeholder="+ Dodaj krok..." />
        <button onClick={addStep} className="px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700">Dodaj</button></div>
      </div>

      {/* Ograniczenia */}
      <div className="mb-6"><h4 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-2">Ograniczenia (E)</h4>
        <ul className="space-y-1.5 mb-2">{contract.E.map((c,i)=>(
          <li key={i} className="flex items-start gap-2 bg-red-50 rounded-lg p-2 group"><span className="text-red-500">!</span><span className="text-red-700 text-sm flex-1">{c}</span><button onClick={()=>removeConstraint(i)} className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-lg ml-1">&times;</button></li>
        ))}</ul>
        <div className="flex gap-2"><input type="text" className="flex-1 px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-red-400" value={newConstraint} onChange={e=>setNewConstraint(e.target.value)} onKeyDown={e=>e.key==='Enter'&&addConstraint()} placeholder="+ Dodaj ograniczenie..." />
        <button onClick={addConstraint} className="px-3 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600">Dodaj</button></div>
      </div>

      {/* Smart kontrakt */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 mb-6"><h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-3">Zobowiązanie (Smart Kontrakt)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div><span className="block text-xs font-semibold text-amber-700 mb-1">Termin wdrożenia</span><input type="date" className="w-full px-3 py-2 rounded-lg bg-white border border-amber-300 text-sm" value={contract.deadline} onChange={e=>update('deadline',e.target.value)} /></div>
          <div><span className="block text-xs font-semibold text-amber-700 mb-1">Weryfikacja co (dni)</span><input type="number" min="1" max="90" className="w-full px-3 py-2 rounded-lg bg-white border border-amber-300 text-sm" value={contract.verificationDay} onChange={e=>update('verificationDay',Number(e.target.value))} /></div>
          <div><span className="block text-xs font-semibold text-amber-700 mb-1">Nagroda</span><input type="text" className="w-full px-3 py-2 rounded-lg bg-white border border-amber-300 text-sm" value={contract.reward} onChange={e=>update('reward',e.target.value)} placeholder="np. nowy sprzęt" /></div>
          <div><span className="block text-xs font-semibold text-amber-700 mb-1">Konsekwencja</span><input type="text" className="w-full px-3 py-2 rounded-lg bg-white border border-amber-300 text-sm" value={contract.penalty} onChange={e=>update('penalty',e.target.value)} placeholder="np. wpłata do skarbonki" /></div>
        </div>
        <div className="mt-3"><span className="block text-xs font-semibold text-amber-700 mb-1">Twój podpis</span><input type="text" className="w-full px-3 py-2 rounded-lg bg-white border-2 border-amber-400 text-sm font-semibold text-amber-800" value={contract.signature} onChange={e=>update('signature',e.target.value)} placeholder="Podpisz się..." /></div>
      </div>

      <div className="flex gap-3">
        <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-white border-2 border-stone-300 text-stone-600 font-semibold rounded-xl hover:bg-stone-100 active:scale-95 transition-all">← Wróć</button>
        <button onClick={handleSave} className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all shadow-lg shadow-indigo-200">Podpisz i zapisz</button>
      </div>
    </div>
  );
}
