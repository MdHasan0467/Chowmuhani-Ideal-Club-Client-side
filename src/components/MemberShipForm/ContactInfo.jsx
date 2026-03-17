import { useState } from "react";

const ContactInfo = ({ formData, setFormData }) => {
  const [step, setStep] = useState(1); // কোন ফিল্ড দেখানো হবে তা step দিয়ে control

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // ফিল্ড পূর্ণ হলে step বাড়ানো
    if (value.trim() !== "") {
      if (step === 1) setStep(2);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">যোগাযোগ</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Step 1: ফোন নাম্বার */}
        <input
          required
          name="phone"
          type="tel"
          placeholder="মোবাইল নাম্বার"
          className="input input-bordered w-full"
          value={formData.phone || ""}
          onChange={handleChange}
        />

        {/* Step 2: ইমেইল */}
        {step >= 2 && (
          <input
            name="email"
            type="email"
            placeholder="ইমেইল"
            className="input input-bordered w-full"
            value={formData.email || ""}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default ContactInfo;