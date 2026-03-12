import TopLargeNavbar from '../Shared/Navs/Desktop/TopLargeNavbar';
import { Outlet } from "react-router";
import DashboardLeftSideNav from '../Shared/Navs/DashboardNav/DashboardLeftSideNav';
import DashboardNavBar from '../Shared/Navs/DashboardNav/DashboardNavBar';

const Dashboard = () => {
    return (
        <div>
            <TopLargeNavbar />
            <DashboardNavBar />

            <div className="md:grid md:grid-cols-12">
    
              <div className="hidden md:flex m-5 col-span-3 min-h-screen border">
                <DashboardLeftSideNav />
              </div>
    
    
              <div className="col-span-9 m-5 ml-0 min-h-screen border">
                    <div>
                    {/* <GoogleLoginPrompt /> */}
                    <Outlet />
                    </div>
              </div>
    
            </div>

            
        </div>
    );
};

export default Dashboard;