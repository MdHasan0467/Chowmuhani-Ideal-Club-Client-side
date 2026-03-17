import { useState } from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  const [age, setAge] = useState(""); // বয়স দেখানোর জন্য

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // জন্মতারিখ দিলে বয়স হিসাব
    if (name === "birth" && value) {
      const today = new Date();
      const birthDate = new Date(value);

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setAge(`${years} বছর, ${months} মাস, ${days} দিন`);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ব্যক্তিগত তথ্য</h2>

      <div className="grid md:grid-cols-2 gap-4">

        {/* ১. নাম */}
        <input
          required
          name="name"
          type="text"
          placeholder="আপনার নাম"
          className="input input-bordered w-full"
          value={formData.name || ""}
          onChange={handleChange}
        />

        {/* ২. পিতার নাম (নাম পূরণ হলে দেখাবে) */}
        {formData.name?.trim() && (
          <input
            required
            name="father"
            type="text"
            placeholder="পিতার নাম"
            className="input input-bordered w-full"
            value={formData.father || ""}
            onChange={handleChange}
          />
        )}

        {/* ৩. মাতার নাম (পিতার নাম পূরণ হলে দেখাবে) */}
        {formData.father?.trim() && (
          <input
            required
            name="mother"
            type="text"
            placeholder="মাতার নাম"
            className="input input-bordered w-full"
            value={formData.mother || ""}
            onChange={handleChange}
          />
        )}

        {/* ৪. জন্মতারিখ (মাতার নাম পূরণ হলে দেখাবে) */}
        {formData.mother?.trim() && (
          <div className="relative col-span-2">
            <label className="block text-sm text-gray-500 mb-1">
              জন্ম তারিখ
            </label>

            <input
              required
              name="birth"
              type="date"
              className="input input-bordered w-full"
              value={formData.birth || ""}
              onChange={handleChange}
            />

            {!formData.birth && (
              <p className="text-xs text-gray-400 mt-1">
                আপনার জন্মতারিখ নির্বাচন করুন
              </p>
            )}

            {age && (
              <p className="text-sm text-green-600 mt-2">
                বর্তমান বয়স: {age}
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default PersonalInfo;