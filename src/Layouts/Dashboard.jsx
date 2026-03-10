import TopLargeNavbar from '../Shared/Navs/Desktop/TopLargeNavbar';
import LargeNavbar from '../Shared/Navs/Desktop/LargeNavbar';
import { Outlet } from "react-router";
import DashboardLeftSideNav from '../Shared/Navs/DashboardNav/DashboardLeftSideNav';

const Dashboard = () => {
    return (
        <div>
            <TopLargeNavbar />
            <LargeNavbar />

            <div className='grid grid-cols-12 gap-4 h-screen'>
                <div className='col-span-3 border border-black'>
                    <DashboardLeftSideNav />
                </div>
                <Outlet />
            </div>

            
        </div>
    );
};

export default Dashboard;