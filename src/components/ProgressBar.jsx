import React from 'react';

export default function ProgressBar({ done, total, label }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="progress-section">
      <div className="progress-header">
        <span className="progress-label">{label || `${done}/${total} czynników wdrożonych`}</span>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
