// src/components/BiodataItem.jsx
//import "./BiodataItem.css";
function BiodataItem({ label, value }) {
  return (
    <div className="Biodata-Item">
      <span className="label">{label}: </span>
      <span className="value">{value}</span>
    </div>
  );
}

export default BiodataItem;
