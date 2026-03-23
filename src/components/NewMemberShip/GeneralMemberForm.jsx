import { useState } from "react";
import PersonalInfo from "../MemberShipForm/PersonalInfo";
import ContactInfo from "../MemberShipForm/ContactInfo";
import AddressInfo from "../MemberShipForm/AddressInfo";
import ProfileUpload from "../MemberShipForm/ProfileUpload";
import GeneralMemberterms from "../GeneralMemberForm/GeneralMemberterms";

const GeneralMemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    division: "",
    district: "",
    thana: "",
    village: "",
    profileImage: null,
    bloodGroup: "", // required
  });

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  // 💰 Monthly donation
  const [donationAmount, setDonationAmount] = useState("");
  const [donationError, setDonationError] = useState("");

  // 🤝 optional participation
  const [participation, setParticipation] = useState({
    willingToDonateBlood: false,
    willingToVolunteer: false,
  });


  // 🔹 Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) return alert("শর্ত মেনে নিন");

    if (!donationAmount || donationAmount < 20) {
      return setDonationError("কমপক্ষে ২০ টাকা মাসিক চাঁদা দিতে হবে");
    }

    if (!formData.bloodGroup) {
      return alert("রক্তের গ্রুপ নির্বাচন করুন (জানা না থাকলে 'জানা নেই')।");
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/general-member", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...formData,
          monthlyDonation: donationAmount,
          participation,
          role: "general",
          bloodGroupUpdated: formData.bloodGroup !== "জানা নেই",
          membershipValidUntil:
            formData.bloodGroup === "জানা নেই"
              ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
              : new Date(),
        }),
      });

      const result = await res.json();

      if (result.insertedId) {
        alert(
          "ধন্যবাদ ❤️ আপনি সাধারণ সদস্য হিসেবে যুক্ত হয়েছেন।\n" +
            "মাসিক চাঁদা প্রদান করতে হবে।\n" +
            "রক্তের গ্রুপ জানেন না হলে ৩০ দিনের মধ্যে আপডেট করতে হবে না হলে সদস্যপদ বাতিল হবে।"
        );
      }
    } catch {
      alert("সার্ভার সমস্যা, পরে চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h1 className="text-3xl font-bold text-center text-green-600">
       অনলাইন সদস্য ফরম
      </h1>

      {/* Basic Info */}
      <PersonalInfo formData={formData} setFormData={setFormData} />
      <ContactInfo formData={formData} setFormData={setFormData} />
      <AddressInfo formData={formData} setFormData={setFormData} />

      {/* Profile Upload */}
      <ProfileUpload formData={formData} setFormData={setFormData} />

      {/* Blood Group */}
      <div>
        <label className="font-semibold">রক্তের গ্রুপ</label>
        <select
          className="w-full border p-2 rounded mt-1"
          value={formData.bloodGroup}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, bloodGroup: e.target.value }))
          }
        >
          <option value="">নির্বাচন করুন</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
          <option>AB+</option>
          <option>A-</option>
          <option>B-</option>
          <option>O-</option>
          <option>AB-</option>
          <option>জানা নেই</option>
        </select>
      </div>

      {/* Participation */}
      <div className="space-y-2">
        <label className="font-semibold">আপনি কি করতে আগ্রহী?</label>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={participation.willingToDonateBlood}
            onChange={(e) =>
              setParticipation((prev) => ({
                ...prev,
                willingToDonateBlood: e.target.checked,
              }))
            }
          />
          সুযোগ পেলে রক্ত দিবো
        </label>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={participation.willingToVolunteer}
            onChange={(e) =>
              setParticipation((prev) => ({
                ...prev,
                willingToVolunteer: e.target.checked,
              }))
            }
          />
          মাঝে মাঝে সেচ্ছাসেবী হিসেবে কাজ করবো
        </label>
      </div>

      {/* Monthly Donation */}
      <div>
        <label className="font-semibold">মাসিক চাঁদা (৳)</label>
        <input
          type="number"
          min="20"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="কমপক্ষে ২০ টাকা"
          className="w-full border p-2 rounded mt-1"
          onBlur={() => {
            if (donationAmount && donationAmount < 20) {
              setDonationError("কমপক্ষে ২০ টাকা মাসিক চাঁদা দিতে হবে");
              setDonationAmount(""); // auto clear
            } else {
              setDonationError("");
            }
          }}
        />
        {donationError && (
          <p className="text-red-500 text-sm">{donationError}</p>
        )}
      </div>

      {/* Dynamic Terms */}
      <GeneralMemberterms agree={agree} setAgree={setAgree} />

      {/* Submit */}
      <button
        disabled={!agree || loading}
        className={`w-full py-3 text-white rounded ${
          agree ? "bg-green-600" : "bg-gray-400"
        }`}
      >
        {loading ? "জমা হচ্ছে..." : "সাধারণ সদস্য হিসেবে যোগ দিন"}
      </button>
    </form>
  );
};

export default GeneralMemberForm;