import { useState, useEffect } from "react";
import { Link } from "react-router";

const TopLargeNavbar = () => {
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

  return (
    // Navbar container
    // sticky top-0 keeps it on top
    // transition-all for smooth bg & shadow animation
    <div
      className={`navbar px-4 md:px-8 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100 shadow-lg" // scroll করলে slightly darker + shadow
          : "bg-white shadow-md" // default
      }`}
    >
      {/* Logo + Tagline */}
      <div className="flex-1 items-center flex gap-2">

        {/* Mobile Logo + Tagline */}
        <div className="flex flex-col md:hidden">
          <Link
            to="/"
            className="text-xl font-bold cursor-pointer font-serif"
          >
            সি আই সি
          </Link>
          <span className="text-xs">একটি সামাজিক এবং মানবিক সংস্থা</span>
        </div>

        {/* Desktop Logo + Tagline */}
        <div className="hidden md:flex flex-col">
          <Link
            to="/"
            className="text-xl font-bold cursor-pointer font-serif"
          >
            চৌমুহনী আইডিয়াল ক্লাব
          </Link>
          <span className="text-xs text-white/50">একটি সামাজিক এবং মানবিক সংস্থা</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {/* Login Button */}
        <Link
          to="/login"
          className="btn btn-sm hover:scale-110 transition-all duration-300 ease-in-out"
          style={{ backgroundColor: "#2b7fff", color: "white" }}
        >
          লগইন
        </Link>

        {/* Avatar Dropdown Menu */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/dashboard/profile" className="justify-between">
                প্রোফাইল
                <span className="badge">নতুন</span>
              </a>
            </li>
            <li><a href="/dashboard/add/admin/post">পোষ্ট করুন</a></li>
            <li><a>লগ আউট</a></li>
          </ul>
        </div>
      </div>








      

      {/* Mobile Menu */}
      <div className="md:hidden flex gap-6 items-center">
        {/* Login Button */}
        {/* <Link
          to="/login"
          className="btn btn-sm hover:scale-110 transition-all duration-300 ease-in-out"
          style={{ backgroundColor: "#2b7fff", color: "white" }}
        >
          লগইন
        </Link> */}

        {/* Avatar Dropdown Menu */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-linear-to-br from-red-200 to-green-200 rounded-box z-50 mt-3 w-52 p-2 shadow over"
          >
            <li className="border-b">
              <a href="/dashboard/profile" className="justify-between">
                প্রোফাইল
                <span className="badge">user</span>
              </a>
            </li>
            {/* <li className="border-b"><Link to="/events">ইভেন্ট সমূহ</Link></li>
            <li className="border-b"><Link to="/gallery">গ্যালারী</Link></li> */}
            <li className="border-b"><a>লগ আউট</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopLargeNavbar;