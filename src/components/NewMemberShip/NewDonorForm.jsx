import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bdLocations from "../../data/bdLocations";
import DonorTerms from "../NewDonorForm/DonorTerms";
import ProfileUpload from "../MemberShipForm/ProfileUpload";

const NewDonorForm = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  // ===============================
  // 🔥 USER & BLOOD GROUP FROM NAVIGATION
  // ===============================
  const user = location.state?.user || {};
  const bloodGroupFromState = location.state?.bloodGroup || "";

  const [donorData, setDonorData] = useState({
    name: user.name || "",
    phone: user.phoneNumber ? "+88" + user.phoneNumber.replace(/^0/, "") : "+880",
    bloodGroup: bloodGroupFromState || "",
    division: "",
    district: "",
    thana: "",
    union: "",
    village: "",
    ward: "",
    home: "",
    profileImage: user.photoUrl || null,
  });

  const [errors, setErrors] = useState({});

  // refs
  const refs = {
    name: useRef(),
    phone: useRef(),
    bloodGroup: useRef(),
    division: useRef(),
    district: useRef(),
    thana: useRef(),
  };

  // terms
  const [donorTerms, setDonorTerms] = useState({
    alwaysReady: false,
    emergencyResponse: false,
    validInfo: false,
  });

  const allChecked = Object.values(donorTerms).every(Boolean);

  // ===============================
  // 📍 Dynamic Location
  // ===============================
  const selectedDivision = bdLocations.find((d) => d[donorData.division]);
  const districts = selectedDivision
    ? Object.keys(selectedDivision[donorData.division])
    : [];
  const thanas =
    selectedDivision && donorData.district
      ? selectedDivision[donorData.division][donorData.district]
      : [];

  // ===============================
  // 📱 Phone handler
  // ===============================
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("880")) value = value.slice(3);
    value = value.slice(0, 10);
    setDonorData((prev) => ({ ...prev, phone: "+880" + value }));
  };

  // ===============================
  // ✅ Validation
  // ===============================
  const validate = () => {
    const newErrors = {};
    if (!donorData.name) newErrors.name = "নাম লিখুন";
    if (donorData.phone.length !== 14) newErrors.phone = "সঠিক ফোন নাম্বার দিন";
    if (!donorData.bloodGroup) newErrors.bloodGroup = "রক্তের গ্রুপ নির্বাচন করুন";
    if (!donorData.division) newErrors.division = "বিভাগ নির্বাচন করুন";
    if (!donorData.district) newErrors.district = "জেলা নির্বাচন করুন";
    if (!donorData.thana) newErrors.thana = "থানা নির্বাচন করুন";
    if (!donorData.profileImage) newErrors.profileImage = "ছবি আপলোড করুন";
    if (!allChecked) newErrors.terms = "সব শর্ত মানুন";

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0];
    if (firstError && refs[firstError]) refs[firstError].current.focus();

    return Object.keys(newErrors).length === 0;
  };

  // ===============================
  // 🚀 Submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/donor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(donorData),
      });
      const result = await res.json();

      if (result.insertedId) {
        alert("ধন্যবাদ ❤️ ফরম সফলভাবে জমা হয়েছে!");
        setDonorData({
          name: user.name || "",
          phone: user.phoneNumber ? "+88" + user.phoneNumber.replace(/^0/, "") : "+880",
          bloodGroup: bloodGroupFromState || "",
          division: "",
          district: "",
          thana: "",
          union: "",
          village: "",
          ward: "",
          home: "",
          profileImage: user.photoUrl || null,
        });
        setDonorTerms({
          alwaysReady: false,
          emergencyResponse: false,
          validInfo: false,
        });
      }
    } catch {
      alert("সমস্যা হয়েছে, আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // 🎨 Input class
  // ===============================
  const inputClass = (field) =>
    `w-full border rounded p-2 outline-none ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-5 bg-white p-6 rounded-xl shadow-lg"
    >
      <h1 className="text-2xl mt-10 font-bold text-center text-red-500">
        অনলাইন রক্তদাতা ফরম
      </h1>

      {/* Name */}
      <input
        ref={refs.name}
        className={inputClass("name")}
        placeholder="নাম"
        value={donorData.name}
        onChange={(e) => setDonorData((prev) => ({ ...prev, name: e.target.value }))}
        readOnly={!!user.name}
      />

      {/* Phone */}
      <input
        ref={refs.phone}
        className={inputClass("phone")}
        value={donorData.phone}
        onChange={handlePhoneChange}
        readOnly={!!user.phoneNumber}
      />

      {/* Blood Group */}
      <select
        ref={refs.bloodGroup}
        className={inputClass("bloodGroup")}
        value={donorData.bloodGroup}
        onChange={(e) =>
          setDonorData((prev) => ({ ...prev, bloodGroup: e.target.value }))
        }
      >
        <option value="">রক্তের গ্রুপ</option>
        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
          <option key={bg} value={bg}>
            🩸{bg}
          </option>
        ))}
      </select>

      {/* Division */}
      <select
        ref={refs.division}
        className={inputClass("division")}
        value={donorData.division}
        onChange={(e) =>
          setDonorData((prev) => ({ ...prev, division: e.target.value, district: "", thana: "" }))
        }
      >
        <option value="">বিভাগ নির্বাচন করুন</option>
        {bdLocations.map((d) =>
          Object.keys(d).map((div) => <option key={div}>{div}</option>)
        )}
      </select>

      {/* District */}
      <select
        ref={refs.district}
        className={inputClass("district")}
        value={donorData.district}
        disabled={!donorData.division}
        onChange={(e) => setDonorData((prev) => ({ ...prev, district: e.target.value, thana: "" }))}
      >
        <option value="">জেলা নির্বাচন করুন</option>
        {districts.map((dist) => (
          <option key={dist}>{dist}</option>
        ))}
      </select>

      {/* Thana */}
      <select
        ref={refs.thana}
        className={inputClass("thana")}
        value={donorData.thana}
        disabled={!donorData.district}
        onChange={(e) => setDonorData((prev) => ({ ...prev, thana: e.target.value }))}
      >
        <option value="">থানা নির্বাচন করুন</option>
        {thanas.map((th) => (
          <option key={th}>{th}</option>
        ))}
      </select>

      {/* Profile */}
      {user.photoUrl ? (
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-300">
          <img src={user.photoUrl} alt="Profile" className="w-full h-full object-cover" />
        </div>
      ) : (
        <ProfileUpload
          setCroppedImage={(img) => setDonorData((prev) => ({ ...prev, profileImage: img }))}
        />
      )}

      {/* Terms */}
      <DonorTerms donorTerms={donorTerms} setDonorTerms={setDonorTerms} />

      {/* Submit */}
      <button type="submit" disabled={loading} className="w-full py-3 text-white rounded bg-red-500">
        {loading ? "সাবমিট হচ্ছে..." : "রক্তদাতা হিসেবে যোগ দিন ❤️"}
      </button>
    </form>
  );
};

export default NewDonorForm;