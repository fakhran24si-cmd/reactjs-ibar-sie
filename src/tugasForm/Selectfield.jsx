// Reusable SelectField component
// Props: label, value, onChange, options, error

function SelectField({ label, value, onChange, options, error }) {
  return (
    <div className="field-wrapper">
      <label className="field-label">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`field-input ${error ? "input-error" : ""}`}
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* Conditional rendering: tampilkan error jika ada */}
      {error && <p className="error-msg">⚠ {error}</p>}
    </div>
  );
}

export default SelectField;
