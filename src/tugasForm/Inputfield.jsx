// Reusable InputField component
// Props: label, type, value, onChange, error, placeholder, maxLength

function InputField({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  maxLength,
}) {
  return (
    <div className="field-wrapper">
      <label className="field-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`field-input ${error ? "input-error" : ""}`}
      />
      {/* Conditional rendering: tampilkan error jika ada */}
      {error && <p className="error-msg">⚠ {error}</p>}
    </div>
  );
}

export default InputField;
