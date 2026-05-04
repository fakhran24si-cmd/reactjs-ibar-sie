import React from "react";
// Pastikan import Link di bagian atas!
import { Link } from "react-router-dom";
// Import data dari folder yang sama
import productsData from "./products.json";

const Produk = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Nama Produk</th>
              <th className="px-6 py-3 text-left">Kode</th>
              <th className="px-6 py-3 text-left">Kategori</th>
              <th className="px-6 py-3 text-left">Harga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productsData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {/* --- Bagian Instruksi Modul No. 2 --- */}
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-400 hover:text-emerald-600 font-medium"
                  >
                    {item.title}
                  </Link>
                </td>
                {/* ------------------------------------ */}
                <td className="px-6 py-4 text-sm">{item.code}</td>
                <td className="px-6 py-4 text-sm">{item.category}</td>
                <td className="px-6 py-4 text-sm font-semibold">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
