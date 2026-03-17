import React, { useEffect, useState } from "react";

const DonorModal = ({ donor, isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setShow(false), 200);
    }
  }, [isOpen]);

  if (!show) return null;

  const safeDonor = donor || {
    name: "Loading...",
    avatar: "https://via.placeholder.com/150",
    donations: 0,
    details: "Fetching donor details..."
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-6 transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 font-bold text-xl transition-transform transform hover:scale-110"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center mb-4">
          <img
            src={safeDonor.avatar}
            alt={safeDonor.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-gradient-to-r from-red-400 to-yellow-400 mb-3"
          />
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">{safeDonor.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
            Total Donations: {safeDonor.donations}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{safeDonor.details}</p>

          <div className="flex space-x-3 mb-4">
            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-red-200 transition-colors">
              Active Donor
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-yellow-200 transition-colors">
              Verified
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-red-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${Math.round((safeDonor.donations / 168) * 100)}%`, // 168 is total of sample donations
              }}
            ></div>
          </div>
          <p className="text-gray-500 text-xs">Contribution % of total donations</p>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors">
            Send Appreciation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorModal;