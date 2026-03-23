import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import bdLocations from "../data/bdLocations"; 
import SuccessModal from "../components/BecomeABloodDonor/SuccessModal";

/**
 * BecomeABloodDonor
 * - Cascading dropdowns: Division → District → Upazila
 * - Phone validation & masking: +8801XXXXXXXXX
 * - Optional fields: union, village, ward, home
 */
const BecomeABloodDonor = () => {
  const navigate = useNavigate();

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    phone: "",
    division: "",
    district: "",
    thana: "",
    union: "",
    vill: "",
    word: "",
    home: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({}); // Validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone masking
    if (name === "phone") {
      // Remove anything that's not a number
      let cleanValue = value.replace(/\D/g, "");
      // Add +880 if not typed
      if (cleanValue.startsWith("0")) cleanValue = "880" + cleanValue.slice(1);
      if (!cleanValue.startsWith("880")) cleanValue = "880" + cleanValue;
      cleanValue = "+" + cleanValue;
      setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const divisions = bdLocations?.map((item) => Object.keys(item))?.flat();
  const districts = division
    ? Object.keys(bdLocations.find((item) => item[division])[division])
    : [];
  const upazilas =
    division && district
      ? bdLocations.find((item) => item[division])[division][district]
      : [];

  useEffect(() => {
    setDistrict("");
    setUpazila("");
    setFormData((prev) => ({ ...prev, division, district: "", thana: "" }));
  }, [division]);

  useEffect(() => {
    setUpazila("");
    setFormData((prev) => ({ ...prev, district, thana: "" }));
  }, [district]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "নাম লিখতে হবে";
    if (!formData.bloodGroup) newErrors.bloodGroup = "রক্তের গ্রুপ নির্বাচন করুন";
    // Phone validation
    const phoneRegex = /^\+8801\d{9}$/;
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "ফোন নম্বর +8801XXXXXXXXX ফরম্যাটে হতে হবে";
    if (!division) newErrors.division = "বিভাগ নির্বাচন করুন";
    if (!district) newErrors.district = "জেলা নির্বাচন করুন";
    if (!upazila) newErrors.upazila = "উপজেলা নির্বাচন করুন";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Donor Data:", formData);
      setShowModal(true);

      // Optional: reset form
      setFormData({
        name: "",
        bloodGroup: "",
        phone: "",
        division: "",
        district: "",
        thana: "",
        union: "",
        vill: "",
        word: "",
        home: "",
      });
      setDivision("");
      setDistrict("");
      setUpazila("");
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          রক্তদাতা হোন ❤️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* নাম */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="পূর্ণ নাম"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* রক্তের গ্রুপ */}
          <div>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">{errors.bloodGroup}</p>}
          </div>

          {/* ফোন */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="+8801XXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Division */}
          <div>
            <select
              className="select select-bordered w-full"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <option value="">বিভাগ নির্বাচন করুন</option>
              {divisions?.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.division && <p className="text-red-500 text-sm mt-1">{errors.division}</p>}
          </div>

          {/* District */}
          <div>
            <select
              className="select select-bordered w-full"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!division}
            >
              <option value="">জেলা নির্বাচন করুন</option>
              {districts?.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
          </div>

          {/* Upazila */}
          <div>
            <select
              className="select select-bordered w-full"
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
              disabled={!district}
            >
              <option value="">উপজেলা নির্বাচন করুন</option>
              {upazilas?.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
            {errors.upazila && <p className="text-red-500 text-sm mt-1">{errors.upazila}</p>}
          </div>

          {/* Optional fields */}
          <input
            type="text"
            name="union"
            placeholder="ইউনিয়ন (Optional)"
            value={formData.union}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="text"
            name="vill"
            placeholder="গ্রাম (Optional)"
            value={formData.vill}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="number"
            name="word"
            placeholder="ওয়ার্ড (Optional)"
            value={formData.word}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="text"
            name="home"
            placeholder="বাড়ি নং (Optional)"
            value={formData.home}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">
            নিবন্ধন করুন
          </button>
        </form>
      </div>

      {showModal && (
        <SuccessModal
          title="🎉 সফলভাবে নিবন্ধিত!"
          message="আপনার রক্তদান নিবন্ধন সফলভাবে সম্পন্ন হয়েছে। আপনার অবদান অসংখ্য মানুষের জীবন রক্ষা করবে। ধন্যবাদ। ❤️"
        />
      )}
    </section>
  );
};

export default BecomeABloodDonor;