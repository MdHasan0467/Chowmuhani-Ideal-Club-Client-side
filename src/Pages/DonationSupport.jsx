import { useState } from "react";
import { FaHandHoldingHeart, FaCopy } from "react-icons/fa";
import bkashLogo from "../assets/PaymentSVG/bkash.svg";
import nagadLogo from "../assets/PaymentSVG/nagad.svg";
import bankLogo from "../assets/PaymentSVG/bank.svg";
// import ScreenshotUpload from "../components/DonationSupport/ScreenshotUpload";

/**
 * DonationSupport Component with Suggested Amounts
 * ------------------------------------------------
 */
const DonationSupport = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedAmounts, setSelectedAmounts] = useState({}); // store amount per payment

  const suggestedAmounts = [50, 100, 200, 500]; // Ready options

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle amount selection
  const handleAmountSelect = (paymentId, amount) => {
    setSelectedAmounts((prev) => ({ ...prev, [paymentId]: amount }));
  };

  const payments = [
    { name: "bKash", number: "01690058503", logo: bkashLogo, color: "pink", recommended: true },
    { name: "Nagad", number: "01690058503", logo: nagadLogo, color: "orange" },
    { name: "Bank Account", number: "1234567890123456", logo: bankLogo, color: "blue" },
  ];

  const getButtonClasses = (color) => {
    const base = "mt-4 px-4 py-2 rounded-full w-full text-white font-semibold shadow-md transition-transform duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95";
    switch (color) {
      case "pink":
        return `${base} bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700`;
      case "orange":
        return `${base} bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 hover:from-orange-600 hover:via-yellow-600 hover:to-orange-700`;
      case "blue":
        return `${base} bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-700`;
      default:
        return base;
    }
  };

  const getCardClasses = (recommended) => {
    const base = "relative bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2";
    return recommended ? `${base} border-2 border-pink-500` : base;
  };

  return (
    <div id="donateTaka">
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <FaHandHoldingHeart className="text-red-500 text-4xl mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-800">মানবতার পাশে দাঁড়ান 🤝</h2>
            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              আপনার সামান্য সহায়তাই হতে পারে কারো নতুন জীবনের শুরু। একটি ছোট অবদানই ফিরিয়ে দিতে পারে কারো মুখের হাসি।
            </p>
            <p className="text-red-500 font-semibold mt-4">আজই আপনার ভালোবাসার অংশীদার হোন ❤️</p>
          </div>

          {/* Payment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {payments.map((item) => {
              const uniqueId = `${item.name}-${item.number}`;
              const selectedAmount = selectedAmounts[uniqueId];

              return (
                <div key={uniqueId} className={getCardClasses(item.recommended)}>
                  {/* Recommended Badge */}
                  {item.recommended && (
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  )}

                  {/* Logo */}
                  <img src={item.logo} alt={`${item.name} Logo`} className="h-10 mx-auto mb-2" />

                  {/* Payment Info */}
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500 mt-1">Send Donation</p>

                  {/* Number + Copy */}
                  <div className="flex flex-col items-center justify-center mt-2 relative">
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold">{item.number}</p>
                      <FaCopy
                        className="cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => handleCopy(item.number, uniqueId)}
                      />
                    </div>
                    {copiedId === uniqueId && (
                      <span className="absolute -top-6 text-green-600 text-sm font-semibold z-10">
                        Copied!
                      </span>
                    )}
                  </div>

                  {/* Suggested Amount */}
                  <div className="flex justify-center gap-2 mt-3 flex-wrap">
                    {suggestedAmounts.map((amt) => (
                      <button
                        key={amt}
                        className={`px-3 py-1 rounded-full border transition ${
                          selectedAmount === amt
                            ? "bg-green-500 text-white border-green-500"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                        onClick={() => handleAmountSelect(uniqueId, amt)}
                      >
                        {amt}৳
                      </button>
                    ))}
                  </div>

                  {/* Screenshot Upload */}
                  {/* <ScreenshotUpload uniqueId={uniqueId} /> */}

                  {/* Donate Button */}
                  {/* <button className={getButtonClasses(item.color)}>
                    Donate {selectedAmount ? `${selectedAmount}৳` : ""}
                  </button> */}

                  <p className="font-semibold mt-2">দয়া করে আপনার বিকাশ অ্যাপ থেকে সেন্ডমানি করুন।</p>
                  <p>পেমেন্ট মেথড এর কাজ চলমান...</p>
                </div>
              );
            })}
          </div>

          {/* Trust Message */}
          <p className="text-center text-gray-500 mt-10 text-sm">
            🔒 আপনার অনুদান সম্পূর্ণ নিরাপদ এবং স্বচ্ছভাবে ব্যবহৃত হবে।
          </p>

        </div>
      </section>
    </div>
  );
};

export default DonationSupport;