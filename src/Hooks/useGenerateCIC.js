// React থেকে useState import করা হচ্ছে
import { useState } from "react";

/*
  Custom Hook: useGenerateCIC
  কাজ:
  - ফোন নম্বর থেকে একটি ইউনিক CIC আইডি তৈরি করা
  - সার্ভারে গিয়ে চেক করা আইডি আগে থেকে আছে কিনা
  - না থাকলে সেই আইডি রিটার্ন করা
*/
const useGenerateCIC = () => {

  // generating state → CIC তৈরি করার সময় loading দেখাতে কাজে লাগবে
  const [generating, setGenerating] = useState(false);

  /*
    Function: generateUniqueCIC
    Parameter:
      phone → ইউজারের ফোন নম্বর
    Return:
      Promise → ইউনিক CIC ID
  */
  const generateUniqueCIC = async (phone) => {

    // ৪ ডিজিটের random সংখ্যা তৈরি করার helper function
    const randomDigits = () => Math.floor(1000 + Math.random() * 9000);

    // ফোন নম্বরের শেষ ৪ ডিজিট নেওয়া
    const last4 = phone.slice(-4);

    // ইউনিক হয়েছে কিনা track করার জন্য variable
    let unique = false;

    // final CIC ID এখানে store হবে
    let cicId = "";

    // CIC generate শুরু → loading true
    setGenerating(true);

    // যতক্ষণ পর্যন্ত ইউনিক আইডি না পাওয়া যায় loop চলবে
    while (!unique) {

      // CIC format তৈরি
      // উদাহরণ: cic48351234
      cicId = `cic${randomDigits()}${last4}`;

      try {

        // সার্ভারে গিয়ে check করা হচ্ছে এই আইডি আগে আছে কিনা
        const res = await fetch(`http://localhost:5000/api/check-cic/${cicId}`);

        // response JSON এ convert
        const data = await res.json();

        // যদি database এ না থাকে তাহলে unique = true
        if (!data.exists) {
          unique = true;
        }

      } catch (err) {

        // error হলে console এ দেখানো
        console.log("CIC check error:", err);

        // error হলেও loop break করার জন্য unique true করা
        unique = true;
      }

    }

    // CIC generate শেষ → loading false
    setGenerating(false);

    // final CIC ID return
    return cicId;
  };

  // Hook থেকে function এবং loading state return
  return {
    generateUniqueCIC,
    generating,
  };
};

// Hook export করা হচ্ছে
export default useGenerateCIC;