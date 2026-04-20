import { NavLink } from "react-router-dom";
import { MdDashboard, MdError } from "react-icons/md"; // Tambah icon error
import { FaShoppingBag, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 font-medium transition-all ${
      isActive
        ? "bg-green-100 text-green-600 font-bold"
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <div className="w-64 bg-white h-screen border-r p-4 flex flex-col">
      <div className="text-2xl font-bold text-green-600 mb-8 px-4">
        Brand Logo
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink to="/" className={menuClass}>
          <MdDashboard className="mr-3 text-xl" /> Dashboard
        </NavLink>
        <NavLink to="/orders" className={menuClass}>
          <FaShoppingBag className="mr-3 text-lg" /> Orders
        </NavLink>
        <NavLink to="/customers" className={menuClass}>
          <FaUsers className="mr-3 text-lg" /> Customers
        </NavLink>

        {/* Label untuk memisahkan menu Error */}
        <div className="pt-4 pb-2 px-4 text-xs font-bold text-gray-400 uppercase">
          Error Pages
        </div>

        <NavLink to="/400" className={menuClass}>
          <MdError className="mr-3 text-xl" /> Error 400
        </NavLink>
        <NavLink to="/401" className={menuClass}>
          <MdError className="mr-3 text-xl" /> Error 401
        </NavLink>
        <NavLink to="/403" className={menuClass}>
          <MdError className="mr-3 text-xl" /> Error 403
        </NavLink>
      </nav>
    </div>
  );
}
