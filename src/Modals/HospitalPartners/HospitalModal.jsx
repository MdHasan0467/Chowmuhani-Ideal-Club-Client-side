import React from "react";
import { motion, AnimatePresence } from "motion/react";

const HospitalModal = ({ hospital, onClose }) => {

  if (!hospital) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl p-6 max-w-md w-full relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={hospital.logo} alt={hospital.name} className="w-16 h-16 object-contain" />
          </div>

          <h3 className="text-xl font-bold text-center mb-3">{hospital.name}</h3>

          <p className="text-gray-600 text-center mb-4">{hospital.description}</p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>📍 {hospital.location}</p>
            <p>📞 {hospital.phone}</p>
            <p>🩸 {hospital.bloodBank ? "Blood Bank Available" : "No Blood Bank"}</p>
          </div>

          <a
            href={hospital.map}
            target="_blank"
            rel="noreferrer"
            className="block mt-5 text-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            View On Map
          </a>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HospitalModal;