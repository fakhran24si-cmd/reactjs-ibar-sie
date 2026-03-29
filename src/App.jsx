// src/App.jsx
import { useState } from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  // State untuk melacak apakah tombol sudah diklik
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="app-wrapper">
      {!isStarted ? (
        // Tampilan Awal: Tombol Mulai
        <button className="btn-mulai" onClick={() => setIsStarted(true)}>
          Mulai
        </button>
      ) : (
        // Tampilan Setelah Diklik: Biodata Pribadi
        <Profile />
      )}
    </div>
  );
}

export default App;
