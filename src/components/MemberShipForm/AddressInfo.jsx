import { useState } from "react";

const AddressInfo = ({ formData, setFormData }) => {
  const [step, setStep] = useState(1); // কোন ফিল্ড দেখানো হবে তা step দিয়ে control

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // আগের ফিল্ড পূরণ হলে step বাড়ানো
    if (value.trim() !== "") {
      if (step === 1) setStep(2);
      else if (step === 2) setStep(3);
      else if (step === 3) setStep(4);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">বর্তমান ঠিকানা</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Step 1: গ্রাম */}
        <input
          name="village"
          type="text"
          placeholder="গ্রাম"
          className="input input-bordered w-full"
          value={formData.village || ""}
          onChange={handleChange}
        />

        {/* Step 2: পোস্ট অফিস */}
        {step >= 2 && (
          <input
            name="postOffice"
            type="text"
            placeholder="পোস্ট অফিস"
            className="input input-bordered w-full"
            value={formData.postOffice || ""}
            onChange={handleChange}
          />
        )}

        {/* Step 3: থানা */}
        {step >= 3 && (
          <input
            name="thana"
            type="text"
            placeholder="থানা"
            className="input input-bordered w-full"
            value={formData.thana || ""}
            onChange={handleChange}
          />
        )}

        {/* Step 4: জেলা */}
        {step >= 4 && (
          <input
            name="district"
            type="text"
            placeholder="জেলা"
            className="input input-bordered w-full"
            value={formData.district || ""}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default AddressInfo;