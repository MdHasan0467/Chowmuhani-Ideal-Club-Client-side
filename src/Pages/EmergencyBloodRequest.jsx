import React, { useState } from "react";
import { FaTint, FaHospital, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdFamilyRestroom, MdAccessTime } from "react-icons/md";
import BloodRequestCTA from "../components/EmergencyBloodRequest/BloodRequestCTA";

const EmergencyBloodRequest = () => {
  // ফর্ম ডাটা হোল্ড করার জন্য স্টেট
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    bloodGroup: "",
    hemoglobin: "",
    hospitalName: "",
    hospitalLocation: "",
    bags: "",
    requiredDate: "",
    requiredTime: "",
    guardianName: "",
    guardianNumber: "",
    priority: "Normal",
    note: "",
  });

  // ইনপুট পরিবর্তনের হ্যান্ডলার
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ফর্ম সাবমিশনের হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("ইমারজেন্সি রক্তের অনুরোধ সাবমিট করা হয়েছে!");
    // এখানে API-তে ডেটা পাঠানো যায়
  };

  return (
    <section className="bg-red-50 py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* শিরোনাম */}
        <div className="text-center mb-10">
          <FaTint className="text-red-500 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">ইমারজেন্সি রক্তের অনুরোধ</h2>
          <p className="text-gray-500 mt-2">রক্ত জরুরি প্রয়োজন হলে নিচের ফর্মটি পূরণ করুন।</p>
        </div>

        {/* ফর্ম */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-5"
        >

          {/* রোগীর নাম */}
          <div>
            <label className="text-sm text-gray-600">রোগীর নাম</label>
            <input
              type="text"
              name="patientName"
              placeholder="রোগীর নাম লিখুন"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* লিঙ্গ */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <BsGenderAmbiguous /> লিঙ্গ
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            >
              <option value="">লিঙ্গ নির্বাচন করুন</option>
              <option>পুরুষ</option>
              <option>মহিলা</option>
            </select>
          </div>

          {/* রক্তের গ্রুপ */}
          <div>
            <label className="text-sm text-gray-600">রক্তের গ্রুপ</label>
            <select
              name="bloodGroup"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            >
              <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB-</option>
            </select>
          </div>

          {/* হিমোগ্লোবিন */}
          <div>
            <label className="text-sm text-gray-600">হিমোগ্লোবিন (g/dL)</label>
            <input
              type="text"
              name="hemoglobin"
              placeholder="উদাহরণ: 13.5"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            />
          </div>

          {/* হাসপাতালের নাম */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaHospital /> হাসপাতালের নাম
            </label>
            <input
              type="text"
              name="hospitalName"
              placeholder="উদাহরণ: ঢাকা মেডিকেল কলেজ হাসপাতাল"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* হাসপাতালের লোকেশন */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaMapMarkerAlt /> হাসপাতালের ঠিকানা
            </label>
            <input
              type="text"
              name="hospitalLocation"
              placeholder="উদাহরণ: ধানমন্ডি, ঢাকা"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* ব্যাগের সংখ্যা */}
          <div>
            <label className="text-sm text-gray-600">রক্তের ব্যাগ সংখ্যা</label>
            <input
              type="number"
              name="bags"
              placeholder="রক্তের ব্যাগের সংখ্যা লিখুন"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* প্রয়োজনীয় তারিখ */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaCalendarAlt /> প্রয়োজনীয় তারিখ
            </label>
            <input
              type="date"
              name="requiredDate"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* প্রয়োজনীয় সময় */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <MdAccessTime /> প্রয়োজনীয় সময়
            </label>
            <input
              type="time"
              name="requiredTime"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* অভিভাবকের নাম */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <MdFamilyRestroom /> অভিভাবকের নাম
            </label>
            <input
              type="text"
              name="guardianName"
              placeholder="অভিভাবকের নাম লিখুন"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* অভিভাবকের ফোন নম্বর */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaPhone /> অভিভাবকের ফোন নম্বর
            </label>
            <input
              type="tel"
              name="guardianNumber"
              placeholder="01XXXXXXXXX"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* জরুরি অগ্রাধিকার */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">জরুরি অগ্রাধিকার</label>
            <select
              name="priority"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            >
              <option>Normal</option>
              <option>Urgent</option>
              <option>Critical</option>
            </select>
          </div>

          {/* অতিরিক্ত নোট */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">অতিরিক্ত তথ্য</label>
            <textarea
              name="note"
              rows="3"
              placeholder="যদি প্রয়োজন হয় অতিরিক্ত তথ্য লিখুন..."
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            />
          </div>

          {/* সাবমিট বাটন */}
          <button
            type="submit"
            className="md:col-span-2 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            ইমারজেন্সি রক্তের অনুরোধ পাঠান
          </button>
          {/* তথ্য ও CTA - প্রফেশনাল ভার্সন */}
          <BloodRequestCTA />

        </form>
      </div>
    </section>
  );
};

export default EmergencyBloodRequest;