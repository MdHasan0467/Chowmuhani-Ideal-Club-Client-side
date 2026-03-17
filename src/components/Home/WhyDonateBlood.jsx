// WhyDonate.jsx
import { FaHeart, FaClock, FaUserFriends } from "react-icons/fa";

const cards = [
  { 
    icon: <FaHeart className="text-red-500 w-6 h-6"/>, 
    title: "জীবন বাঁচাতে সাহায্য করুন", 
    desc: "মাত্র একবার রক্তদান করলে সর্বোচ্চ ৩ জন মানুষের জীবন বাঁচানো সম্ভব।" 
  },
  { 
    icon: <FaClock className="text-red-500 w-6 h-6"/>, 
    title: "সহজ ও দ্রুত প্রক্রিয়া", 
    desc: "রক্তদান করতে সাধারণত মাত্র ৩০ মিনিট সময় লাগে।" 
  },
  { 
    icon: <FaUserFriends className="text-red-500 w-6 h-6"/>, 
    title: "সমাজের জন্য অবদান", 
    desc: "আপনার রক্তদান আপনার সমাজের অসুস্থ ও বিপদগ্রস্ত মানুষের পাশে দাঁড়াতে সাহায্য করে।" 
  },
];

const WhyDonateBlood = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-8">
        কেন রক্তদান করবেন?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c,i)=>(
          <div key={i} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <div className="mb-4 flex justify-center">{c.icon}</div>
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDonateBlood;