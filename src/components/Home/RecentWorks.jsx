import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import WorkDetailsModal from "../RecentWorks/WorkDetailsModal";

const recentWorksData = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "12/03/2026",
    description: "Organized a blood donation camp at Chowmuhani central park.",
    link: "#",
    images: [
      "https://images.news18.com/ibnlive/uploads/2025/09/1758867219_Blood-Donation-6-2025-09-69f32f11f50b9c0fd7a680e38a8f2bb0-16x9.jpg",
      "https://img.freepik.com/free-vector/human-blood-donate-white-background_1308-111266.jpg?semt=ais_rp_progressive&w=740&q=80",
      "https://www.shutterstock.com/image-vector/set-illustration-blood-donation-equipment-260nw-2551001649.jpg"
    ],
  },
  {
    id: 2,
    title: "Club Annual Meeting",
    date: "05/03/2026",
    description: "Held the annual general meeting with all members present.",
    link: "#",
    images: [
      "https://www.clubjournal.co.uk/uploads/News/CIU%20AGM%202024_DSC0759_1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-ez-u7I1L2oE5nM7OQXQZ09A8tP6u1hxQA&s",
      "https://thebuddypost.hkbu.edu.hk/web/dec16/images/inner-treasures3a.png"
    ],
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    date: "20/02/2026",
    description: "Planted 200+ trees in collaboration with local schools.",
    link: "#",
    images: [
      "https://i.brecorder.com/primary/2024/08/66bec6af2ea90.jpg", // tree planting
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80", // saplings
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80", // volunteers planting
    ],
  },
];

const RecentWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Recent Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorksData.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-1 p-3 bg-gray-50">
              {work.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`work-${idx}`}
                  className="w-full h-24 sm:h-28 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                  {work.title}
                </h3>
                <span className="text-sm text-gray-500">{work.date}</span>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {work.description}
                </p>
              </div>

              <button
                onClick={() => openModal(work)}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-xl hover:bg-blue-600 transition-colors"
              >
                View Details <FiExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <WorkDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        work={selectedWork}
      />
    </div>
  );
};

export default RecentWorks;