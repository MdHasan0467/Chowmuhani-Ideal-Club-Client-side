import React, { useState, useRef, useEffect } from "react";

const NextWorkPlan =() => {
  const [showFullText, setShowFullText] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const planRef = useRef(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", // top
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d", // bottom left
    "https://images.unsplash.com/photo-1506765515384-028b60a970df"  // bottom right
  ];

  const planText = `আমাদের পরবর্তী কর্মসূচী হলো বৃক্ষ রোপণ। এই কর্মসূচীর মাধ্যমে আমরা পরিবেশ রক্ষা, 
  শহরের অক্সিজেন বৃদ্ধি এবং প্রাকৃতিক সৌন্দর্য বৃদ্ধি করার জন্য বিভিন্ন স্থানগুলোতে গাছ রোপণ করব। 
  আমাদের লক্ষ্য হলো প্রতিটি অংশগ্রহণকারীকে এই কার্যক্রমে যুক্ত করে সচেতনতা বৃদ্ধি করা এবং একটি টেকসই পরিবেশ নিশ্চিত করা। 
  কর্মসূচীর মধ্যে থাকবে শিক্ষামূলক সেশন, শিশুদের অংশগ্রহণ এবং স্থানীয় সম্প্রদায়ের সাথে কার্যক্রমের সমন্বয়। 
  আমরা চাই এই উদ্যোগটি দীর্ঘমেয়াদী প্রভাব ফেলে এবং শহর ও গ্রামীণ এলাকার মধ্যে সবুজ পরিবেশ বৃদ্ধি করে। 
  আমাদের পরবর্তী কর্মসূচী হলো বৃক্ষ রোপণ। এই কর্মসূচীর মাধ্যমে আমরা পরিবেশ রক্ষা, 
  শহরের অক্সিজেন বৃদ্ধি এবং প্রাকৃতিক সৌন্দর্য বৃদ্ধি করার জন্য বিভিন্ন স্থানগুলোতে গাছ রোপণ করব। 
  আমাদের লক্ষ্য হলো প্রতিটি অংশগ্রহণকারীকে এই কার্যক্রমে যুক্ত করে সচেতনতা বৃদ্ধি করা এবং একটি টেকসই পরিবেশ নিশ্চিত করা। 
  কর্মসূচীর মধ্যে থাকবে শিক্ষামূলক সেশন, শিশুদের অংশগ্রহণ এবং স্থানীয় সম্প্রদায়ের সাথে কার্যক্রমের সমন্বয়। 
  আমরা চাই এই উদ্যোগটি দীর্ঘমেয়াদী প্রভাব ফেলে এবং শহর ও গ্রামীণ এলাকার মধ্যে সবুজ পরিবেশ বৃদ্ধি করে।
  আমাদের পরবর্তী কর্মসূচী হলো বৃক্ষ রোপণ। এই কর্মসূচীর মাধ্যমে আমরা পরিবেশ রক্ষা, 
  শহরের অক্সিজেন বৃদ্ধি এবং প্রাকৃতিক সৌন্দর্য বৃদ্ধি করার জন্য বিভিন্ন স্থানগুলোতে গাছ রোপণ করব। 
  আমাদের লক্ষ্য হলো প্রতিটি অংশগ্রহণকারীকে এই কার্যক্রমে যুক্ত করে সচেতনতা বৃদ্ধি করা এবং একটি টেকসই পরিবেশ নিশ্চিত করা। 
  কর্মসূচীর মধ্যে থাকবে শিক্ষামূলক সেশন, শিশুদের অংশগ্রহণ এবং স্থানীয় সম্প্রদায়ের সাথে কার্যক্রমের সমন্বয়। 
  আমরা চাই এই উদ্যোগটি দীর্ঘমেয়াদী প্রভাব ফেলে এবং শহর ও গ্রামীণ এলাকার মধ্যে সবুজ পরিবেশ বৃদ্ধি করে।
  আমাদের পরবর্তী কর্মসূচী হলো বৃক্ষ রোপণ। এই কর্মসূচীর মাধ্যমে আমরা পরিবেশ রক্ষা, 
  শহরের অক্সিজেন বৃদ্ধি এবং প্রাকৃতিক সৌন্দর্য বৃদ্ধি করার জন্য বিভিন্ন স্থানগুলোতে গাছ রোপণ করব। 
  আমাদের লক্ষ্য হলো প্রতিটি অংশগ্রহণকারীকে এই কার্যক্রমে যুক্ত করে সচেতনতা বৃদ্ধি করা এবং একটি টেকসই পরিবেশ নিশ্চিত করা। 
  কর্মসূচীর মধ্যে থাকবে শিক্ষামূলক সেশন, শিশুদের অংশগ্রহণ এবং স্থানীয় সম্প্রদায়ের সাথে কার্যক্রমের সমন্বয়। 
  আমরা চাই এই উদ্যোগটি দীর্ঘমেয়াদী প্রভাব ফেলে এবং শহর ও গ্রামীণ এলাকার মধ্যে সবুজ পরিবেশ বৃদ্ধি করে।`;


  // Dynamically check overflow
  const checkOverflow = () => {
    const el = planRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-10">
        <h1 className="text-lg md:text-2xl font-semibold">আমাদের পরবর্তী সামাজিক কাজের পরিকল্পনাঃ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Gallery Left */}
        <div className="space-y-4 md:space-y-6">
          {/* Top Image */}
          <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition transform duration-500">
            <img
              src={galleryImages[0]}
              alt="Top Gallery"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition transform duration-500"
              >
                <img
                  src={img}
                  alt={`Gallery Bottom ${idx}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Plan Right */}
        <div className="bg-green-50 p-6 rounded-xl shadow-lg flex flex-col justify-start relative">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            বৃক্ষ রোপণ কর্মসূচী
          </h2>

          {/* Text container with fixed height */}
          <div
            ref={planRef}
            className="text-gray-700 leading-relaxed text-justify overflow-hidden"
            style={{ maxHeight: "160px" }} // Fixed section height
          >
            {planText}
          </div>

          {/* Show See More only if overflowing */}
          {isOverflowing && (
            <div className="flex justify-end mt-2">
              <button
                onClick={() => setShowFullText(true)}
                className="text-green-900 font-semibold hover:underline"
              >
                See More...
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Full Text Modal */}
      {showFullText && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-lg overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              বৃক্ষ রোপণ কর্মসূচী
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {planText}
            </p>

            {/* Close Modal */}
            <button
              onClick={() => setShowFullText(false)}
              className="absolute top-3 right-3 text-gray-800 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
export default NextWorkPlan;