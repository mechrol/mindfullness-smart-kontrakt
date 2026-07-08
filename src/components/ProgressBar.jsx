import React from 'react';

export default function ProgressBar({ done, total, label }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">{label}</span>
        <span className="text-sm font-bold text-green-600">{pct}%</span>
      </div>
      <div className="h-3 bg-stone-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full progress-fill shadow-sm"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
