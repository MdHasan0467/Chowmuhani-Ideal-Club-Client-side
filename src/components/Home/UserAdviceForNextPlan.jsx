import { useState } from "react";

import MemberVerification from "../UserAdviceForNextPlan/MemberVerification";
import PersonalInfo from "../UserAdviceForNextPlan/PersonalInfo";
import AddressInfo from "../UserAdviceForNextPlan/AddressInfo";
import PlanInfo from "../UserAdviceForNextPlan/PlanInfo";
import ImageUpload from "../UserAdviceForNextPlan/ImageUpload";
import FormSubmit from "../UserAdviceForNextPlan/FormSubmit";

const UserAdviceForNextPlan = () => {

  const [verifiedMember, setVerifiedMember] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    post: "",
    thana: "",
    district: "",
    title: "",
    details: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "details") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      setWordCount(words.length);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      memberId: verifiedMember,
      image,
    };

    console.log(submissionData);

    setSuccess(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      <h1 className="text-lg md:text-2xl font-semibold mb-10">
        আপনার পরিকল্পনা আমাদের সাথে শেয়ার করুন (সদস্যদের জন্য)
      </h1>

      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 mx-auto bg-blue-50 p-8 rounded-xl shadow-lg space-y-6"
      >

        {/* Member Verification */}

        {!verifiedMember && (
          <MemberVerification onVerified={setVerifiedMember} />
        )}

        {/* Form Sections */}

        {verifiedMember && (
          <>

            <p className="text-green-600 font-semibold">
              ✔ মেম্বার আইডি যাচাই সম্পন্ন
            </p>

            <PersonalInfo
              formData={formData}
              handleChange={handleChange}
            />

            <AddressInfo
              formData={formData}
              handleChange={handleChange}
            />

            <PlanInfo
              formData={formData}
              handleChange={handleChange}
              wordCount={wordCount}
            />

            <ImageUpload
              setImage={setImage}
              preview={preview}
              setPreview={setPreview}
            />

            <FormSubmit success={success} />

          </>
        )}

      </form>

    </div>
  );
};

export default UserAdviceForNextPlan;