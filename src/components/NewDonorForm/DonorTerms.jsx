import React from "react";

const DonorTerms = ({ donorTerms, setDonorTerms }) => {

  // checkbox change handle
  const handleChange = (e) => {
    setDonorTerms({
      ...donorTerms,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-4 shadow-sm">

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold text-red-600">
        রক্তদাতার শর্তাবলী
      </h2>

      <p className="text-sm text-gray-600">
        রক্তদাতা হিসেবে যুক্ত হতে নিচের শর্তগুলো মেনে নিতে হবে
      </p>

      {/* Terms */}
      <div className="space-y-3">

        <label className="flex items-start gap-3 cursor-pointer bg-white p-3 rounded-lg border hover:shadow transition">
          <input
            type="checkbox"
            name="alwaysReady"
            checked={donorTerms.alwaysReady}
            onChange={handleChange}
            className="mt-1 accent-red-500"
          />
          <span>
            আমি সব সময় রক্ত দিতে আগ্রহী এবং প্রয়োজনে সহযোগিতা করবো
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer bg-white p-3 rounded-lg border hover:shadow transition">
          <input
            type="checkbox"
            name="emergencyResponse"
            checked={donorTerms.emergencyResponse}
            onChange={handleChange}
            className="mt-1 accent-red-500"
          />
          <span>
            জরুরী পরিস্থিতিতে দ্রুত সাড়া দেওয়ার চেষ্টা করবো
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer bg-white p-3 rounded-lg border hover:shadow transition">
          <input
            type="checkbox"
            name="validInfo"
            checked={donorTerms.validInfo}
            onChange={handleChange}
            className="mt-1 accent-red-500"
          />
          <span>
            আমি সঠিক তথ্য প্রদান করেছি এবং ভুল তথ্য দিলে অ্যাকাউন্ট বাতিল হতে পারে
          </span>
        </label>

      </div>
    </div>
  );
};

export default DonorTerms;