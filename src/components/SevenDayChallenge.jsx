import React, { useState } from 'react';

const EXPERT_COLORS = {
  'Psycholog':        { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-800', icon: '🧠', label: 'Psycholog' },
  'Trener Rozwoju Osobistego': { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-800', icon: '🎯', label: 'Trener' },
  'Instruktor Mindfulness': { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-800', icon: '🧘', label: 'Mindfulness' },
  'Dietetyk':         { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-800', icon: '🥗', label: 'Dietetyk' },
  'Trener Personalny':{ bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800', icon: '💪', label: 'Trener' },
  'Coach Zdrowia':    { bg: 'bg-teal-50', border: 'border-teal-300', text: 'text-teal-800', icon: '🌿', label: 'Coach' },
};

function ExpertMessage({ speaker, text }) {
  const c = EXPERT_COLORS[speaker] || EXPERT_COLORS['Psycholog'];
  return (
    <div className={`flex gap-3 p-4 ${c.bg} rounded-2xl border-l-4 ${c.border} mb-3 animate-fade-in`}>
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-sm">{c.icon}</span>
      <div>
        <span className={`text-xs font-bold uppercase tracking-wider ${c.text} block mb-1`}>{speaker}:</span>
        <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

function DayCard({ day, title, task, tip }) {
  return (
    <div className="bg-white rounded-xl border-2 border-stone-200 hover:border-green-300 transition-all duration-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 flex items-center gap-3">
        <span className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">{day}</span>
        <h4 className="font-bold text-sm">{title}</h4>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Zadanie:</span>
          <p className="text-stone-700 text-sm mt-0.5">{task}</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">💡 Wskazówka motywacyjna:</span>
          <p className="text-amber-800 text-sm italic mt-0.5">„{tip}”</p>
        </div>
      </div>
    </div>
  );
}

export default function SevenDayChallenge({ factor, challenge, onClose }) {
  const [showConversation, setShowConversation] = useState(true);

  if (!challenge) return null;

  const { experts, conversation, days } = challenge;

  return (
    <div className="mt-5 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 border-2 border-green-400 rounded-2xl overflow-hidden shadow-xl animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
              🎯 7-dniowe wyzwanie
            </span>
            <h3 className="text-xl font-bold">{factor.name}</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white font-bold transition-all">✕</button>
        </div>
        <p className="text-green-100 text-sm mt-2">
          Eksperci wybrani: {experts.join(', ')}
        </p>
      </div>

      {/* Conversation toggle */}
      <div className="px-5 pt-4">
        <button
          onClick={() => setShowConversation(!showConversation)}
          className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900 transition-all"
        >
          <svg className={`w-4 h-4 transition-transform ${showConversation ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showConversation ? 'Ukryj rozmowę ekspertów' : 'Pokaż rozmowę ekspertów'}
        </button>
      </div>

      {/* Conversation */}
      {showConversation && (
        <div className="px-5 pt-3 pb-2 max-h-80 overflow-y-auto">
          {conversation.map((msg, i) => (
            <ExpertMessage key={i} speaker={msg.speaker} text={msg.text} />
          ))}
        </div>
      )}

      <div className="border-t-2 border-green-200 mx-5 my-1" />

      {/* 7 Days */}
      <div className="p-5 space-y-3">
        <h4 className="text-sm font-bold text-green-800 uppercase tracking-wider text-center mb-4">Plan 7-dniowego wyzwania</h4>
        {days.map((d, i) => (
          <DayCard key={i} day={d.day} title={d.title} task={d.task} tip={d.tip} />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-green-50 border-t border-green-200 p-4 text-center">
        <p className="text-green-700 text-sm font-medium">🚀 Z takim planem to wyzwanie stanie się naprawdę transformujące!</p>
      </div>
    </div>
  );
}
