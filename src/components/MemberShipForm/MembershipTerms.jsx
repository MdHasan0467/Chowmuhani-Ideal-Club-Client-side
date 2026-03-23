// MembershipTerms Component
// এই component টি membership এর শর্তাবলী দেখানোর জন্য ব্যবহার করা হয়েছে
// এবং শেষে একটি checkbox আছে যেটা দিয়ে user agreement নিশ্চিত করবে

const MembershipTerms = ({ agree, setAgree }) => {

  // 🔹 সকল শর্তাবলী array আকারে রাখা হয়েছে
  // পরে map() ব্যবহার করে একে একে UI তে দেখানো হবে
  const terms = [
    "আমি নিজ ইচ্ছায় বিনা স্বার্থে “চৌমুহনী আইডিয়াল ক্লাব” এর সাথে কাজ করতে এসেছি।",
    "আমি আমার উপর অর্পিত সকল দায়িত্ব, কর্তব্য, নিয়মাবলী ও শর্তাবলী মানতে বাধ্য থাকিব।",
    "আমি সংগঠনের সকল কাজের সাথে নিয়োজিত থাকব এবং অন্যকে উৎসাহিত করব।",
    "উপদেষ্টা পরিষদের সদস্যগণ সংগঠনের প্রতি সৌহার্দ্যপূর্ণ মনোভাব পোষণ করবেন।",
    "পরিচালনা পরিষদের সদস্যগণ নিজ নিজ দায়িত্ব পালনে সচেষ্ট থাকবেন।",
    "প্রত্যেক সদস্যকে অবশ্যই সমাজ ও মানব সেবার নিয়োজিত সকল কর্মকাণ্ডে নিজ দায়িত্ব নিয়ে এগিয়ে আসতে হবে।",
    "একক সিদ্ধান্তে সংগঠনের কোনো কর্মসূচি সম্পাদন করা যাবে না, সংগঠন কর্তৃক প্রণীত সভার মতামত থাকতে হবে।",
    "উপদেষ্টা পরিষদ কর্তৃক গঠিত সংগঠনের কার্যনির্বাহী সকল সদস্য অবশ্যই সক্রিয় থাকতে হবে।",
    "“চৌমুহনী আইডিয়াল ক্লাব” একটি অরাজনৈতিক, সামাজিক ও সেবামূলক সংগঠন।",
    "কোন সদস্যের বিরুদ্ধে গঠনতন্ত্র পরিপন্থী কোনো কাজ প্রমাণিত হলে সদস্যপদ বাতিল করা হবে।",
    "রাজনৈতিক কোনো ধরণের কাজে লিপ্ত থাকা, আবেগ বশত হয়ে লোভ লালসায় বা চরিত্রহীন কোনো কাজের দায়ভার সংগঠন নিবে না।",
    "সংগঠনের ধার্যকৃত মাসিক টাকা প্রতি মাসের ০৫ তারিখের মধ্যে নিজ দায়িত্বে পরিশোধ করতে হবে।"
  ];

  // 🔹 বাংলা ডিজিট array (0-9)
  // index নাম্বারকে বাংলায় দেখানোর জন্য ব্যবহার হবে
  const banglaDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];

  // 🔹 এই function টি number কে Bangla number এ convert করে
  // যেমন: 1 → ১, 12 → ১২
  const toBanglaNumber = (num) => {
    return num.toString().split("").map(d => banglaDigits[d]).join("");
      //.toString()                // number কে string বানানো
      //.split("")                // প্রতিটি digit আলাদা করা
      //.map(d => banglaDigits[d]) // প্রতিটি digit কে বাংলা digit দিয়ে replace করা
      //.join("");                // আবার একত্র করা
  };

  return (
    // 🔹 Main container
    <div className="bg-gray-50 border rounded-lg p-6 space-y-3">

      {/* 🔸 Section Title */}
      <h2 className="text-xl font-semibold text-gray-700">
        শর্তাবলী
      </h2>

      {/* 🔸 Terms List */}
      <div className="space-y-2 text-[15px] leading-relaxed">

        {/* 🔹 terms array loop করে প্রতিটি শর্ত দেখানো */}
        {terms?.map((term, index) => (
          <p key={index}>
            {/* 🔸 সিরিয়াল নাম্বার (বাংলায়) */}
            <strong>{toBanglaNumber(index + 1)}:</strong> {term}
          </p>
        ))}

      </div>

      {/* 🔸 Agreement Checkbox Section */}
      <div className="flex items-center gap-2 pt-4">

        {/* 🔹 Checkbox */}
        <input
        className="cursor-pointer"
          type="checkbox"
          checked={agree} // parent থেকে আসা state
          onChange={(e) => 
            setAgree(e.target.checked) // checkbox change হলে state update
          }
        />

        {/* 🔹 Label */}
        <label className="font-medium">
          আমি উপরোক্ত সকল শর্তাবলী মেনে নিচ্ছি
        </label>

      </div>

    </div>
  );
};

export default MembershipTerms;