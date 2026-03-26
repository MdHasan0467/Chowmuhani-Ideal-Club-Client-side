import React, { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const eventsData = [
  {
    id: 1,
    title: "রক্তদান ক্যাম্প",
    date: "২৫ মার্চ ২০২৬",
    location: "চৌমুহানী সেন্ট্রাল পার্ক",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
    description:
      "দুর্গাপুর আইডিয়াল ক্লাব স্থানীয় হাসপাতাল ও জরুরি রোগীদের সহায়তার জন্য একটি স্বেচ্ছায় রক্তদান ক্যাম্পের আয়োজন করছে।",
  },
  {
    id: 2,
    title: "বৃক্ষরোপণ কর্মসূচি",
    date: "১০ এপ্রিল ২০২৬",
    location: "আইডিয়াল স্কুল মাঠ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s",
    description:
      "আমাদের কমিউনিটিকে আরও সবুজ ও স্বাস্থ্যকর করতে বৃক্ষরোপণ কর্মসূচিতে যোগ দিন।",
  },
];

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        পরবর্তী ইভেন্ট
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {event.title}
              </h3>

              <div className="flex items-center text-gray-500 text-sm mb-1">
                <FiCalendar className="mr-2" />
                {event.date}
              </div>

              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FiMapPin className="mr-2" />
                {event.location}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  বিস্তারিত দেখুন
                </button>

                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
                  ইভেন্টে যুক্ত হতে
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-3">
              {selectedEvent.title}
            </h3>

            <p className="text-gray-600 mb-3">
              {selectedEvent.description}
            </p>

            <button
              onClick={() => setSelectedEvent(null)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              বন্ধ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;