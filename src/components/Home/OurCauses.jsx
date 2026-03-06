import { motion } from "motion/react";

const causes = [
  {
    title: "Education Support",
    desc: "Helping children access quality education and resources.",
    icon: "🎓",
    color: "bg-blue-600"
  },
  {
    title: "Healthcare",
    desc: "Providing medical assistance to improve community health.",
    icon: "❤️",
    color: "bg-[#ec6737]"
  },
  {
    title: "Clean Water",
    desc: "Ensuring access to clean and safe drinking water.",
    icon: "💧",
    color: "bg-green-600"
  }
];

const OurCauses = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Causes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {causes.map((cause, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="text-5xl mb-4">{cause.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {cause.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {cause.desc}
              </p>

              <button className={`${cause.color} text-white px-5 py-2 rounded-lg cursor-pointer hover:text-black`}>
                Learn More
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurCauses;