import { Link } from "react-router";


const MobileNavbar = () => {
    return (
        <div>
              {/* Mobile Menu */}
        <div className="flex mx-auto md:hidden mt-2">
        <Link to="income/and/cost/share/publicly" className="btn btn-ghost btn-sm">টাকার হিসেব</Link>
        <Link to="/find-blood" className="btn btn-ghost btn-sm text-red-500">রক্ত খুজুন</Link>
        <Link to="/about" className="btn btn-ghost btn-sm">আমাদের সম্পর্কে</Link>
         <Link 
          to="/dashboard/profile" 
          className="btn btn-sm bg-blue-500 hover:bg-blue-800 hover:scale-90 transition-all duration-300 ease-in-out" 
          style={{ color: "white" }}
        >
          ড্যাশবোর্ড
        </Link>
      </div>
        </div>
    );
};

export default MobileNavbar;