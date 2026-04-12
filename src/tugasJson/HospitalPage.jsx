import React, { useState, useMemo } from "react";
import hospitalsData from "./hospitals.json";
import HospitalCard from "./HospitalCard";
import HospitalTable from "./HospitalTable";
import SearchFilter from "./SearchFilter";

const HospitalPage = () => {
  const [view, setView] = useState("guest"); // "guest" | "admin"
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCity, setFilterCity] = useState("");

  const filtered = useMemo(() => {
    return hospitalsData.filter((h) => {
      const matchSearch = h.name.toLowerCase().includes(search.toLowerCase());
      const matchType = filterType === "" || h.type === filterType;
      const matchCity = filterCity === "" || h.address.city === filterCity;
      return matchSearch && matchType && matchCity;
    });
  }, [search, filterType, filterCity]);

  const stats = useMemo(
    () => ({
      total: hospitalsData.length,
      pemerintah: hospitalsData.filter((h) => h.type === "Pemerintah").length,
      swasta: hospitalsData.filter((h) => h.type === "Swasta").length,
      khusus: hospitalsData.filter((h) => h.type === "Khusus").length,
      bpjs: hospitalsData.filter((h) => h.bpjs).length,
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                </div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  MediFind Indonesia
                </h1>
              </div>
              <p className="text-teal-100 text-sm">
                Direktori Rumah Sakit Terpercaya di Indonesia
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-white/15 rounded-xl p-1 self-start sm:self-auto">
              <button
                onClick={() => setView("guest")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${view === "guest" ? "bg-white text-teal-700 shadow" : "text-white/80 hover:text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Guest
              </button>
              <button
                onClick={() => setView("admin")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${view === "admin" ? "bg-white text-teal-700 shadow" : "text-white/80 hover:text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Admin
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: "Total RS", value: stats.total, color: "text-teal-600" },
              {
                label: "Pemerintah",
                value: stats.pemerintah,
                color: "text-blue-600",
              },
              {
                label: "Swasta",
                value: stats.swasta,
                color: "text-emerald-600",
              },
              {
                label: "Khusus",
                value: stats.khusus,
                color: "text-purple-600",
              },
              {
                label: "Menerima BPJS",
                value: stats.bpjs,
                color: "text-green-600",
              },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <SearchFilter
              search={search}
              onSearch={setSearch}
              filterType={filterType}
              onFilterType={setFilterType}
              filterCity={filterCity}
              onFilterCity={setFilterCity}
              hospitals={hospitalsData}
            />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-400">
              Menampilkan{" "}
              <span className="font-semibold text-teal-600">
                {filtered.length}
              </span>{" "}
              dari {hospitalsData.length} rumah sakit
            </span>
            {(search || filterType || filterCity) && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilterType("");
                  setFilterCity("");
                }}
                className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
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
                Reset filter
              </button>
            )}
          </div>
        </div>

        {/* Section header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`w-1.5 h-8 rounded-full ${view === "guest" ? "bg-teal-500" : "bg-blue-500"}`}
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {view === "guest"
                ? "Direktori Rumah Sakit"
                : "Manajemen Data Rumah Sakit"}
            </h2>
            <p className="text-xs text-gray-400">
              {view === "guest"
                ? "Temukan rumah sakit terbaik untuk kebutuhan Anda"
                : "Kelola dan pantau seluruh data rumah sakit"}
            </p>
          </div>
        </div>

        {/* Content */}
        {view === "guest" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-16 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mx-auto text-gray-200 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-medium text-gray-500">
                  Data tidak ditemukan
                </p>
                <p className="text-sm mt-1">
                  Coba ubah kata kunci atau filter pencarian
                </p>
              </div>
            ) : (
              filtered.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
              ))
            )}
          </div>
        ) : (
          <HospitalTable hospitals={filtered} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-10 bg-white border-t border-gray-100 py-5 text-center">
        <p className="text-gray-400 text-xs">
          © 2025 MediFind Indonesia · Tugas ReactJS · Pertemuan 4
        </p>
      </footer>
    </div>
  );
};

export default HospitalPage;
