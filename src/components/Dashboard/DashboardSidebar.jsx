import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiCalendar,
  FiActivity,
  FiImage,
  FiFileText,
  FiMessageSquare,
  FiDollarSign,
  FiInfo,
  FiUserX,
  FiTrash2,
  FiHome,
  FiX
} from "react-icons/fi";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";

const menuItems = [
  { title: "হোম", path: "/", icon: <FiHome /> },
  { title: "প্রোফাইল", path: "/dashboard/profile", icon: <FiUser /> },
  { title: "ইভেন্ট যুক্ত করুন", path: "/dashboard/add/event", icon: <FiCalendar /> },
  { title: "সার্টিফিকেট তৈরি করুন", path: "/dashboard/blood/donation/certificate", icon: <PiCertificateFill /> },
  // { title: "Admin Post", path: "/dashboard/add/admin/post", icon: <FiMessageSquare /> },
  { title: "রক্তের অনুরোধ সমূহ দেখুন", path: "/dashboard/emergency/blood/requests/admin", icon: <FaHandHoldingWater /> },
  // { title: "Add Blood Donor", path: "/dashboard/add/blood/donor", icon: <GiWaterDrop /> },
  // { title: "Add Play Game", path: "/dashboard/add/play/game", icon: <FiActivity /> },
  // { title: "Control Carousel", path: "/dashboard/carousel", icon: <FiImage /> },
  // { title: "Next Plan", path: "/dashboard/next/plan", icon: <FiFileText /> },
  // { title: "User Advices", path: "/dashboard/controle/user/advices", icon: <FiMessageSquare /> },
  // { title: "Finance", path: "/dashboard/add/money/survey", icon: <FiDollarSign /> },
  { title: "সদস্য যুক্ত করুন", path: "/dashboard/add/new/member", icon: <FiDollarSign /> },
  // { title: "About", path: "/dashboard/controle/about/Page", icon: <FiInfo /> },
  // { title: "Ban User", path: "/dashboard/ban/user", icon: <FiUserX /> },
  // { title: "Trash", path: "/dashboard/trash", icon: <FiTrash2 /> },
];

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300
        ${collapsed ? "w-20" : "w-64"} flex flex-col`}
    >
      {/* Desktop Toggle Button */}
      <div className="hidden md:flex justify-start relative cursor-pointer">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center
                     hover:bg-blue-500 hover:scale-110 transition-transform duration-200 cursor-pointer"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
        </button>
      </div>

      {/* Mobile Close Button */}
      <div className="flex justify-between items-center p-3 border-b md:hidden">
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-600 hover:text-red-500 transition"
        >
          <FiX size={24} />
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center p-5 border-b">
        <h1
          className={`font-bold text-blue-600 text-center transition-opacity duration-300 ${
            collapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          DURGAPUR IDEAL CLUB
        </h1>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto overscroll-contain touch-auto">
        {menuItems?.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 transform ${
                isActive
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span
              className={`text-sm font-medium transition-opacity duration-300 ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;