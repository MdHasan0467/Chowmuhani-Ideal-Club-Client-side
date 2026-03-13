import { Link } from "react-router";


const TopLargeNavbar = () => {
  return (
    <div className="navbar bg-blue-500 shadow-md px-4 md:px-8">
      
      {/* Logo */}
      <div className="flex-1">
        <Link to={'/'} 
        className="text-xl font-bold text-white cursor-pointer font-serif hover:text-amber-50 flex md:hidden">
          সি আই সি
        </Link>
        <Link to={'/'} 
        className="hidden md:flex text-xl font-bold text-white cursor-pointer font-serif hover:text-amber-50">
        চৌমুহনী আইডিয়াল ক্লাব
        </Link>
      </div>

    
     {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link 
          to="/login" 
          className="btn btn-sm hover:scale-110 transition-all duration-300 ease-in-out" 
          style={{ backgroundColor: "#2b7fff", color: "white" }}
        >
          লগইন
        </Link>

        {/* Avatar Menu */}
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden flex gap-6">
        <Link 
          to="/login" 
          className="btn btn-sm hover:scale-110 transition-all duration-300 ease-in-out" 
          style={{ backgroundColor: "#2b7fff", color: "white" }}
        >
          লগইন
        </Link>

        {/* Avatar Menu */}
        <div className="dropdown dropdown-end md:hidden text-blue-500">

        <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className="border-b">
          <a href="/dashboard/profile" className="justify-between">
            প্রোফাইল
            <span className="badge">নতুন</span>
          </a>
        </li>
          <li className="border-b"><Link to="/events">ইভেন্ট সমূহ</Link></li>
          <li className="border-b"><Link to="/gallery">গ্যালারী</Link></li>
          <li></li>
        <li className="border-b"><a>লগ আউট</a></li>
      </ul>
    </div>
      </div>
      </div>

      
    </div>
  );
};

export default TopLargeNavbar;