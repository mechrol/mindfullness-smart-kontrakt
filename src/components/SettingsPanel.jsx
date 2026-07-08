import React, { useState } from 'react';

export default function SettingsPanel({ endpoint, apiKey, model, onSave, onClose }) {
  const [localEndpoint, setLocalEndpoint] = useState(endpoint || 'https://api.foxora.ai/v1');
  const [localApiKey, setLocalApiKey] = useState(apiKey || '');
  const [localModel, setLocalModel] = useState(model || 'foxora-default');

  function handleSave() {
    onSave({
      endpoint: localEndpoint,
      apiKey: localApiKey,
      model: localModel,
    });
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
