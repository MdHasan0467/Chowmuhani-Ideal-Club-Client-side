// Volunteer Call-to-Action Section
import React from "react";

const VolunteerCTA = () => {
  return (
<section className="py-5 px-4 bg-red-500 text-white text-center rounded-xl shadow-lg my-8">
  <h2 className="text-xl md:text-2xl font-bold mb-4">
    স্বেচ্ছাসেবক হিসেবে যুক্ত হোন
  </h2>

  <p className="text-lg md:text-xl mb-6">
    আমাদের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিন এবং রক্তের প্রয়োজন এমন মানুষের কাছে 
    দ্রুত সহায়তা পৌঁছে দিতে আমাদের সাথে কাজ করার জন্য আপনাকে আহ্বান জানাচ্ছি।
  </p>

  <a
    href={"#addMember"}
    className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
  >
    এখনই যোগ দিন
  </a>
</section>
  );
};

export default VolunteerCTA;