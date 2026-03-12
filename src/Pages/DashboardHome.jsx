import { useState } from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardTopNavbar from "../components/Dashboard/DashboardTopNavbar";
import SummaryCards from "../components/Dashboard/SummaryCards";
import RecentActivities from "../components/Dashboard/RecentActivities";
import CardModal from "../Modals/DashboardHome/CardModal";
import { FiUsers, FiUser, FiActivity, FiUserCheck, FiEdit } from "react-icons/fi";
import { AiOutlineFundProjectionScreen, AiOutlineLineChart, AiOutlineDollarCircle, AiOutlineCreditCard } from "react-icons/ai";
import { FaTree, FaHandsHelping, FaWater } from "react-icons/fa";
import { GiSoccerBall, GiCricketBat } from "react-icons/gi";





const DashboardHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const summaryCards = [
    {
      title: "Blood Donors",
      value: 120,
      icon: <FiUsers className="w-6 h-6 text-white" />,
      bg: "bg-red-500",
      detailsTable: [
        { label: "Dhaka", value: 50 },
        { label: "Chittagong", value: 30 },
        { label: "Khulna", value: 20 },
        { label: "Others", value: 20 },
      ],
    },
    {
      title: "Blood Donates (Bags)",
      value: 340,
      icon: <AiOutlineFundProjectionScreen className="w-6 h-6 text-white" />,
      bg: "bg-pink-500",
      detailsTable: [
        { label: "Dhaka", value: 120 },
        { label: "Chittagong", value: 90 },
        { label: "Khulna", value: 70 },
        { label: "Others", value: 60 },
      ],
    },
    {
      title: "Volunteers",
      value: 85,
      icon: <FiUser className="w-6 h-6 text-white" />,
      bg: "bg-blue-500",
      detailsTable: [
        { label: "Active Volunteers", value: 70 },
        { label: "Inactive Volunteers", value: 15 },
      ],
    },
    {
      title: "Events",
      value: 10,
      icon: <FiActivity className="w-6 h-6 text-white" />,
      bg: "bg-purple-500",
      detailsTable: [
        { label: "Blood Donation Camps", value: 4 },
        { label: "Tree Plantation Programs", value: 3 },
        { label: "Sports Events", value: 3 },
      ],
    },
    {
      title: "Users",
      value: 200,
      icon: <FiUserCheck className="w-6 h-6 text-white" />,
      bg: "bg-yellow-500",
      detailsTable: [
        { label: "Donors", value: 120 },
        { label: "Volunteers", value: 85 },
        { label: "General Users", value: 50 },
      ],
    },
    {
      title: "Admin Posts",
      value: 15,
      icon: <FiEdit className="w-6 h-6 text-white" />,
      bg: "bg-indigo-500",
      detailsTable: [
        { label: "News Posts", value: 5 },
        { label: "Event Posts", value: 6 },
        { label: "Reports", value: 4 },
      ],
    },
    {
      title: "Reports",
      value: 25,
      icon: <AiOutlineLineChart className="w-6 h-6 text-white" />,
      bg: "bg-gray-500",
      detailsTable: [
        { label: "Monthly Reports", value: 12 },
        { label: "Quarterly Reports", value: 8 },
        { label: "Annual Reports", value: 5 },
      ],
    },
    {
      title: "Total Play (খেলাধুলা)",
      value: 40,
      icon: <GiSoccerBall className="w-6 h-6 text-white" />,
      bg: "bg-green-500",
      detailsTable: [
        { label: "Cricket", value: 15 },
        { label: "Football", value: 15 },
        { label: "Other Sports", value: 10 },
      ],
    },
    {
      title: "Total Incoming Taka",
      value: "৳12450",
      icon: <AiOutlineDollarCircle className="w-6 h-6 text-white" />,
      bg: "bg-teal-500",
      detailsTable: [
        { label: "Donations", value: "৳8000" },
        { label: "Event Funds", value: "৳4450" },
      ],
    },
    {
      title: "Total Costing Taka",
      value: "৳8450",
      icon: <AiOutlineCreditCard className="w-6 h-6 text-white" />,
      bg: "bg-orange-500",
      detailsTable: [
        { label: "Event Expenses", value: "৳4000" },
        { label: "Operations", value: "৳2450" },
        { label: "Emergency Aid", value: "৳2000" },
      ],
    },
    {
      title: "Total Tree Plantation Program",
      value: 12,
      icon: <FaTree className="w-6 h-6 text-white" />,
      bg: "bg-lime-500",
      detailsTable: [
        { label: "Dhaka", value: 4 },
        { label: "Chittagong", value: 3 },
        { label: "Khulna", value: 3 },
        { label: "Others", value: 2 },
      ],
    },
    {
      title: "Total Tree Plantation",
      value: 1500,
      icon: <FaTree className="w-6 h-6 text-white" />,
      bg: "bg-green-700",
      detailsTable: [
        { label: "Saplings Planted", value: 1200 },
        { label: "Mature Trees", value: 300 },
      ],
    },
    {
      title: "Play Cricket / Football / Others",
      value: 20,
      icon: <GiCricketBat className="w-6 h-6 text-white" />,
      bg: "bg-cyan-500",
      detailsTable: [
        { label: "Cricket Events", value: 8 },
        { label: "Football Events", value: 7 },
        { label: "Other Sports", value: 5 },
      ],
    },
    {
      title: "Helping Poor People",
      value: 30,
      icon: <FaHandsHelping className="w-6 h-6 text-white" />,
      bg: "bg-pink-700",
      detailsTable: [
        { label: "Food Distribution", value: 10 },
        { label: "Clothes Distribution", value: 8 },
        { label: "Education Support", value: 12 },
      ],
    },
    {
      title: "Work in Flood",
      value: 5,
      icon: <FaWater className="w-6 h-6 text-white" />,
      bg: "bg-blue-700",
      detailsTable: [
        { label: "Dhaka Flood", value: 2 },
        { label: "Chittagong Flood", value: 1 },
        { label: "Other Areas", value: 2 },
      ],
    },
  ];
  
  
  const recentActivities = [
    { id: 1, activity: "Blood donation camp in Dhaka", date: "12 Mar 2026", user: "Rahim Ahmed" },
    { id: 2, activity: "Tree plantation drive", date: "10 Mar 2026", user: "Karim Hossain" },
    { id: 3, activity: "Flood relief program", date: "05 Mar 2026", user: "Sadia Akter" },
    { id: 4, activity: "Sports event cricket", date: "01 Mar 2026", user: "Nayeem Ali" },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-auto ml-0 md:ml-64">
        <DashboardTopNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <SummaryCards summaryCards={summaryCards} openModal={openModal} />
        <RecentActivities recentActivities={recentActivities} />
      </div>
      {modalOpen && <CardModal card={selectedCard} onClose={closeModal} />}
    </div>
  );
};

export default DashboardHome;