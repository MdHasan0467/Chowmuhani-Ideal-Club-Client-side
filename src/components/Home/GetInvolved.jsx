import { motion } from "motion/react";

const items = [
  {
    title: "Volunteer",
    desc: "Join our team of dedicated volunteers.",
    icon: "🤝"
  },
  {
    title: "Donate",
    desc: "Support our initiatives with a donation.",
    icon: "💖"
  },
  {
    title: "Events",
    desc: "Participate in our community events.",
    icon: "📅"
  }
];

const GetInvolved = () => {
  return (
    <section className="py-9 border h-1/2 bg-blue-50 w-96 flex mx-auto">
      <div className=" mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Get Involved
        </h2>

        <div className="space-y-5">

          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow cursor-pointer"
            >

              <span className="text-4xl">
                {item.icon}
              </span>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GetInvolved;