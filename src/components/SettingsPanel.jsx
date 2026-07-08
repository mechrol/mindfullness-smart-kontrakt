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
    <div className="settings-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="settings-panel">
        <div className="settings-panel__header">
          <h3>Ustawienia API</h3>
          <button className="btn btn-outline btn-sm" onClick={onClose}>X</button>
        </div>

        <div className="settings-panel__body">
          <label className="settings-panel__label">
            Endpoint URL
            <input
              type="text"
              className="settings-panel__input"
              value={localEndpoint}
              onChange={(e) => setLocalEndpoint(e.target.value)}
              placeholder="https://api.foxora.ai/v1"
            />
          </label>

          <label className="settings-panel__label">
            API Key
            <input
              type="password"
              className="settings-panel__input"
              value={localApiKey}
              onChange={(e) => setLocalApiKey(e.target.value)}
              placeholder="klucz-api..."
            />
          </label>

          <label className="settings-panel__label">
            Model
            <input
              type="text"
              className="settings-panel__input"
              value={localModel}
              onChange={(e) => setLocalModel(e.target.value)}
              placeholder="foxora-default"
            />
          </label>
        </div>

        <div className="settings-panel__footer">
          <button className="btn btn-primary" onClick={handleSave}>Zapisz</button>
          <button className="btn btn-outline" onClick={onClose}>Anuluj</button>
        </div>
      </div>
    </div>
  );
}
