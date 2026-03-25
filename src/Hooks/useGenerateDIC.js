// React থেকে useState import করা হচ্ছে
import { useState } from "react";

/*
  Custom Hook: useGenerateDIC
  কাজ:
  - ফোন নম্বর থেকে একটি ইউনিক DIC আইডি তৈরি করা
  - সার্ভারে গিয়ে চেক করা আইডি আগে থেকে আছে কিনা
  - না থাকলে সেই আইডি রিটার্ন করা
*/
const useGenerateDIC = () => {

  // generating state → DIC তৈরি করার সময় loading দেখাতে কাজে লাগবে
  const [generating, setGenerating] = useState(false);

  /*
    Function: generateUniqueDIC
    Parameter:
      phone → ইউজারের ফোন নম্বর
    Return:
      Promise → ইউনিক DIC ID
  */
  const generateUniqueDIC = async (phone) => {

    // ৪ ডিজিটের random সংখ্যা তৈরি করার helper function
    const randomDigits = () => Math.floor(1000 + Math.random() * 9000);

    // ফোন নম্বরের শেষ ৪ ডিজিট নেওয়া
    const last4 = phone.slice(-4);

    // ইউনিক হয়েছে কিনা track করার জন্য variable
    let unique = false;

    // final DIC ID এখানে store হবে
    let DICId = "";

    // DIC generate শুরু → loading true
    setGenerating(true);

    // যতক্ষণ পর্যন্ত ইউনিক আইডি না পাওয়া যায় loop চলবে
    while (!unique) {

      // DIC format তৈরি
      // উদাহরণ: DIC48351234
      DICId = `DIC${randomDigits()}${last4}`;

      try {

        // সার্ভারে গিয়ে check করা হচ্ছে এই আইডি আগে আছে কিনা
        const res = await fetch(`http://localhost:5000/api/check-DIC/${DICId}`);

        // response JSON এ convert
        const data = await res.json();

        // যদি database এ না থাকে তাহলে unique = true
        if (!data.exists) {
          unique = true;
        }

      } catch (err) {

        // error হলে console এ দেখানো
        console.log("DIC check error:", err);

        // error হলেও loop break করার জন্য unique true করা
        unique = true;
      }

    }

    // DIC generate শেষ → loading false
    setGenerating(false);

    // final DIC ID return
    return DICId;
  };

  // Hook থেকে function এবং loading state return
  return {
    generateUniqueDIC,
    generating,
  };
};

// Hook export করা হচ্ছে
export default useGenerateDIC;