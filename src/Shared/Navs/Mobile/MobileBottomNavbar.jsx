// MobileBottomNavbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../../IconSVG/Icon";

/**
 * 🔹 Reusable Mobile Bottom Navbar
 */
const MobileBottomNavbar = () => {
  const location = useLocation();

  const isActive = (path, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const navItems = [
    { name: "হোম", path: "/", icon: "home", color: "text-blue-600", exact: true },
    { name: "অনুরোধ", path: "/emergency/blood/Request", icon: "bloodRequest", color: "text-red-500" },
    { name: "রক্তদান", path: "/become/a/blood/donor", icon: "donate", color: "text-green-600" },
    { name: "সহায়তা", path: "/donation/support", icon: "support", color: "text-purple-600" },
    { name: "সদস্য", path: "/add/new/member", icon: "addMember", color: "text-yellow-600" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-between items-center px-2 py-2">
        {navItems?.map((item, index) => {
          const active = isActive(item.path, item.exact);

          return (
            <Link
              key={index}
              to={item.path}
              className={`relative flex flex-col items-center text-xs flex-1 active:scale-90 transition duration-150`}
            >
              {/* Active Indicator */}
              <div
                className={`absolute -top-1 h-[3px] w-6 rounded-full transition-all duration-300 ${
                  active ? "bg-current opacity-100" : "opacity-0"
                }`}
              />

              {/* SVG Icon */}
              <Icon
                name={item.icon}
                className={`w-6 h-6 mb-0.5 transition-all duration-200 ${
                  active ? item.color : "text-gray-500"
                }`}
              />

              {/* Text */}
              <span
                className={`transition-all duration-200 truncate max-w-[60px] ${
                  active ? item.color : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNavbar;