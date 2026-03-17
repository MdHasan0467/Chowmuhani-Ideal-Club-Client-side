import React from "react";

const stories = [
  {
    name: "Rahim Uddin",
    location: "Chittagong, Bangladesh",
    story: "I donated blood for the first time and it felt amazing to save someone's life. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Fatima Begum",
    location: "Dhaka, Bangladesh",
    story: "The donation process was smooth and the staff was super helpful. Will do it again.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Karim Hossain",
    location: "Khulna, Bangladesh",
    story: "I was nervous at first but donating blood gave me a sense of pride. Truly fulfilling experience.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const DonorSuccessStories = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
        Donor Success Stories
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-red-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={story.avatar}
              alt={story.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-red-200"
            />
            <h3 className="font-semibold text-xl text-red-700 mb-1">{story.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{story.location}</p>
            <p className="text-gray-700">{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonorSuccessStories;