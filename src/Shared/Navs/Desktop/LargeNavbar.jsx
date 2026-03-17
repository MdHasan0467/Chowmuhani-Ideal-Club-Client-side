import { Link } from "react-router";


const LargeNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8 ">
      
      {/* Logo */}
      {/* <div className="flex-1"> */}
        {/* <Link className="text-xl font-bold text-primary cursor-pointer flex md:hidden">
          CIC
        </Link> */}
        {/* <Link className="text-xl font-bold text-primary cursor-pointer ">Chowmuhani Ideal Club</Link> */}
      {/* </div> */}

    
     {/* Desktop Menu */}
      <div className="hidden md:flex md:mx-auto gap-6">
        <Link to="/" className="btn btn-ghost btn-sm">হোম</Link>
        <Link to="income/and/cost/share/publicly" className="btn btn-ghost btn-sm">টাকার হিসেব</Link>
        <Link to="hospital/partners" className="btn btn-ghost btn-sm">হসপিটাল</Link>
        <Link to="/events" className="btn btn-ghost btn-sm">ইভেন্ট সমূহ</Link>
        <Link to="/gallery" className="btn btn-ghost btn-sm">গ্যালারী</Link>
        <Link to="/find-blood" className="btn btn-ghost btn-sm text-red-500">রক্ত অনুসন্ধান করুন</Link>
        <Link to="/add-new-member"className="btn btn-sm" style={{ backgroundColor: "#2b7fff", color: "white" }}>
          নতুন সদস্য হোন
        </Link>
        <Link to="/about" className="btn btn-ghost btn-sm">আমাদের সম্পর্কে জানুন</Link>

      </div>




      {/* Mobile Hamburger */}
      {/* <div className="dropdown dropdown-end md:hidden">

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
          <li>
            <Link to="income/and/cost/share/publicly" className="btn btn-ghost btn-sm">টাকার হিসেব</Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-ghost btn-sm">আমাদের সম্পর্কে জানুন</Link>
          </li>
          <li>
             <Link to="/events" className="btn btn-ghost btn-sm">ইভেন্ট সমূহ</Link>
          </li>
          <li>
            <Link to="/gallery" className="btn btn-ghost btn-sm">গ্যালারী</Link>
          </li>
        <li>
          <Link to="/find-blood" className="btn btn-ghost btn-sm">রক্ত অনুসন্ধান করুন</Link>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div> */}
    </div>
  );
};

export default LargeNavbar;