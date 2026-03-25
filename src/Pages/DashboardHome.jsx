import { useState } from "react";
import SummaryCards from "../components/Dashboard/SummaryCards";
import DashboardAnalytics from "../components/Dashboard/DashboardAnalytics";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline";
import RecentActivities from "../components/Dashboard/RecentActivities";
import CardModal from "../Modals/DashboardHome/CardModal";
import { Helmet } from "react-helmet-async";

const DashboardHome = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const summaryCards = [
    {
      title: "Blood Donors",
      value: 120,
      bg: "bg-red-500",
      detailsTable: [
        { label: "Dhaka", value: 50 },
        { label: "Chittagong", value: 30 },
      ],
    },
    {
      title: "Events",
      value: 10,
      bg: "bg-purple-500",
      detailsTable: [
        { label: "Blood Camp", value: 4 },
        { label: "Sports Event", value: 6 },
      ],
    },
    {
      title: "Finance",
      value: 10,
      bg: "bg-blue-500",
      detailsTable: [
        { label: "Blood Camp", value: 4 },
        { label: "Sports Event", value: 6 },
      ],
    },
    {
      title: "Play game",
      value: 10,
      bg: "bg-blue-500",
      detailsTable: [
        { label: "Blood Camp", value: 4 },
        { label: "Sports Event", value: 6 },
      ],
    },
    {
      title: "Help People",
      value: 10,
      bg: "bg-green-500",
      detailsTable: [
        { label: "Blood Camp", value: 4 },
        { label: "Sports Event", value: 6 },
      ],
    },
  ];

  const recentActivities = [
    { id: 1, activity: "Blood donation camp", date: "12 Mar 2026", user: "Rahim" },
    { id: 2, activity: "Tree plantation", date: "10 Mar 2026", user: "Karim" },
    { id: 3, activity: "Helping People", date: "18 Feb 2026", user: "Iqbal" },
  ];

  return (

    <div className="space-y-6">
            {/* Page title */}
            <Helmet>
              <title>DIC / Dashboard</title>
            </Helmet>

      {/* Charts */}
      <DashboardAnalytics />
      
      {/* Summary Cards */}
      <SummaryCards
        summaryCards={summaryCards}
        openModal={openModal}
      />

      {/* Timeline */}
      <ActivityTimeline
        activities={recentActivities}
      />

      {/* Recent Activities */}
      <RecentActivities
        recentActivities={recentActivities}
      />

      {/* Modal */}
      {modalOpen && (
        <CardModal
          card={selectedCard}
          onClose={closeModal}
        />
      )}

    </div>
  );
};

export default DashboardHome;