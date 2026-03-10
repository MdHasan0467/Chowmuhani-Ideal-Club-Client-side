import { Outlet } from "react-router";
// import { useEffect, useState } from "react";
// import GoogleLoginPrompt from "../components/Home/GoogleLoginPrompt";
// import '../CSS/Loader.css';
import TopLargeNavbar from "../Shared/Navs/Desktop/TopLargeNavbar";
import LargeNavbar from "../Shared/Navs/Desktop/LargeNavbar";

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
        <LargeNavbar />
        <Outlet />
    </div>
  );
};

export default Main;
