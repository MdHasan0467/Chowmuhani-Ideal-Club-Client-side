import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../../IconSVG/Icon";

const MobileBottomNavbar = ({ darkMode = false, notifications = {} }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);

  const navItems = [
    { name: "হোম", path: "/", icon: "home", color: "text-blue-500" },
    { name: "অনুরোধ", path: "/emergency/blood/Request", icon: "bloodRequest", color: "text-red-500" },
    { name: "Donate", path: "/become/a/blood/donor", icon: "donate", isFAB: true },
    { name: "সহায়তা", path: "/donation/support", icon: "support", color: "text-purple-500" },
    { name: "সদস্য", path: "/add/new/member", icon: "addMember", color: "text-yellow-500" },
  ];

  // update active index on route change
  useEffect(() => {
    const idx = navItems.findIndex((item) => location.pathname.startsWith(item.path));
    if (idx !== -1) setActiveIndex(idx);
  }, [location.pathname]);

  const handleClick = (e) => {
    // ripple effect
    const target = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const rect = target.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");
    const ripple = target.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    target.appendChild(circle);

    // haptic vibration for mobile
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-50 md:hidden">
      <div
        ref={navRef}
        className={`relative flex justify-between items-center px-2 py-3 rounded-2xl shadow-2xl border ${
          darkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-white/20"
        } backdrop-blur-xl`}
      >
        {/* Sliding Active Indicator */}
        <div
          className="absolute h-12 w-12 rounded-full transition-all duration-300 pointer-events-none"
          style={{
            transform: `translateX(calc(${activeIndex * 100}%)) translateY(-8px)`,
            background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)",
          }}
        />

        {navItems.map((item, index) => {
          const active = activeIndex === index;

          if (item.isFAB) {
            return (
              <Link
                key={index}
                to={item.path}
                onClick={handleClick}
                className="relative -mt-10 flex items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center shadow-xl border-4 border-white relative overflow-hidden animate-bounce">
                  <Icon name={item.icon} className="w-7 h-7 text-white" />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={index}
              to={item.path}
              onClick={handleClick}
              className="relative flex flex-col items-center flex-1 overflow-hidden"
            >
              <div
                className={`relative z-10 transition-all duration-300 ${
                  active ? "translate-y-[-3px] scale-110" : ""
                }`}
              >
                <Icon
                  name={item.icon}
                  className={`w-6 h-6 ${active ? item.color : darkMode ? "text-gray-400" : "text-gray-500"}`}
                />
              </div>
              <span
                className={`relative z-10 text-xs mt-0.5 transition-all duration-300 ${
                  active ? `${item.color} font-semibold` : darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>

              {notifications[item.name] && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>

      <style>
        {`
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 500ms linear;
            background-color: rgba(0,0,0,0.15);
            pointer-events: none;
          }

          @keyframes ripple-effect {
            to {
              transform: scale(3);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MobileBottomNavbar;