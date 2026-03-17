import { useState, useEffect } from "react";

const BloodInfo = ({ formData, setFormData }) => {
  const [step, setStep] = useState(1); // কোন ফিল্ড দেখানো হবে তা step দিয়ে control
  const [donateDuration, setDonateDuration] = useState(""); // years, months, days

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // ফিল্ড পূর্ণ হলে step বাড়ানো
    if (value.trim() !== "") {
      if (step === 1) setStep(2);
      else if (step === 2) setStep(3);
    }
  };

  // শেষ রক্তদানের তারিখ পরিবর্তন হলে duration calculate করা
  useEffect(() => {
    if (formData.lastDonate) {
      const today = new Date();
      const last = new Date(formData.lastDonate);

      let years = today.getFullYear() - last.getFullYear();
      let months = today.getMonth() - last.getMonth();
      let days = today.getDate() - last.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setDonateDuration(`${years} বছর ${months} মাস ${days} দিন`);
    } else {
      setDonateDuration("");
    }
  }, [formData.lastDonate]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">রক্তদান তথ্য</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Step 1: রক্তের গ্রুপ */}
        <select
          name="blood"
          className="select select-bordered w-full"
          value={formData.blood || ""}
          onChange={handleChange}
        >
          <option value="">রক্তের গ্রুপ</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        {/* Step 2: শেষ রক্তদান */}
        {step >= 2 && (
          <div className="relative">
            <label className="block text-sm text-gray-500 mb-1">শেষ রক্তদান</label>
            <input
              name="lastDonate"
              type="date"
              className="input input-bordered w-full"
              value={formData.lastDonate || ""}
              onChange={handleChange}
            />
            {!formData.lastDonate && (
              <p className="text-xs text-gray-400 mt-1">
                আপনার শেষ রক্তদানের তারিখ নির্বাচন করুন
              </p>
            )}
            {donateDuration && (
              <p className="text-xs text-green-600 mt-1">
                শেষ রক্তদানের পর থেকে: {donateDuration}
              </p>
            )}
          </div>
        )}

        {/* Step 3: মোট রক্তদান */}
        {step >= 3 && (
          <div className="relative">
            <label className="block text-sm text-gray-500 mb-1">মোট রক্তদান</label>
            <input
              name="totalDonate"
              type="number"
              className="input input-bordered w-full"
              value={formData.totalDonate || ""}
              onChange={handleChange}
            />
            {!formData.totalDonate && (
              <p className="text-xs text-gray-400 mt-1">
                আপনি কতবার রক্তদান করেছেন তা লিখুন
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodInfo;