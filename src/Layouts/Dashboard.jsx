import TopLargeNavbar from '../Shared/Navs/Desktop/TopLargeNavbar';
import { Outlet } from "react-router";
import DashboardLeftSideNav from '../Shared/Navs/DashboardNav/DashboardLeftSideNav';
import DashboardNavBar from '../Shared/Navs/DashboardNav/DashboardNavBar';

const Dashboard = () => {
    return (
        <div>
            {/* <TopLargeNavbar /> */}
            {/* <DashboardNavBar /> */}
            <Outlet />

            

            
        </div>
    );
};

export default Dashboard;