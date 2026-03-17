import { FaTint, FaUsers, FaHandHoldingHeart, FaBook } from "react-icons/fa";
import ImpactCard from "../ImpactSection/ImpactCard";

/**
 * 📊 Impact Data
 * --------------------------------
 * 👉 এখানে শুধু data change করলে UI auto update হবে
 */
const impactData = [
  {
    icon: <FaTint />,
    end: 500,
    label: "রক্তদান সম্পন্ন",
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    icon: <FaUsers />,
    end: 200,
    label: "পরিবারকে সহায়তা",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    icon: <FaHandHoldingHeart />,
    end: 150,
    label: "চিকিৎসা সহায়তা",
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    icon: <FaBook />,
    end: 120,
    label: "শিক্ষার্থী সহায়তা",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
];

/**
 * 🩸 Component: ImpactSection
 * --------------------------------
 * Full section showing all impact stats
 */
const ImpactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* 🏷️ Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          আমাদের কার্যক্রমের প্রভাব
        </h2>

        {/* 📄 Subtitle */}
        <p className="text-gray-500 mt-3">
          আপনার সহায়তায় আমরা অনেক মানুষের পাশে দাঁড়াতে পেরেছি ❤️
        </p>

        {/* 📦 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {impactData?.map((item, index) => (
            <ImpactCard key={index} {...item} />
          ))}
        </div>

        {/* ❤️ Call To Action */}
        <div className="mt-12">
          <p className="text-lg text-gray-700">
            আপনার ছোট সহায়তাও বড় পরিবর্তন আনতে পারে
          </p>

          <a href="#donateTaka" className="btn mt-4 px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition">
            এখনই ডোনেট করুন
          </a>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;