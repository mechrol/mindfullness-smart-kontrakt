export default function ProgressBar({ value, label }) {
  var pct = Math.round(value);
  return (
    <div className="progress-section">
      <div className="progress-header">
        <span>{label || "Postęp modułu"}</span>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}
