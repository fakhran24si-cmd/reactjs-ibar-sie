// HasilPendaftaran component
// Props: data (object berisi semua data form yang sudah tervalidasi)

function HasilPendaftaran({ data }) {
  // Hitung kelayakan sederhana berdasarkan semester
  const semesterNum = parseInt(data.semester);
  const layak = semesterNum >= 3 && semesterNum <= 7;

  return (
    <div className="hasil-wrapper">
      <h2 className="hasil-title">📋 Hasil Pendaftaran</h2>

      <div className="hasil-card">
        <div className="hasil-row">
          <span className="hasil-key">Nama</span>
          <span className="hasil-val">{data.nama}</span>
        </div>
        <div className="hasil-row">
          <span className="hasil-key">Email</span>
          <span className="hasil-val">{data.email}</span>
        </div>
        <div className="hasil-row">
          <span className="hasil-key">Jurusan</span>
          <span className="hasil-val">{data.jurusan}</span>
        </div>
        <div className="hasil-row">
          <span className="hasil-key">Semester</span>
          <span className="hasil-val">{data.semester}</span>
        </div>
        <div className="hasil-row">
          <span className="hasil-key">Esai</span>
          <span className="hasil-val hasil-esai">"{data.esai}"</span>
        </div>
      </div>

      {/* Conditional rendering: status kelayakan */}
      <div
        className={`status-badge ${layak ? "status-lolos" : "status-tidak"}`}
      >
        {layak
          ? " Memenuhi syarat semester (3–7). Pendaftaran diterima!"
          : " Semester tidak memenuhi syarat (harus semester 3–7)."}
      </div>

      <p className="hasil-note">
        Panjang esai: <strong>{data.esai.length} karakter</strong>
      </p>
    </div>
  );
}

export default HasilPendaftaran;
