import PageHeader from "../components/PageHeader";

export default function Orders() {
  // Generate 30 data otomatis
  const orders = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    no: `ORD-00${i + 1}`,
    name: `User ${i + 1}`,
    total: `Rp ${(i + 1) * 15000}`,
    status: i % 2 === 0 ? "Success" : "Pending",
  }));

  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order List"]}>
        <button className="bg-green-500 text-white px-5 py-2 rounded-xl font-bold">
          + Add Order
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">No Order</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-bold">{item.no}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.total}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${item.status === "Success" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                  >
                    {item.status}
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
