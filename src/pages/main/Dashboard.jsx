import PageHeader from "../../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  // Data New Customers telah dihapus dari array ini
  const stats = [
    {
      id: 1,
      label: "Total Orders",
      value: "75",
      icon: <FaShoppingCart />,
      color: "bg-green-500",
      barColor: "bg-green-500",
      progress: "75%",
    },
    {
      id: 2,
      label: "Total Delivered",
      value: "175",
      icon: <FaTruck />,
      color: "bg-blue-500",
      barColor: "bg-blue-500",
      progress: "90%",
    },
    {
      id: 3,
      label: "Total Canceled",
      value: "40",
      icon: <FaBan />,
      color: "bg-red-500",
      barColor: "bg-red-500",
      progress: "20%",
    },
    {
      id: 4,
      label: "Total Revenue",
      value: "Rp 12.8M",
      icon: <FaDollarSign />,
      color: "bg-yellow-500",
      barColor: "bg-yellow-500",
      progress: "65%",
    },
  ];

  return (
    <div>
      <PageHeader />

      {/* Grid disesuaikan menjadi grid-cols-4 agar tampilan tetap simetris */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-3xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white mb-4 shadow-lg shadow-opacity-20`}
            >
              {item.icon}
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-black text-gray-800">
                {item.value}
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {item.label}
              </p>
            </div>

            {/* Fitur Progress Bar tetap ada untuk kategori lainnya */}
            <div className="mt-auto">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-500">
                  Target
                </span>
                <span className="text-[10px] font-bold text-gray-700">
                  {item.progress}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${item.barColor} h-2 rounded-full`}
                  style={{ width: item.progress }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
