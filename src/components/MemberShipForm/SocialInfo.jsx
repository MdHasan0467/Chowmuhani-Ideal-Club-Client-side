import { useState } from "react";

const SocialInfo = ({ formData, setFormData }) => {
  const [step, setStep] = useState(1); // কোন ফিল্ড দেখানো হবে তা step দিয়ে control

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });

      // ফিল্ড পূর্ণ হলে step বাড়ানো
      if (value.trim() !== "") {
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
        else if (step === 3) setStep(4);
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">সামাজিক তথ্য</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Step 1: Facebook Name */}
        <input
          name="facebookName"
          type="text"
          placeholder="ফেসবুক আইডি নাম"
          className="input input-bordered w-full"
          value={formData.facebookName || ""}
          onChange={handleChange}
        />

        {/* Step 2: Facebook Link */}
        {step >= 2 && (
          <input
            name="facebookLink"
            type="text"
            placeholder="ফেসবুক প্রোফাইল লিংক"
            className="input input-bordered w-full"
            value={formData.facebookLink || ""}
            onChange={handleChange}
          />
        )}

        {/* Step 3: Profession */}
        {step >= 3 && (
          <select
            name="profession"
            className="select select-bordered w-full"
            required
            value={formData.profession || ""}
            onChange={handleChange}
          >
            <option value="">পেশা নির্বাচন করুন</option>
            <option>ছাত্র ছাত্রী</option>
            <option>চাকরী</option>
            <option>ব্যবসা</option>
            <option>বেকার</option>
          </select>
        )}

        {/* Step 4: Religion */}
        {step >= 4 && (
          <div className="flex gap-6 items-center">
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="religion"
                value="ইসলাম"
                checked={formData.religion === "ইসলাম"}
                onChange={handleChange}
              />
              ইসলাম
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="religion"
                value="সনাতন"
                checked={formData.religion === "সনাতন"}
                onChange={handleChange}
              />
              সনাতন
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="religion"
                value="অন্যান্য"
                checked={formData.religion === "অন্যান্য"}
                onChange={handleChange}
              />
              অন্যান্য
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialInfo;