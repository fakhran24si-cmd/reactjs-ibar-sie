import PageHeader from "../../components/PageHeader";
import { FaUserPlus } from "react-icons/fa";
export default function Customers() {
  // Generate 30 data JSON otomatis sesuai atribut modul
  const customersData = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-00${i + 1}`,
    name: `Pelanggan Ke-${i + 1}`,
    email: `customer${i + 1}@mail.com`,
    phone: `0812-3456-78${i + 1}`,
    loyalty: i % 3 === 0 ? "Gold" : i % 2 === 0 ? "Silver" : "Bronze",
  }));

  return (
    <div className="p-4">
      {/* PageHeader dengan Props sesuai instruksi */}
      <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-xl">
          <FaUserPlus className="mr-2" /> Add Guest
        </button>
      </PageHeader>

      {/* Tabel untuk menampilkan Data JSON */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 font-bold text-gray-600">Customer ID</th>
              <th className="p-4 font-bold text-gray-600">Customer Name</th>
              <th className="p-4 font-bold text-gray-600">Email</th>
              <th className="p-4 font-bold text-gray-600">Phone</th>
              <th className="p-4 font-bold text-gray-600">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 text-sm font-medium text-gray-700">
                  {item.id}
                </td>
                <td className="p-4 text-sm text-gray-600">{item.name}</td>
                <td className="p-4 text-sm text-gray-600">{item.email}</td>
                <td className="p-4 text-sm text-gray-600">{item.phone}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      item.loyalty === "Gold"
                        ? "bg-orange-100 text-orange-600"
                        : item.loyalty === "Silver"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
