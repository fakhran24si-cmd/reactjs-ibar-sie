import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import HasilPendaftaran from "./Hasilpendaftaran";

// Data options untuk dropdown
const JURUSAN_OPTIONS = [
  { value: "Sistem Informasi", label: "Sistem Informasi" },
  { value: "Teknik Informatika", label: "Teknik Informatika" },
  { value: "Manajemen", label: "Manajemen" },
  { value: "Akuntansi", label: "Akuntansi" },
];

const SEMESTER_OPTIONS = [
  { value: "1", label: "Semester 1" },
  { value: "2", label: "Semester 2" },
  { value: "3", label: "Semester 3" },
  { value: "4", label: "Semester 4" },
  { value: "5", label: "Semester 5" },
  { value: "6", label: "Semester 6" },
  { value: "7", label: "Semester 7" },
  { value: "8", label: "Semester 8" },
];

function FormBeasiswa() {
  // State: data form
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    jurusan: "",
    semester: "",
    esai: "",
  });

  // State: pesan error per field
  const [errors, setErrors] = useState({});

  // State: apakah form sudah di-submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ─── Fungsi validasi ────────────────────────────────────────
  const validate = (data) => {
    const newErrors = {};

    // Validasi NAMA
    if (!data.nama.trim()) {
      newErrors.nama = "Nama tidak boleh kosong.";
    } else if (data.nama.trim().length < 3) {
      newErrors.nama = "Nama minimal 3 karakter.";
    } else if (/\d/.test(data.nama)) {
      newErrors.nama = "Nama tidak boleh mengandung angka.";
    }

    // Validasi EMAIL
    if (!data.email.trim()) {
      newErrors.email = "Email tidak boleh kosong.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Format email tidak valid (contoh: nama@email.com).";
    }

    // Validasi JURUSAN
    if (!data.jurusan) {
      newErrors.jurusan = "Jurusan harus dipilih.";
    }

    // Validasi SEMESTER
    if (!data.semester) {
      newErrors.semester = "Semester harus dipilih.";
    }

    // Validasi ESAI
    if (!data.esai.trim()) {
      newErrors.esai = "Esai motivasi tidak boleh kosong.";
    } else if (data.esai.trim().length < 20) {
      newErrors.esai = `Esai minimal 20 karakter (sekarang: ${data.esai.trim().length}).`;
    } else if (data.esai.trim().length > 200) {
      newErrors.esai = "Esai maksimal 200 karakter.";
    }

    return newErrors;
  };

  // ─── Cek apakah semua field valid (untuk tombol submit) ──────
  const isFormValid = () => {
    const validationErrors = validate(formData);
    return Object.keys(validationErrors).length === 0;
  };

  // ─── Handler perubahan field ─────────────────────────────────
  const handleChange = (field) => (e) => {
    const newData = { ...formData, [field]: e.target.value };
    setFormData(newData);

    // Validasi real-time per field yang diubah
    const newErrors = validate(newData);
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field] || null,
    }));
  };

  // ─── Handler submit ──────────────────────────────────────────
  const handleSubmit = () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
  };

  // ─── Handler reset ───────────────────────────────────────────
  const handleReset = () => {
    setFormData({ nama: "", email: "", jurusan: "", semester: "", esai: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="form-title">🎓 Form Pendaftaran Beasiswa</h1>
        <p className="form-subtitle">
          Isi semua data dengan benar untuk melanjutkan pendaftaran.
        </p>
      </div>

      {/* Conditional rendering: tampilkan form ATAU hasil */}
      {!isSubmitted ? (
        <div className="form-body">
          {/* 3 Input Field */}
          <InputField
            label="Nama Lengkap"
            value={formData.nama}
            onChange={handleChange("nama")}
            error={errors.nama}
            placeholder="Contoh: Budi Santoso"
          />

          <InputField
            label="Email Aktif"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
            placeholder="Contoh: budi@email.com"
          />

          <InputField
            label="Esai Motivasi"
            value={formData.esai}
            onChange={handleChange("esai")}
            error={errors.esai}
            placeholder="Tulis motivasi kamu (20–200 karakter)"
            maxLength={200}
          />

          {/* Counter karakter esai */}
          <p className="char-counter">{formData.esai.length} / 200 karakter</p>

          {/* 2 Select Dropdown */}
          <SelectField
            label="Jurusan"
            value={formData.jurusan}
            onChange={handleChange("jurusan")}
            options={JURUSAN_OPTIONS}
            error={errors.jurusan}
          />

          <SelectField
            label="Semester"
            value={formData.semester}
            onChange={handleChange("semester")}
            options={SEMESTER_OPTIONS}
            error={errors.semester}
          />

          {/* Conditional rendering: tombol submit hanya muncul jika semua valid */}
          {isFormValid() && (
            <button className="btn-submit" onClick={handleSubmit}>
              Kirim Pendaftaran ✓
            </button>
          )}

          {/* Pesan jika belum valid */}
          {!isFormValid() && (
            <p className="hint-valid">
              Lengkapi dan perbaiki semua isian untuk mengaktifkan tombol
              submit.
            </p>
          )}
        </div>
      ) : (
        // Tampilkan hasil setelah submit
        <>
          <HasilPendaftaran data={formData} />
          <button className="btn-reset" onClick={handleReset}>
            ← Daftar Ulang
          </button>
        </>
      )}
    </div>
  );
}

export default FormBeasiswa;
