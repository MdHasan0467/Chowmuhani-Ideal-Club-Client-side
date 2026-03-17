import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiCalendar,
  // FiDroplet,
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
import { FaMessage } from "react-icons/fa6";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";

const menuItems = [
  { title: "Home", path: "/", icon: <FiHome /> },
  { title: "Profile", path: "/dashboard/profile", icon: <FiUser /> },
  { title: "Add Event", path: "/dashboard/add/event", icon: <FiCalendar /> },
  { title: "Blood Donation Certificate", path: "/dashboard/blood/donation/certificate", icon: <PiCertificateFill /> },
  { title: "Admin Post", path: "/dashboard/add/admin/post", icon: <FaMessage /> },
  { title: "Blood Requests", path: "/dashboard/emergency/blood/requests/admin", icon: <FaHandHoldingWater /> },
  { title: "Add Blood Donor", path: "/dashboard/add/blood/donor", icon: <GiWaterDrop /> },
  { title: "Add Play Game", path: "/dashboard/add/play/game", icon: <FiActivity /> },
  { title: "Control Carousel", path: "/dashboard/carousel", icon: <FiImage /> },
  { title: "Next Plan", path: "/dashboard/next/plan", icon: <FiFileText /> },
  { title: "User Advices", path: "/dashboard/controle/user/advices", icon: <FiMessageSquare /> },
  { title: "Finance", path: "/dashboard/add/money/survey", icon: <FiDollarSign /> },
  { title: "Add Member", path: "/dashboard/add/new/member", icon: <FiDollarSign /> },
  { title: "About", path: "/dashboard/controle/about/Page", icon: <FiInfo /> },
  { title: "Ban User", path: "/dashboard/ban/user", icon: <FiUserX /> },
  { title: "Trash", path: "/dashboard/trash", icon: <FiTrash2 /> },
];

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-all duration-300
        ${collapsed ? "w-20" : "w-64"} flex flex-col`}
    >

      {/* Desktop Toggle Button (overflow outside sidebar) */}
      <div className="hidden md:flex justify-start relative">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-4 top-4 w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center
                     hover:bg-blue-500 hover:scale-110 transition-transform duration-200 cursor-pointer"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? 
          <BsArrowRightSquareFill />
          :
          <BsArrowLeftSquareFill />
          }
        </button>
      </div>

      {/* Mobile Close & Collapse Buttons */}
      <div className="flex justify-between items-center p-3 border-b md:hidden">
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-600 hover:text-red-500 transition"
        >
          <FiX size={24} />
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          {collapsed ? 
          <BsArrowRightSquareFill />
          :
          <BsArrowLeftSquareFill />
          }
        </button>
      </div>

      {/* Logo */}
      <div className={`flex items-center justify-center p-5 border-b ${collapsed ? 'justify-center' : ''}`}>
        <div>
          <h1 className={`font-bold text-blue-600 text-center transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            CHOWMUHANI IDEAL CLUB
          </h1>
          <h1 className={`font-bold text-blue-600 text-center transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            চৌমুহনী আইডিয়াল ক্লাব
          </h1>
        </div>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto overscroll-contain touch-auto">
        {menuItems.map((item, index) => (
          <Tippy key={index} content={collapsed ? item.title : ""} placement="right">
            <NavLink
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`text-sm font-medium transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>
                {item.title}
              </span>
            </NavLink>
          </Tippy>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;