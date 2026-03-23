import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../IconSVG/Icon";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    // scrollState ট্র্যাক করার জন্য
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        // scrollY > 10 হলে scrolled=true
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // cleanup
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

      const navItems = [
    { name: "রক্ত দাতা হতে", path: "/", icon: "home", color: "text-blue-600", exact: true },
    { name: "অনুরোধ", path: "/emergency/blood/Request", icon: "bloodRequest", color: "text-red-500" },
  ];

  // 🔹 Buttons Config
const buttonItems = [
  {name: "রক্ত দাতা হতে", path: "/become/a/blood/donor", icon: "bloodDonor", bgColor: "bg-red-500", color: "red-500",},
  {name: "আমাদের সম্পর্কে", path: "/about", icon: "about", bgColor: "bg-green-500", color: "green-500",},
];

  return (
    <div className="md:hidden">
{/* Hamburger Button secton*/}
<div className="fixed top-16 left-0 w-full z-40">
  <div
    className={`flex items-center gap-2 px-2 py-2 transition-all duration-300 ${
      scrolled
        ? "bg-gray-100 shadow-lg border-t border-white/10"
        : "bg-white shadow-md"
    }`}
  >
    {/* Hamburger */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-md transition-all bg-white duration-300 shrink-0"
    >
      <div className="space-y-1">
        <span
          className={`block w-6 h-0.5 bg-red-500 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-red-500 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
    </button>

    {/* Buttons */}
    <div className="flex flex-1 gap-2">
      {buttonItems?.map((item, idx) => (
        <button
          key={idx}
          className="btn flex-1 flex items-center justify-around px-3 py-3 text-[13px] font-semibold rounded-md 
          shadow-sm transition-all duration-300 active:scale-95 text-center"
        >
          <Link to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-2">

            {/* SVG Icon */}
            <Icon name={item.icon} className={`w-5 h-5 text-${item.color}`} />

            {/* Button Text */}
            {item.name}
          </Link>

          {/* Colored circle (like your original UI) */}
          <div className={`p-2 rounded-lg ${item.bgColor}`}></div>
        </button>
      ))}
    </div>

  </div>
</div>




      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white z-50 transform transition-transform 
          duration-300 flex flex-col p-6 space-y-4 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* <div className="border-b"> */}
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="self-end p-3 border-b border-l rounded-md text-red-500 hover:bg-red-200 transition active:bg-red-200 focus:outline-none"
        >
          ✕
        </button>
        {/* </div> */}

        {/* Logo + Tagline */}
        <div className="flex flex-col md:hidden border-b -mt-10">
          <Link
            to="/"
            className="font-semibold text-lg font-serif text-blue-700 text-center"
          >
            <span className="block">চৌমুহনী</span>
            <span className="block">আইডিয়াল ক্লাব</span>
          </Link>
          {/* <span className="text-xs mt-2">একটি সামাজিক এবং মানবিক সংস্থা</span> */}
        </div>

        {/* Links */}
        <Link
          to="/"
          className="btn btn-ghost btn-sm w-full"
          onClick={() => setIsOpen(false)}
        >
          হোম
        </Link>
        <Link
          to="add/new/member"
          className="btn btn-ghost btn-sm text-green-500 w-full"
          onClick={() => setIsOpen(false)}
        >
          সদস্য হিসেবে যুক্ত হোন
        </Link>
        <Link
          to="donation/support"
          className="btn btn-ghost btn-sm text-blue-500 w-full"
          onClick={() => setIsOpen(false)}
        >
        টাকা দান করুন
        </Link>
        <Link
          to="emergency/blood/Request"
          className="btn btn-ghost btn-sm text-red-500 w-full"
          onClick={() => setIsOpen(false)}
        >
        জরুরী রক্তের অনুরোধ
        </Link>
        {/* শুধুমাত্র Moderatior এই রক্ত খোজার অপশন দেখতে পাবে */}
          <Link
          to="find-blood"
          className="btn btn-ghost btn-sm text-red-500 w-full"
          onClick={() => setIsOpen(false)}
        >
          রক্ত খুজুন
        </Link>
          <Link
          to="blood/volunteers"
          className="btn btn-ghost btn-sm text-red-500 w-full"
          onClick={() => setIsOpen(false)}
        >
          সেচ্ছাসেবীগণ
        </Link>
        <Link
          to="user/advice/for/next/plan"
          className="btn btn-ghost btn-sm w-full"
          onClick={() => setIsOpen(false)}
        >
        পরিকল্পনা শেয়ার করুন
        </Link>
        <Link
          to="gallery"
          className="btn btn-ghost btn-sm w-full"
          onClick={() => setIsOpen(false)}
        >
        ছবি সমূহ
        </Link>
        <Link
          to="events"
          className="btn btn-ghost btn-sm w-full"
          onClick={() => setIsOpen(false)}
        >
        ইভেন্ট সমূহ
        </Link>

        <Link
          to="/about"
          className="btn btn-ghost btn-sm w-full"
          onClick={() => setIsOpen(false)}
        >
          আমাদের সম্পর্কে জানুন
        </Link>
        <Link
          to="/dashboard/profile"
          className="btn btn-sm bg-blue-500 hover:bg-blue-800 hover:scale-90 transition-all duration-300 ease-in-out w-full"
          style={{ color: "white" }}
          onClick={() => setIsOpen(false)}
        >
          ড্যাশবোর্ড
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;