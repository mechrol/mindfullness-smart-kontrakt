import React, { useState } from 'react';

function readSetting(key, envVar, fallback) {
  const lsVal = localStorage.getItem(key);
  if (lsVal !== null) return lsVal;
  if (envVar) return envVar;
  return fallback || '';
}

export default function SettingsPanel({ onClose }) {
  const [localEndpoint, setLocalEndpoint] = useState(() =>
    readSetting('foxora_endpoint', import.meta.env.VITE_FOXORA_ENDPOINT, 'https://api.foxora.ai/v1')
  );
  const [localApiKey, setLocalApiKey] = useState(() =>
    readSetting('foxora_api_key', import.meta.env.VITE_FOXORA_API_KEY)
  );
  const [localModel, setLocalModel] = useState(() =>
    readSetting('foxora_model', import.meta.env.VITE_FOXORA_MODEL, 'foxora-default')
  );

  function handleSave() {
    localStorage.setItem('foxora_endpoint', localEndpoint);
    localStorage.setItem('foxora_api_key', localApiKey);
    localStorage.setItem('foxora_model', localModel);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h3 className="text-lg font-bold text-stone-800">Ustawienia API</h3>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-700 transition-all duration-200 font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          <label className="block">
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Endpoint URL</span>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800
                         focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                         transition-all duration-200"
              value={localEndpoint}
              onChange={(e) => setLocalEndpoint(e.target.value)}
              placeholder="https://api.foxora.ai/v1"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">API Key</span>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800
                         focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                         transition-all duration-200"
              value={localApiKey}
              onChange={(e) => setLocalApiKey(e.target.value)}
              placeholder="klucz-api..."
            />
          </label>

          <label className="block">
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Model</span>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800
                         focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:bg-white
                         transition-all duration-200"
              value={localModel}
              onChange={(e) => setLocalModel(e.target.value)}
              placeholder="foxora-default"
            />
          </label>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 border-t border-stone-200 bg-stone-50">
          <button
            className="flex-1 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl
                       hover:bg-green-700 active:scale-95 transition-all duration-200 shadow-md shadow-green-200"
            onClick={handleSave}
          >
            Zapisz
          </button>
          <button
            className="flex-1 px-5 py-2.5 bg-white border border-stone-300 text-stone-600 font-semibold rounded-xl
                       hover:bg-stone-100 active:scale-95 transition-all duration-200"
            onClick={onClose}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
