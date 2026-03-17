// BloodTypeGuide.jsx
import React from "react";
import { FaTint, FaInfoCircle } from "react-icons/fa";

const bloodTypes = [
  { type: "A+", canDonateTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
  { type: "A-", canDonateTo: "A+, A-, AB+, AB-", canReceiveFrom: "A-, O-" },
  { type: "B+", canDonateTo: "B+, AB+", canReceiveFrom: "B+, B-, O+, O-" },
  { type: "B-", canDonateTo: "B+, B-, AB+, AB-", canReceiveFrom: "B-, O-" },
  { type: "AB+", canDonateTo: "AB+", canReceiveFrom: "সকল গ্রুপ থেকে" },
  { type: "AB-", canDonateTo: "AB+, AB-", canReceiveFrom: "A-, B-, AB-, O-" },
  { type: "O+", canDonateTo: "O+, A+, B+, AB+", canReceiveFrom: "O+, O-" },
  { type: "O-", canDonateTo: "সকল গ্রুপে", canReceiveFrom: "O-" },
];

const eligibility = [
  { title: "বয়স", description: "১৮ থেকে ৬৫ বছর" },
  { title: "ওজন", description: "কমপক্ষে ৫০ কেজি" },
  { title: "স্বাস্থ্য", description: "কোন গুরুতর অসুখ, সংক্রমণ বা চলমান ওষুধ সেবন না থাকা" },
];

const disqualifications = [
  "গর্ভবতী বা স্তন্যদানকারী নারী",
  "সাম্প্রতিক বড় অপারেশন বা ট্যাটু (৬ মাসের মধ্যে)",
  "গুরুতর রক্তস্বল্পতা বা হৃদরোগ",
  "সংক্রামক রোগ যেমন HIV, হেপাটাইটিস B/C",
  "সাম্প্রতিক ম্যালেরিয়া বা জ্বর",
];

const commonFears = [
  "সুঁইয়ের ভয়",
  "অজ্ঞান হয়ে যাওয়ার ভয়",
  "রক্ত দেওয়ার পর দুর্বল হয়ে পড়ার ভয়",
  "ব্যথা বা সংক্রমণের ভয়",
];

const BloodTypeGuide = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-8">
        রক্তদান নির্দেশিকা
      </h2>

      {/* Blood Type Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto bg-white shadow-lg rounded-xl mb-10">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">রক্তের গ্রুপ</th>
              <th className="px-4 py-3 text-left">কাদের দিতে পারবেন</th>
              <th className="px-4 py-3 text-left">কার কাছ থেকে নিতে পারবেন</th>
            </tr>
          </thead>
          <tbody>
            {bloodTypes.map((b, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-2">
                  <FaTint className="text-red-500" />
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold text-sm">
                    {b.type}
                  </span>
                </td>
                <td className="px-4 py-3">{b.canDonateTo}</td>
                <td className="px-4 py-3">{b.canReceiveFrom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Eligibility */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaInfoCircle /> কারা রক্তদান করতে পারবেন?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {eligibility.map((e, i) => (
            <li key={i}>
              <strong>{e.title}:</strong> {e.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Disqualifications */}
      <div className="max-w-4xl mx-auto mb-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaInfoCircle /> কারা রক্তদান করতে পারবেন না?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {disqualifications.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      {/* Common Fears */}
      <div className="max-w-4xl mx-auto mb-4">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaInfoCircle /> রক্তদান নিয়ে সাধারণ ভয়
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {commonFears.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Reassurance Box */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mt-4">
          <p className="text-gray-700">
            ভয় পাওয়ার কিছু নেই — রক্তদান সম্পূর্ণ নিরাপদ এবং মাত্র ৩০ মিনিট সময় লাগে। শরীর খুব দ্রুত স্বাভাবিক হয়ে যায়।
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <a
          href="#addMember"
          className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          আজই রক্তদাতা হিসেবে যুক্ত হোন
        </a>
      </div>
    </section>
  );
};

export default BloodTypeGuide;