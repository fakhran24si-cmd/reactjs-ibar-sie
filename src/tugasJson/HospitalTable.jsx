import React, { useState } from "react";

const HospitalTable = ({ hospitals }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const typeBadgeClass = {
    Pemerintah: "bg-blue-100 text-blue-700",
    Swasta: "bg-emerald-100 text-emerald-700",
    Khusus: "bg-purple-100 text-purple-700",
  };

  const accrBadgeClass = {
    JCI: "bg-yellow-100 text-yellow-800",
    "KARS Paripurna": "bg-teal-100 text-teal-800",
    "KARS Utama": "bg-cyan-100 text-cyan-800",
    "KARS Madya": "bg-gray-100 text-gray-700",
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-md border border-gray-100">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider rounded-tl-2xl w-8">
              #
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Foto
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider min-w-[200px]">
              Nama Rumah Sakit
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Tipe
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Kota
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">
              Akreditasi
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-center">
              Rating
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-center">
              Bed
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-center">
              Dokter
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-center">
              BPJS
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-center">
              Emergency
            </th>
            <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider rounded-tr-2xl">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {hospitals.length === 0 && (
            <tr>
              <td colSpan={12} className="text-center py-12 text-gray-400">
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Data tidak ditemukan</span>
                </div>
              </td>
            </tr>
          )}
          {hospitals.map((h, i) => (
            <React.Fragment key={h.id}>
              <tr
                className={`border-b border-gray-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-teal-50/40`}
              >
                <td className="px-4 py-3 text-gray-400 font-medium text-xs">
                  {i + 1}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-12 h-9 object-cover rounded-lg shadow-sm"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=100&h=75&fit=crop";
                    }}
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-800 text-sm leading-tight">
                    {h.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Est. {h.established}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadgeClass[h.type] || "bg-gray-100 text-gray-600"}`}
                  >
                    {h.type}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="text-gray-700 text-xs font-medium">
                    {h.address.city}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {h.address.province}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${accrBadgeClass[h.accreditation] || "bg-gray-100 text-gray-600"}`}
                  >
                    {h.accreditation}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-gray-700 text-sm">
                      {h.rating}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">
                  {h.beds}
                </td>
                <td className="px-4 py-3 text-center font-semibold text-gray-700 text-sm">
                  {h.doctors.length}
                </td>
                <td className="px-4 py-3 text-center">
                  {h.bpjs ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {h.emergency ? (
                    <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      24 Jam
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      Terbatas
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      setExpandedRow(expandedRow === h.id ? null : h.id)
                    }
                    className="text-teal-600 hover:text-teal-800 text-xs font-medium flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    {expandedRow === h.id ? "Tutup" : "Lihat"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-3.5 h-3.5 transition-transform ${expandedRow === h.id ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </td>
              </tr>

              {/* Expanded detail row */}
              {expandedRow === h.id && (
                <tr className="bg-teal-50/60">
                  <td colSpan={12} className="px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      {/* Alamat */}
                      <div>
                        <div className="font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                          </svg>
                          Alamat & Kontak
                        </div>
                        <div className="text-gray-600 space-y-1">
                          <p>{h.address.street}</p>
                          <p>
                            {h.address.city}, {h.address.province}{" "}
                            {h.address.postal_code}
                          </p>
                          <p className="mt-2">📞 {h.contact.phone}</p>
                          <p>✉️ {h.contact.email}</p>
                        </div>
                      </div>

                      {/* Dokter */}
                      <div>
                        <div className="font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          Dokter Spesialis
                        </div>
                        <div className="space-y-2">
                          {h.doctors.map((d, di) => (
                            <div
                              key={di}
                              className="bg-white rounded-lg p-2 border border-teal-100"
                            >
                              <div className="font-medium text-gray-700">
                                {d.name}
                              </div>
                              <div className="text-teal-600">
                                {d.specialist} · {d.schedule}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fasilitas */}
                      <div>
                        <div className="font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          Fasilitas
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {h.facilities.map((f, fi) => (
                            <span
                              key={fi}
                              className={`px-2.5 py-1 rounded-full font-medium ${f.available ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-400 line-through"}`}
                            >
                              {f.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalTable;
