import { FaHandHoldingHeart } from "react-icons/fa";

const BloodRequestCTA = () => {
  return (
    <div className="md:col-span-2 mt-6 p-6 bg-white shadow-lg rounded-2xl border-l-4 border-red-500 space-y-6">
      {/* শিরোনাম */}
      <h3 className="text-2xl font-bold text-gray-800">
        আপনার সাহায্য আমাদের জন্য অমূল্য
      </h3>

      {/* বডি টেক্সট */}
      <p className="text-gray-700 leading-relaxed">
        একজন রক্তদাতা বাড়ি থেকে বের হওয়া থেকে আবার নিজ বাড়িতে পৌঁছানো পর্যন্ত
        সমস্ত খরচ আমরা <span className="font-semibold text-red-500">দানকৃত অর্থ থেকে বহন</span> করে থাকি। 
      </p>
      <p>আপনাদের সাহায্য ছাড়া আমাদের কার্যক্রম দীর্ঘমেয়াদ পর্যন্ত চালু রাখা সম্ভব নয়।</p>

      <p className="text-gray-700 leading-relaxed">
        তাই আপনার প্রতিটি দান আমাদের এমন মহৎ কার্যক্রমকে চালু রাখতে সহায়তা করবে।
      </p>
      

      {/* CTA বাটন */}
      <a
        href="#donateTaka"
        className="inline-flex items-center bg-linear-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <span>এখনই দান করুন</span>
        <FaHandHoldingHeart className="ml-3 text-white text-lg" />
      </a>
    </div>
  );
};

export default BloodRequestCTA;