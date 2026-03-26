import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import HospitalModal from "../Modals/HospitalPartners/HospitalModal";
// import HospitalModal from "../Modals/HospitalPartners/HospitalModal";

const hospitals = [
  {
    id: 1,
    name: "Noakhali Medical College Hospital",
    location: "Maijdee, Noakhali",
    phone: "+8801712345678",
    bloodBank: true,
    map: "https://maps.google.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
    description: "রক্তদান এবং গ্রহণে সর্বোচ্চ সহযোগিতা করা, প্রত্যেক ক্লাব সদস্যের জন্য হসপিটাল বিল সহজতর করা, ডাক্তারি সেবা সহজতর করা সহ বিভিন্ন সামাজিক কাজে অংশগ্রহণ করার বিষয়ে আমরা (উক্ত হসপিটাল কর্তৃপক্ষ)) দুর্গাপুর আইডিয়াল ক্লাবের সাথে অঙ্গিকার বদ্ধ",
  },
  {
    id: 2,
    name: "Islami Bank Hospital",
    location: "Dhaka",
    phone: "+8801812345678",
    bloodBank: false,
    map: "https://maps.google.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
    description: "রক্তদান এবং গ্রহণে সর্বোচ্চ সহযোগিতা করা, প্রত্যেক ক্লাব সদস্যের জন্য হসপিটাল বিল সহজতর করা, ডাক্তারি সেবা সহজতর করা সহ বিভিন্ন সামাজিক কাজে অংশগ্রহণ করার বিষয়ে আমরা (উক্ত হসপিটাল কর্তৃপক্ষ)) দুর্গাপুর আইডিয়াল ক্লাবের সাথে অঙ্গিকার বদ্ধ",
  },
  {
    id: 3,
    name: "Labaid Hospital",
    location: "Dhanmondi, Dhaka",
    phone: "+8801912345678",
    bloodBank: true,
    map: "https://maps.google.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
    description: "রক্তদান এবং গ্রহণে সর্বোচ্চ সহযোগিতা করা, প্রত্যেক ক্লাব সদস্যের জন্য হসপিটাল বিল সহজতর করা, ডাক্তারি সেবা সহজতর করা সহ বিভিন্ন সামাজিক কাজে অংশগ্রহণ করার বিষয়ে আমরা (উক্ত হসপিটাল কর্তৃপক্ষ)) দুর্গাপুর আইডিয়াল ক্লাবের সাথে অঙ্গিকার বদ্ধ",
  },
];

const HospitalPartners = () => {

  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    <section className="py-14 md:py-16 bg-gray-50 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Hospital Partners
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
            জরুরি রক্ত সহায়তার জন্য আমরা বিভিন্ন হাসপাতালের সাথে কাজ করি।
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {hospitals.map((hospital) => (

            <div
              key={hospital.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 md:p-6"
            >

              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={hospital.logo}
                  alt={hospital.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-base md:text-lg font-semibold text-center mb-3">
                {hospital.name}
              </h3>

              {/* Location */}
              <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FaMapMarkerAlt className="text-red-500" />
                {hospital.location}
              </p>

              {/* Phone */}
              <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FaPhoneAlt className="text-green-500" />
                {hospital.phone}
              </p>

              {/* Blood Bank */}
              <p className="flex items-center gap-2 text-sm mb-4">
                <MdBloodtype className="text-red-500" />
                {hospital.bloodBank
                  ? "Blood Bank Available"
                  : "No Blood Bank"}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelectedHospital(hospital)}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Details
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Modal */}
      <HospitalModal
        hospital={selectedHospital}
        onClose={() => setSelectedHospital(null)}
      />

    </section>
  );
};

export default HospitalPartners;