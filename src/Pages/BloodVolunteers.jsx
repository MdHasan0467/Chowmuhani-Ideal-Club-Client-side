// BloodVolunteers.jsx
import React, { useState } from "react";
import WhatsappIcon from "../IconSVG/whatsappIcon.svg"

// ডামি ভলান্টিয়ার ডেটা
const volunteersData = [
  {
    id: 1,
    name: "মোঃ হাসান",
    position: "Team Lead",
    email: "hasan@example.com",
    phone: "+8801712345678",
    whatsapp: "+8801712345678",
    details: "রক্ত সংগ্রহ ও ডোনেশন ক্যাম্প পরিচালনা করেন।",
    avatar: "https://i.pravatar.cc/150?img=32",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    name: "সেলিনা জাহান",
    position: "Volunteer",
    email: "selina@example.com",
    phone: "+8801912345678",
    whatsapp: "",
    details: "রক্ত ডোনার রেজিস্ট্রি এবং যোগাযোগের দায়িত্বে।",
    avatar: "https://i.pravatar.cc/150?img=47",
    badgeColor: "bg-blue-500",
  },
];

const BloodVolunteers = () => {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  // Modal বন্ধ করার ফাংশন
  const closeModal = () => setSelectedVolunteer(null);

  // কপি ফাংশন
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("কপি করা হয়েছে: " + text);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        সকল Blood Volunteers (ফুল টীম সদস্যগণ)
      </h1>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteersData?.map((volunteer) => (
          <div
            key={volunteer.id}
            className="border rounded-lg shadow hover:shadow-2xl transition transform hover:scale-105 p-4 flex flex-col items-center bg-white"
          >
            <img
              src={volunteer?.avatar}
              alt={volunteer?.name}
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            <h2 className="font-semibold text-lg">{volunteer?.name}</h2>
            <span
              className={`text-white px-3 py-1 rounded-full text-sm mt-1 ${volunteer?.badgeColor}`}
            >
              {volunteer?.position}
            </span>
            <button
              onClick={() => setSelectedVolunteer(volunteer)}
              className="mt-4 text-blue-500 hover:underline font-medium cursor-pointer"
            >
              বিস্তারিত
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVolunteer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Backdrop click closes modal
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-md relative transform transition-transform duration-300 slide-in"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedVolunteer?.avatar}
                alt={selectedVolunteer?.name}
                className="w-24 h-24 rounded-full mb-3 object-cover"
              />
              <h2 className="font-bold text-xl mb-1">{selectedVolunteer?.name}</h2>
              <span
                className={`text-white px-3 py-1 rounded-full text-sm mb-2 ${selectedVolunteer?.badgeColor}`}
              >
                {selectedVolunteer?.position}
              </span>
              <p className="text-gray-700 mb-3 text-center">{selectedVolunteer?.details}</p>

              <div className="flex flex-col gap-2 w-full">
                {/* Email */}
                <div className="flex items-center justify-between">
                  <span>Email: {selectedVolunteer?.email}</span>
                  <button
                    onClick={() => copyToClipboard(selectedVolunteer?.email)}
                    className="text-blue-500 hover:underline text-sm cursor-pointer"
                  >
                    কপি
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center justify-between">
                  <span>Phone: {selectedVolunteer?.phone}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(selectedVolunteer?.phone)}
                      className="text-blue-500 hover:underline text-sm cursor-pointer"
                    >
                      কপি
                    </button>

                    {selectedVolunteer.whatsapp && (
                      <a
                        href={`https://wa.me/${selectedVolunteer.whatsapp.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:scale-110 transition cursor-pointer"
                        title="WhatsApp এ নক দিন"
                      >
                        {/* Logo */}
                        <img src={WhatsappIcon} alt="whatsapp logo" className="h-10 mx-auto mb-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind slide-in animation */}
      <style>
        {`
          .slide-in {
            transform: translateY(-20px);
            opacity: 0;
            animation: slideIn 0.3s forwards;
          }
          @keyframes slideIn {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BloodVolunteers;