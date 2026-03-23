import React from "react";

const GeneralMemberterms = ({ agree, setAgree }) => {
  // যদি props থেকে termsList না আসে, default terms দেখাবে
  const defaultTerms = [
    "আমি নিজ ইচ্ছায় বিনা স্বার্থে “চৌমুহনী আইডিয়াল ক্লাব” এর সদস্য হতে এসেছি।",
    "আমি সংগঠনের সকল কাজের সাথে নিয়োজিত থাকব এবং অন্যকে উৎসাহিত করব।",
    "আমি অবশ্যই সমাজ ও মানব সেবার নিয়োজিত সকল কর্মকাণ্ডে নিজ দায়িত্ব নিয়ে এগিয়ে আসবো।",
    "কোন সদস্যের বিরুদ্ধে গঠনতন্ত্র পরিপন্থী কোনো কাজ প্রমাণিত হলে সদস্যপদ বাতিল করা হবে।",
    "রাজনৈতিক কোনো ধরণের কাজে লিপ্ত থাকা, আবেগ বশত হয়ে লোভ লালসায় বা চরিত্রহীন কোনো কাজের দায়ভার সংগঠন নিবে না।",
    "সংগঠনের ধার্যকৃত মাসিক টাকা প্রতি মাসের ০৫ তারিখের মধ্যে নিজ দায়িত্বে পরিশোধ করতে হবে।",
    "আপনি চাইলে মাঝে মাঝে সেচ্ছাসেবী হিসেবে কাজ করতে পারবেন।",
    "সদস্য হিসেবে রক্ত দিতে ইচ্ছা থাকলে তা করতে পারবেন।",
    "সদস্য হিসেবে যোগ দেওয়ার মাধ্যমে উপরের শর্তগুলো মেনে চলতে সম্মত হন।",
  ];


  return (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-3">
      <h2 className="text-lg font-bold text-green-800">সদস্য শর্তাবলী</h2>

      {/* Dynamic Terms List */}
      <ul className="list-disc list-inside text-green-900 space-y-1">
        {defaultTerms?.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>

      {/* ✅ Dynamic Agree Checkbox */}
      <label className="flex items-center gap-2 mt-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="w-5 h-5 accent-green-600"
        />
        <span>আমি উপরের শর্তাবলী মেনে চলতে সম্মত।</span>
      </label>
    </div>
  );
};

export default GeneralMemberterms;