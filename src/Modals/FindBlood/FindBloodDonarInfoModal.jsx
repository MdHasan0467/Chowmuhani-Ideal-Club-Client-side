import React from 'react';

const FindBloodDonarInfoModal = ({ donor, closeModal }) => {
     if (!donor) return null;
    return (
        <div>
         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-xl w-[420px] relative">

        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-xl"
        >
          ✕
        </button>

        {/* MODAL TITLE */}
        <h2 className="text-lg font-bold text-red-600 text-center mb-3">
          তুচ্ছ নয় রক্ত দান বাঁচাতে পারে একটি প্রাণ
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          আজ নিজের প্রয়োজনে যেমন অন্যকে খুজতেছেন। ঠিক তেমনি অন্যের প্রয়োজনেও
          আপনাকে যেনো খুজলে পাওয়া যায়।
        </p>

        <div className="text-center">
          <img
            src={donor.image}
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h3 className="font-bold text-xl mt-3">{donor.name}</h3>

          <p className="text-gray-500">📍 {donor.district}</p>

          <p className="text-red-500 font-semibold text-lg">
            🩸 {donor.blood}
          </p>
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <p><b>Last Donate:</b> {donor.lastDonate}</p>
          <p><b>Total Donate:</b> {donor.totalDonate} bags</p>
          <p><b>Mobile:</b> {donor.mobile}</p>
          <p><b>Email:</b> {donor.email}</p>
        </div>

      </div>
    </div>
        </div>
    );
};

export default FindBloodDonarInfoModal;