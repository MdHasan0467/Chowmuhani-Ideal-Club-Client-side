import { FiMenu, FiBell } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";

const DashboardTopNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between bg-orange-500 text-white p-4 shadow-md">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden mr-4 text-gray-700"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl hidden md:flex font-semibold">
          CIC Dashboard Panel
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        {/*  */}
         <div className="flex gap-2">
          {/* Search Box */}
            <input type="text" placeholder="Search" className="input input-bordered text-orange-500 w-24 md:w-auto" />
            {/* dropdown from avatar */}
            <div className="dropdown dropdown-end">
              {/* avatar */}
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              {/* dropdown Lists */}
              <ul
                tabIndex="-1"
                className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
         </div>

          {/* <div className="w-8 h-8 rounded-full bg-gray-300"></div> */}
        <div className="flex items-center space-x-2 group">
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 shadow-sm">
    <MdAdminPanelSettings className="w-6 h-6" />
  </div>
  <span className="font-medium text-white">Admin</span>
</div>
      </div>
    </div>
  );
};

export default DashboardTopNavbar;