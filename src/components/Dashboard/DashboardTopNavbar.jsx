import { FiMenu } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

const DashboardTopNavbar = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">

      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-gray-700"
      >
        <FiMenu size={24} />
      </button>

      <h2 className="font-semibold text-gray-700">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-2 cursor-pointer">
        <MdAdminPanelSettings className="text-xl text-blue-600" />
        <span className="font-medium">Admin</span>
      </div>

    </header>
  );
};

export default DashboardTopNavbar;