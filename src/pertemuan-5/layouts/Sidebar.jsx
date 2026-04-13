import { MdDashboard } from "react-icons/md";
import { FaShoppingBag, FaUsers, FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-72 flex-col bg-white p-6 shadow-sm border-r border-gray-100"
    >
      {/* Logo: Analytics dihapus, hanya Sedap. */}
      <div id="sidebar-logo" className="mb-10 px-4">
        <span className="text-3xl font-bold text-gray-900 tracking-tight">
          Sedap<b className="text-green-500">.</b>
        </span>
      </div>

      {/* List Menu: Analytics Dihapus */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <div className="flex cursor-pointer items-center rounded-xl bg-green-50 p-4 font-bold text-green-600">
              <MdDashboard className="mr-4 text-2xl" />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-500 hover:bg-gray-50 transition-all">
              <FaShoppingBag className="mr-4 text-xl" />
              <span>Orders</span>
            </div>
          </li>
          <li>
            <div className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-500 hover:bg-gray-50 transition-all">
              <FaUsers className="mr-4 text-xl" />
              <span>Customers</span>
            </div>
          </li>
        </ul>
      </nav>

      {/* Footer Card */}
      <div className="mt-auto">
        <div className="rounded-2xl bg-green-500 p-5 text-white shadow-lg shadow-green-200">
          <p className="text-xs leading-relaxed opacity-90">
            Organize your menus through button below
          </p>
          <button className="mt-4 flex w-full items-center justify-center space-x-2 rounded-xl bg-white py-2 text-sm font-bold text-green-600 transition-transform hover:scale-105">
            <FaPlus size={12} />
            <span>Add Menus</span>
          </button>
        </div>
      </div>
    </div>
  );
}
