import { NavLink } from "react-router-dom";
// Import MdShoppingBag ditambahkan ke dalam library md
import {
  MdDashboard,
  MdBedroomChild,
  MdMeetingRoom,
  MdError,
  MdShoppingBag,
} from "react-icons/md";
import { FaCalendarCheck, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 font-medium transition-all ${
      isActive
        ? "bg-indigo-100 text-indigo-700 font-bold" // Tema Indigo
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <div className="w-64 bg-white h-screen border-r p-4 flex flex-col shadow-sm">
      {/* Area Logo */}
      <div className="text-2xl font-bold text-indigo-900 mb-8 px-4 flex items-center">
        <MdBedroomChild className="mr-2 text-amber-500" /> Grand Stay
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink to="/" className={menuClass}>
          <MdDashboard className="mr-3 text-xl" /> Dashboard
        </NavLink>

        {/* Menu Products Baru - Diletakkan sebelum Reservations sesuai urutan umum aplikasi */}
        <NavLink to="/products" className={menuClass}>
          <MdShoppingBag className="mr-3 text-xl text-emerald-500" /> Products
        </NavLink>

        {/* Menu lainnya tetap dipertahankan */}
        <NavLink to="/orders" className={menuClass}>
          <FaCalendarCheck className="mr-3 text-lg" /> Reservations
        </NavLink>

        <NavLink to="/customers" className={menuClass}>
          <FaUsers className="mr-3 text-lg" /> Guest List
        </NavLink>

        <div className="pt-4 pb-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          System Status
        </div>

        <NavLink to="/401" className={menuClass}>
          <MdError className="mr-3 text-xl" /> Security Error
        </NavLink>
      </nav>
    </div>
  );
}
