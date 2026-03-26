import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// 👉 Custom SVG icon handler (তোমার নিজের component)
import Icon from "../../../IconSVG/Icon";

// 👉 Icons
import { FiHome, FiUser } from "react-icons/fi";
import { FaHandHoldingWater, FaImages } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import {
  BsCalendarEventFill,
  BsFillInfoCircleFill,
  BsFillPersonPlusFill,
  BsSearchHeart,
  BsUbuntu,
} from "react-icons/bs";
import { MdLocalHospital } from "react-icons/md";

const MobileNavbar = () => {
  // 👉 Sidebar open/close করার state
  const [isOpen, setIsOpen] = useState(false);

  // 👉 Scroll detect করার state (header style change করার জন্য)
  const [scrolled, setScrolled] = useState(false);

  // 👉 Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // যদি 10px এর বেশি scroll হয় → true
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // 👉 cleanup (memory leak avoid করার জন্য)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================================================
  // 💧 Ripple Effect Function (button click এ animation)
  // =========================================================
  const createRipple = (e) => {
    const button = e.currentTarget;

    // নতুন span তৈরি (ripple circle)
    const circle = document.createElement("span");

    // button এর size অনুযায়ী circle size
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // circle position সেট করা (click position অনুযায়ী)
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

    // CSS class add
    circle.classList.add("ripple");

    // আগের ripple থাকলে remove
    const oldRipple = button.getElementsByClassName("ripple")[0];
    if (oldRipple) oldRipple.remove();

    // button এর ভিতরে add করা
    button.appendChild(circle);
  };

  // =========================================================
  // 📌 Sidebar Menu Items
  // =========================================================
  const menuItems = [
    { title: "হোম", path: "/", icon: <FiHome /> },
    // { title: "প্রোফাইল", path: "/dashboard/profile", icon: <FiUser /> },
    { title: "সদস্য হিসেবে যুক্ত হোন", path: "/add/new/member", icon: <BsFillPersonPlusFill /> },
    { title: "জরুরী রক্তের অনুরোধ", path: "/emergency/blood/Request", icon: <GiWaterDrop /> },
    { title: "দান করুন", path: "/donation/support", icon: <FaHandHoldingWater /> },
    { title: "রক্ত খুজুন", path: "/find-blood", icon: <BsSearchHeart /> },
    { title: "সেচ্ছাসেবীগণ", path: "/blood/volunteers", icon: <BsUbuntu /> },
    { title: "হসপিটাল সেবা", path: "hospital/partners", icon: <MdLocalHospital /> },
    { title: "ছবি সমূহ", path: "/gallery", icon: <FaImages /> },
    { title: "ইভেন্ট সমূহ", path: "/events", icon: <BsCalendarEventFill /> },
    { title: "আমাদের সম্পর্কে", path: "/about", icon: <BsFillInfoCircleFill /> },
  ];



    // 👉 Header এর উপরের shortcut button গুলো
  const buttonItems = [
    {
      name: "রক্ত দাতা হতে",
      path: "/become/a/blood/donor",
      icon: "bloodDonor",
      bgColor: "bg-red-500",
      color: "red-500",
    },
    {
      name: "আমাদের সম্পর্কে",
      path: "/about",
      icon: "about",
      bgColor: "bg-green-500",
      color: "green-500",
    },
  ];


  return (
    <div className="md:hidden">
      {/* =========================================================
          🧭 HEADER (Top Navbar)
      ========================================================= */}
      <div className="fixed top-16 left-0 w-full z-40">
        <div
          className={`flex items-center gap-2 px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-white/30 backdrop-blur-lg shadow-xl border border-white/20" // 👉 glass effect
              : "bg-white shadow-md"
          }`}
        >
          {/* ================= HAMBURGER BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)} // 👉 click করলে sidebar toggle
            className="p-2 rounded-md bg-white/50 backdrop-blur-md"
          >
            <div className="space-y-1">
              {/* Top Line */}
              <span
                className={`block w-6 h-0.5 bg-red-500 transition ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />

              {/* Middle Line */}
              <span
                className={`block w-5 h-0.5 bg-black ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              {/* Bottom Line */}
              <span
                className={`block w-6 h-0.5 bg-red-500 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>

          {/* ================= TOP BUTTONS ================= */}
         
          {/* 👉 Top shortcut buttons */}
          <div className="flex flex-1 gap-2">
            {buttonItems.map((item, idx) => (
              <button
                key={idx}
                className="flex-1 flex items-center justify-between px-3 py-3 text-[13px] font-semibold rounded-md shadow-sm active:scale-95"
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // click করলে sidebar বন্ধ
                  className="flex items-center gap-2"
                >
                  <Icon
                    name={item.icon}
                    className={`w-5 h-5 text-${item.color}`}
                  />
                  {item.name}
                </Link>

                {/* Right side color box */}
                <div className={`p-2 rounded-lg ${item.bgColor}`}></div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================================
          🌑 OVERLAY (Sidebar open হলে background dark)
      ========================================================= */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // 👉 বাইরে click করলে close
      />

      {/* =========================================================
          📂 SIDEBAR
      ========================================================= */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 👉 Glass background */}
        <div className="h-full bg-white/30 backdrop-blur-xl border-r border-white/20 p-6 flex flex-col">
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-red-500 text-xl"
          >
            ✕
          </button>

          {/* ================= LOGO ================= */}
          <div className="text-center mb-6">
            <h1 className="text-lg font-bold text-blue-700">
              দুর্গাপুর আইডিয়াল ক্লাব
            </h1>
            <p className="text-xs text-pink-500">
              দুর্গাপুর ইউনিয়ন ব্লাড ফাউন্ডেশন
            </p>
          </div>

          {/* ================= MENU ================= */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <div
                    onClick={createRipple} // 👉 ripple effect
                    className={`relative overflow-hidden flex items-center justify-between p-3 mt-3 rounded-b-xl text-xs transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg scale-105 border-b border-b-white"
                        : "text-gray-700 hover:bg-white/40 hover:scale-105"
                    }`}
                  >
                    {/* 👉 Left Side (icon + text) */}
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>

                    {/* 👉 Active item এ glow dot */}
                    {isActive && (
                      <span className="relative flex items-center justify-center">
                        {/* glow animation */}
                        <span className="absolute w-6 h-6 bg-white opacity-30 rounded-full animate-ping"></span>

                        {/* main dot */}
                        <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* =========================================================
          💧 Ripple CSS Animation
      ========================================================= */}
      <style>
        {`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms linear;
          background-color: rgba(255, 255, 255, 0.7);
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}
      </style>
    </div>
  );
};

export default MobileNavbar;