import { useState } from "react";

// 🔥 তোমার আগের সব import থাকবে
import useGenerateCIC from "../Hooks/useGenerateCIC";

import PersonalInfo from "../components/MemberShipForm/PersonalInfo";
import SocialInfo from "../components/MemberShipForm/SocialInfo";
import ContactInfo from "../components/MemberShipForm/ContactInfo";
import AddressInfo from "../components/MemberShipForm/AddressInfo";
import BloodInfo from "../components/MemberShipForm/BloodInfo";
import ProfileUpload from "../components/MemberShipForm/ProfileUpload";
import MonthlyDonation from "../components/MemberShipForm/MonthlyDonation";
import MembershipTerms from "../components/MemberShipForm/MembershipTerms";

const MemberShipForm = () => {
  const { generateUniqueCIC, generating } = useGenerateCIC();

  // 🔥 role selection
  const [role, setRole] = useState("volunteer");

  // =========================
  // 🔵 Volunteer states (UNCHANGED)
  // =========================
  const [success, setSuccess] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    postOffice: "",
    thana: "",
    district: "",
    title: "",
    details: "",
    bloodGroup: "",
    profileImage: null,
  });

  const [donationChoice, setDonationChoice] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationError, setDonationError] = useState("");

  // =========================
  // ❤️ Donor states
  // =========================
  const [donorData, setDonorData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    division: "",
    district: "",
    thana: "",
    union: "",
    village: "",
    ward: "",
    home: "",
  });

  const [donorTerms, setDonorTerms] = useState({
    alwaysReady: false,
    emergencyResponse: false,
    validInfo: false,
  });

  // =========================
  // 🔵 Volunteer submit (UNCHANGED)
  // =========================
  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("দয়া করে শর্তাবলী মেনে নিন");
      return;
    }

    if (donationChoice === "yes" && (!donationAmount || donationAmount < 20)) {
      setDonationError("কমপক্ষে ২০ টাকা লিখুন");
      return;
    } else {
      setDonationError("");
    }

    setLoading(true);

    try {
      const cicId = await generateUniqueCIC(formData.phone);

      const dataToSend = {
        ...formData,
        cicId,
        monthlyDonation: donationChoice === "yes" ? donationAmount : donationAmount,
      };

      const res = await fetch("http://localhost:5000/membership", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();

      if (result.insertedId) {
        setSuccess(true);
      }
    } catch {
      alert("সার্ভারে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // ❤️ Donor submit
  // =========================
  const handleDonorSubmit = async (e) => {
    e.preventDefault();

    const allChecked = Object.values(donorTerms).every(Boolean);
    if (!allChecked) {
      alert("সব শর্ত মানতে হবে");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/donor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(donorData),
      });

      const result = await res.json();

      if (result.insertedId) {
        alert("রক্তদাতা হিসেবে যুক্ত হয়েছেন ❤️");
      }
    } catch {
      alert("সমস্যা হয়েছে");
    }
  };

  return (
    <div className="bg-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">

        {/* 🔥 Role নির্বাচন */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="volunteer">সেচ্ছাসেবী</option>
          <option value="donor">রক্তদাতা</option>
        </select>

        {/* ============================= */}
        {/* 🔵 VOLUNTEER FORM (UNCHANGED) */}
        {/* ============================= */}
        {role === "volunteer" && (
          <form onSubmit={handleVolunteerSubmit} className="space-y-10">

            <h1 className="text-2xl font-bold text-center text-blue-500">
              অনলাইন সদস্য ফরম
            </h1>

            {success && <p className="text-green-500 text-center">সফল হয়েছে</p>}
            {generating && <p className="text-center">CIC তৈরি হচ্ছে...</p>}

            {/* 🔥 তোমার original components */}
            <PersonalInfo formData={formData} setFormData={setFormData} />
            <SocialInfo formData={formData} setFormData={setFormData} />
            <ContactInfo formData={formData} setFormData={setFormData} />
            <AddressInfo formData={formData} setFormData={setFormData} />
            <BloodInfo formData={formData} setFormData={setFormData} />
            <ProfileUpload formData={formData} setFormData={setFormData} />

            <MonthlyDonation
              donationChoice={donationChoice}
              setDonationChoice={setDonationChoice}
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
              donationError={donationError}
              setDonationError={setDonationError}
            />

            <MembershipTerms agree={agree} setAgree={setAgree} />

            <button className="btn w-full bg-blue-500 text-white">
              {loading ? "জমা হচ্ছে..." : "জমা দিন"}
            </button>
          </form>
        )}

        {/* ============================= */}
        {/* ❤️ DONOR FORM */}
        {/* ============================= */}
        {role === "donor" && (
          <form onSubmit={handleDonorSubmit} className="space-y-4">

            <input placeholder="নাম" onChange={(e)=>setDonorData({...donorData,name:e.target.value})} className="input" required />
            <input placeholder="+8801XXXXXXXXX" onChange={(e)=>setDonorData({...donorData,phone:e.target.value})} className="input" required />

            <select onChange={(e)=>setDonorData({...donorData,bloodGroup:e.target.value})} className="input" required>
              <option value="">রক্তের গ্রুপ</option>
              <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
              <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
            </select>

            <input placeholder="জেলা" onChange={(e)=>setDonorData({...donorData,district:e.target.value})} className="input" required />
            <input placeholder="থানা" onChange={(e)=>setDonorData({...donorData,thana:e.target.value})} className="input" required />

            {/* Terms */}
            <label><input type="checkbox" onChange={()=>setDonorTerms({...donorTerms,alwaysReady:true})}/> সব সময় রক্ত দিতে আগ্রহী</label>
            <label><input type="checkbox" onChange={()=>setDonorTerms({...donorTerms,emergencyResponse:true})}/> জরুরী সাড়া দিব</label>
            <label><input type="checkbox" onChange={()=>setDonorTerms({...donorTerms,validInfo:true})}/> সঠিক তথ্য</label>

            <button className="btn bg-red-500 text-white w-full">
              রক্তদাতা হিসেবে যোগ দিন
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default MemberShipForm;