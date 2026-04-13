import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Pastikan file CSS Tailwind kamu benar path-nya
import Sidebar from "./pertemuan-5/layouts/Sidebar";
import Header from "./pertemuan-5/layouts/Header";
import Dashboard from "./pertemuan-5/pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar dengan lebar tetap agar rapi */}
      <Sidebar />

      {/* Area Konten Utama */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  </React.StrictMode>,
);
