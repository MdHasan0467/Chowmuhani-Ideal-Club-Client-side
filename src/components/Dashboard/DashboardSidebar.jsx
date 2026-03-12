import { Link } from "react-router";
import { FiUsers, FiUser, FiActivity, FiUserCheck, FiEdit, FiX } from "react-icons/fi";
import { AiOutlineFundProjectionScreen, AiOutlineLineChart } from "react-icons/ai";
import { GiSoccerBall } from "react-icons/gi";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const summaryCards = [
    { title: "Blood Donors", icon: <FiUsers className="mr-3" /> },
    { title: "Blood Donates (Bags)", icon: <AiOutlineFundProjectionScreen className="mr-3" /> },
    { title: "Volunteers", icon: <FiUser className="mr-3" /> },
    { title: "Events", icon: <FiActivity className="mr-3" /> },
    { title: "Users", icon: <FiUserCheck className="mr-3" /> },
    { title: "Admin Posts", icon: <FiEdit className="mr-3" /> },
    { title: "Reports", icon: <AiOutlineLineChart className="mr-3" /> },
    { title: "Total Play (খেলাধুলা)", icon: <GiSoccerBall className="mr-3" /> },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50`}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-end p-2 md:hidden">
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      {/* Branding */}
      <div className="flex items-center justify-center p-1 shadow-md bg-white">
        <Link to="/" className="p-6 hover:text-orange-500 text-center text-blue-600">
          <span>CHOWMUHANI IDEAL CLUB</span>
          <br />
          <span>চৌমুহনী আইডিয়াল ক্লাব</span>
        </Link>
      </div>

      {/* Sidebar Links */}
      <nav className="mt-6">
        {summaryCards.map((card, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-md mb-2"
            onClick={() => setSidebarOpen(false)} // close sidebar on mobile link click
          >
            {card.icon} <span className="ml-3">{card.title}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;