import { useState } from "react";
import VolunteerForm from "../components/NewMemberShip/VolunteerForm";
import NewDonorForm from "../components/NewMemberShip/NewDonorForm";
import GeneralMemberForm from "../components/NewMemberShip/GeneralMemberForm";

const NewMemberShip = () => {
  const [role, setRole] = useState("volunteer");

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4" id="addMember">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-6">

        {/* Role Selection */}
        <div>
          <label className="font-semibold">আপনি কি হতে চান?</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="volunteer">সেচ্ছাসেবী হতে চাই</option>
            <option value="donor">রক্তদাতা হতে চাই</option>
            <option value="general">সাধারণ সদস্য হতে চাই</option> {/* ✅ NEW */}
          </select>
        </div>

        {/* Dynamic Render */}
        {role === "volunteer" && <VolunteerForm />}
        {role === "donor" && <NewDonorForm />}
        {role === "general" && <GeneralMemberForm />} {/* ✅ NEW */}

      </div>
    </div>
  );
};

export default NewMemberShip;