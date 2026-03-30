import { useState } from "react";

export default function HitungGajiForm() {
    const [gaji, setGaji] = useState(0); // Gunakan angka 0 sebagai default
    const pajak = 0.11; // Pajak 11% sesuai teks di bawah
    
    // Hitung gaji bersih: Gaji Pokok dikurangi nominal pajak
    const totalGaji = gaji - (gaji * pajak);

    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Hitung Gaji Bersih</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">
                        Gaji Pokok
                    </label>
                    <input
                        type="number"
                        placeholder="Masukkan jumlah gaji"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        // Perbaikan penulisan (e) =>
                        onChange={(e) => setGaji(Number(e.target.value))} 
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">
                        Pajak: <b className="text-red-500">11%</b>
                    </label>
                </div>
            {/* Logika Kondisional: Jika gaji kosong tampilkan merah, jika ada tampilkan biru */}
{!gaji ? (
    <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
        <p className="font-semibold">
            Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif).
        </p>
    </div>
) : (
    <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
        <p className="font-semibold">
            Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
        </p>
    </div>
)}
                <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
                    <p className="font-semibold">
                        {/* Menampilkan hasil perhitungan secara dinamis */}
                        Total Take Home Pay (THP): Rp {totalGaji.toLocaleString('id-ID')}
                    </p>
                </div>
            </div>
        </div>
    );
}