import React, { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const eventsData = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "25 March 2026",
    location: "Chowmuhani Central Park",
    image: "https://picsum.photos/id/1011/500/300",
    description:
      "Chowmuhani Ideal Club is organizing a voluntary blood donation camp to support local hospitals and emergency patients.",
  },
  {
    id: 2,
    title: "Tree Plantation Program",
    date: "10 April 2026",
    location: "Ideal School Field",
    image: "https://picsum.photos/id/1043/500/300",
    description:
      "Join our tree plantation drive to make our community greener and healthier.",
  },
];

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Upcoming Events
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
                  View Details
                </button>

                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
                  Join Event
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
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;