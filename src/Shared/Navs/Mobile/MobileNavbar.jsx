import { Link } from "react-router";


const MobileNavbar = () => {
    return (
        <div>
              {/* Mobile Menu */}
        <div className="flex mx-auto gap-1 md:hidden">
        <Link to="/events" className="btn btn-ghost btn-sm">ইভেন্ট সমূহ</Link>
        <Link to="/gallery" className="btn btn-ghost btn-sm">গ্যালারী</Link>
        <Link to="/find-blood" className="btn btn-ghost btn-sm text-red-500">রক্ত খুজুন</Link>
        <Link 
          to="/login" 
          className="btn btn-sm" 
          style={{ backgroundColor: "#ac6735", color: "white" }}
        >
          লগইন
        </Link>
      </div>
        </div>
    );
};

export default MobileNavbar;