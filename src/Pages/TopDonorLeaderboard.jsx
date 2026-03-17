import React, { useState } from "react";
import DonorModal from "../Shared/Modals/DonorModal";

const donors = [
  { id: 1, name: "John Doe", donations: 45, avatar: "https://i.pravatar.cc/150?img=1", details: "Donated 45 times in last 2 years." },
  { id: 2, name: "Jane Smith", donations: 38, avatar: "https://i.pravatar.cc/150?img=2", details: "Active donor in multiple campaigns." },
  { id: 3, name: "Ali Rahman", donations: 32, avatar: "https://i.pravatar.cc/150?img=3", details: "Special donor for emergency drives." },
  { id: 4, name: "Fatima Noor", donations: 28, avatar: "https://i.pravatar.cc/150?img=4", details: "Participated in 15+ events." },
  { id: 5, name: "Rashed Khan", donations: 25, avatar: "https://i.pravatar.cc/150?img=5", details: "Regular donor every month." },
];

// Top 3 highlight colors
const rankColors = ["bg-yellow-400", "bg-gray-400", "bg-orange-500"];

// Compute total donations
const totalDonations = donors.reduce((acc, d) => acc + d.donations, 0);

const TopDonorLeaderboard = () => {
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDonor(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white text-center py-4 font-bold text-lg tracking-wide">
          Top Donors Leaderboard
        </div>

        <ul className="overflow-y-auto max-h-[440px]">
          {donors.map((donor, index) => {
            const contributionPercent = Math.round((donor.donations / totalDonations) * 100);

            return (
              <li
                key={donor.id}
                onClick={() => openModal(donor)}
                className="flex flex-col cursor-pointer px-4 py-3 border-b hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`font-bold w-7 h-7 flex items-center justify-center rounded-full text-white ${
                        rankColors[index] || "bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <img
                      src={donor.avatar || "https://via.placeholder.com/40"}
                      alt={donor.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <span className="font-medium text-gray-800">{donor.name}</span>
                  </div>
                  <span className="text-gray-600 font-semibold">{donor.donations}</span>
                </div>

                {/* Contribution Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${contributionPercent}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Modal */}
      <DonorModal donor={selectedDonor} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TopDonorLeaderboard;