import { useState } from "react";
import SocialInfo from "../MemberShipForm/SocialInfo";
import ContactInfo from "../MemberShipForm/ContactInfo";
import AddressInfo from "../MemberShipForm/AddressInfo";
import BloodInfo from "../MemberShipForm/BloodInfo";
import ProfileUpload from "../MemberShipForm/ProfileUpload";
import MonthlyDonation from "../MemberShipForm/MonthlyDonation";
import MembershipTerms from "../MemberShipForm/MembershipTerms";
import useGenerateDIC from "../../Hooks/useGenerateDIC";
import PersonalInfo from "../MemberShipForm/PersonalInfo";


const VolunteerForm = () => {
  const { generateUniqueDIC, generating } = useGenerateDIC();

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







  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) return alert("শর্ত মেনে নিন");

    if (donationChoice === "yes" && (!donationAmount || donationAmount < 20)) {
      return setDonationError("কমপক্ষে ২০ টাকা দিন");
    }

    setLoading(true);

    try {
      const DICId = await generateUniqueDIC(formData.phone);

      const res = await fetch("http://localhost:5000/membership", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...formData,
          DICId,
          monthlyDonation: donationAmount,
        }),
      });

      const result = await res.json();

      if (result.insertedId) setSuccess(true);
    } catch {
      alert("সার্ভার সমস্যা");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      <h1 className="text-3xl font-bold text-center text-blue-500">
        অনলাইন সেচ্ছাসেবী সদস্য ফরম
      </h1>

      {success && <p className="text-green-500 text-center">সফল হয়েছে</p>}
      {generating && <p className="text-center">DIC তৈরি হচ্ছে...</p>}

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

      <button
        disabled={!agree || loading || generating}
        className={`w-full py-3 text-white rounded ${
          agree ? "bg-blue-500" : "bg-gray-400"
        }`}
      >
        {loading ? "জমা হচ্ছে..." : "জমা দিন"}
      </button>
    </form>
  );
};

export default VolunteerForm;