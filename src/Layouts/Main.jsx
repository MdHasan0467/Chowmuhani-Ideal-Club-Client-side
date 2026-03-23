import { Outlet } from "react-router";
// import { useEffect, useState } from "react";
// import GoogleLoginPrompt from "../components/Home/GoogleLoginPrompt";
// import '../CSS/Loader.css';
import TopLargeNavbar from "../Shared/Navs/Desktop/TopLargeNavbar";
import LargeNavbar from "../Shared/Navs/Desktop/LargeNavbar";
import MobileNavbar from "../Shared/Navs/Mobile/MobileNavbar";
import MobileBottomNavbar from "../Shared/Navs/Mobile/MobileBottomNavbar";

const Main = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating page loading
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 500);
//   }, []);


  return (
    <div className="">
        <TopLargeNavbar />

        {/* Large Device */}
        <div className="hidden md:flex">
          <LargeNavbar />
        </div>

        {/* Mobile Device */}
        <div className="flex md:hidden">
          <MobileNavbar />
        </div>
        
        <Outlet />
        <div className="pb-20">
          <MobileBottomNavbar />
        </div>
    </div>
  );
};

export default Main;
