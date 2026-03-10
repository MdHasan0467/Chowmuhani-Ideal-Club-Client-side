import { Link } from "react-router";


const TopLargeNavbar = () => {
  return (
    <div className="navbar bg-orange-500 shadow-md px-4 md:px-8">
      
      {/* Logo */}
      <div className="flex-1">
        <Link to={'/'} 
        className="text-xl font-bold text-white cursor-pointer font-serif hover:text-amber-50 flex md:hidden">
          CIC
        </Link>
        <Link to={'/'} 
        className="hidden md:flex text-xl font-bold text-white cursor-pointer font-serif hover:text-amber-50">
        Chowmuhani Ideal Club (CIC)
        </Link>
      </div>

    
     {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link 
          to="/login" 
          className="btn btn-sm" 
          style={{ backgroundColor: "#ac6735", color: "white" }}
        >
          Login
        </Link>

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
          <a href="/dashboard" className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href="/dashboard/add/admin/post">Admin Posts</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="dropdown dropdown-end md:hidden">

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
        <li>
          <a href="/dashboard" className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li></li>
        <li><a href="/dashboard/add/admin/post">Admin Posts</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default TopLargeNavbar;