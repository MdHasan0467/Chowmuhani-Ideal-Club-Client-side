import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardTopNavbar from "../components/Dashboard/DashboardTopNavbar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-col flex-1 md:ml-64">

        <DashboardTopNavbar setSidebarOpen={setSidebarOpen} />

        <main className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default Dashboard;