import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import WorkDetailsModal from "../RecentWorks/WorkDetailsModal";

const recentWorksData = [
  {
    id: 1,
    title: "রক্তদান ক্যাম্প",
    date: "১২/০৩/২০২৬",
    description: "চৌমুহানী সেন্ট্রাল পার্কে একটি রক্তদান ক্যাম্প আয়োজন করা হয়।",
    link: "#",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s"
    ],
  },
  {
    id: 2,
    title: "ক্লাবের বার্ষিক সভা",
    date: "০৫/০৩/২০২৬",
    description: "সকল সদস্যদের উপস্থিতিতে বার্ষিক সাধারণ সভা অনুষ্ঠিত হয়।",
    link: "#",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s"
    ],
  },
  {
    id: 3,
    title: "বৃক্ষরোপণ কর্মসূচি",
    date: "২০/০২/২০২৬",
    description: "স্থানীয় স্কুলগুলোর সহযোগিতায় ২০০+ গাছ রোপণ করা হয়েছে।",
    link: "#",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
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
        আমাদের সর্বশেষ কাজ
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
                বিস্তারিত দেখুন <FiExternalLink className="ml-2 w-4 h-4" />
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