import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUser,
  FaBox,
  FaCog,
} from "react-icons/fa";

import { XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen w-64
        bg-white border-r border-gray-200 shadow-lg

        transform transition-transform duration-300 ease-in-out

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

        md:translate-x-0
      `}
    >
      {/* TOP SECTION */}
      <div className="flex items-center justify-between h-16 px-5 border-b border-gray-200">

        {/* LOGO */}
        <h2 className="text-lg font-bold text-blue-950 italic ">
          My HealthCenter
        </h2>

        {/* CLOSE BUTTON (mobile only) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden p-1 rounded hover:bg-gray-100 transition"
        >
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="mt-6 px-3">
        <ul className="space-y-2">

          <li className="sidebar-item">
            <FaTachometerAlt className="text-lg min-w-[20px]" />
            <span>Dashboard</span>
          </li>

          <li className="sidebar-item">
            <FaShoppingCart className="text-lg min-w-[20px]" />
            <span>Orders</span>
          </li>

          <li className="sidebar-item">
            <FaUsers className="text-lg min-w-[20px]" />
            <span>Customers</span>
          </li>

          <li className="sidebar-item">
            <FaUser className="text-lg min-w-[20px]" />
            <span>User</span>
          </li>

          <li className="sidebar-item">
            <FaBox className="text-lg min-w-[20px]" />
            <span>Box</span>
          </li>

          <li className="sidebar-item">
            <FaCog className="text-lg min-w-[20px]" />
            <span>Settings</span>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;