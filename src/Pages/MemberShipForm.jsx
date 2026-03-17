import { useState } from "react";
import { Helmet } from "react-helmet-async";

// Custom hook for CIC ID generation
import useGenerateCIC from "../Hooks/useGenerateCIC";

// Section Components
import PersonalInfo from "../components/MemberShipForm/PersonalInfo";
import SocialInfo from "../components/MemberShipForm/SocialInfo";
import ContactInfo from "../components/MemberShipForm/ContactInfo";
import AddressInfo from "../components/MemberShipForm/AddressInfo";
import BloodInfo from "../components/MemberShipForm/BloodInfo";
import ProfileUpload from "../components/MemberShipForm/ProfileUpload";
import MonthlyDonation from "../components/MemberShipForm/MonthlyDonation";
import MembershipTerms from "../components/MemberShipForm/MembershipTerms";

const MemberShipForm = () => {
  // CIC ID generate করার custom hook
  const { generateUniqueCIC, generating } = useGenerateCIC();

  // form submission success state
  const [success, setSuccess] = useState(false);

  // terms agree state
  const [agree, setAgree] = useState(false);

  // form submit loading state
  const [loading, setLoading] = useState(false);

  // form data state
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

  // donation choice: yes/no
  const [donationChoice, setDonationChoice] = useState("");

  // donation amount input
  const [donationAmount, setDonationAmount] = useState("");

  // donation validation message
  const [donationError, setDonationError] = useState("");

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if user agreed to terms
    if (!agree) {
      alert("দয়া করে শর্তাবলী মেনে নিন");
      return;
    }

    // donation validation
    if (donationChoice === "yes" && (!donationAmount || donationAmount < 20)) {
      setDonationError("কমপক্ষে ২০ টাকা লিখুন");
      return; // stop submit
    } else {
      setDonationError(""); // clear error if valid
    }

    setLoading(true);

    try {
      // CIC ID generate from custom hook
      const cicId = await generateUniqueCIC(formData.phone);

      // prepare final data to send to server
      const dataToSend = {
        ...formData,
        cicId,
        monthlyDonation: donationChoice === "yes" ? donationAmount : donationAmount,
      };

      // send data to server
      const res = await fetch("http://localhost:5000/membership", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();

      // success
      if (result.insertedId) {
        setSuccess(true);

        // reset form data
        setFormData({
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

        setAgree(false);
        setDonationChoice("");
        setDonationAmount("");
        setDonationError("");
      }
    } catch (err) {
      console.log(err);
      alert("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="addMember" className="bg-blue-50 py-10 px-4">
      {/* Page title */}
      <Helmet>
        <title>CIC / Membership Form</title>
      </Helmet>

      {/* Form container */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-10"
      >
        {/* Form title */}
        <h1 className="text-xl md:text-3xl font-bold text-center text-blue-500">
          অনলাইন সদস্য ফরম
        </h1>

        {/* Success message */}
        {success && (
          <div className="alert alert-success">
            আপনার ফরম সফলভাবে জমা হয়েছে. CIC আইডি তৈরি হয়েছে!
          </div>
        )}

        {/* CIC generating message */}
        {generating && (
          <p className="text-center text-blue-500">
            CIC আইডি তৈরি হচ্ছে...
          </p>
        )}

        {/* Form sections */}
        <PersonalInfo formData={formData} setFormData={setFormData} />
        <SocialInfo formData={formData} setFormData={setFormData} />
        <ContactInfo formData={formData} setFormData={setFormData} />
        <AddressInfo formData={formData} setFormData={setFormData} />
        <BloodInfo formData={formData} setFormData={setFormData} />
        <ProfileUpload formData={formData} setFormData={setFormData} />

        {/* Donation section with inline blur validation */}
        <MonthlyDonation
          donationChoice={donationChoice}
          setDonationChoice={setDonationChoice}
          donationAmount={donationAmount}
          setDonationAmount={setDonationAmount}
          donationError={donationError}
          setDonationError={setDonationError}
        />

        {/* Terms and conditions */}
        <MembershipTerms agree={agree} setAgree={setAgree} />

        {/* Submit button */}
        <button
          disabled={!agree || loading || generating}
          className={`btn w-full text-white text-lg ${
            agree ? "bg-blue-500 hover:scale-95" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "জমা দেওয়া হচ্ছে..." : "জমা দিন"}
        </button>
      </form>
    </div>
  );
};

export default MemberShipForm;