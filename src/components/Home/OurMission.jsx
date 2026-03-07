import { motion } from "motion/react";

const OurMission = () => {
  return (
    <section className="">
      <div className="md:container md:mx-auto md:px-6 flex flex-col md:flex-row md:space-x-52 items-center">
        {/* Text */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            We strive to improve lives and build a better community.
            Our dedicated volunteers and projects focus on education, healthcare, 
            clean water, and creating sustainable impact for those in need.
          </p>
          <button className="btn bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <motion.div 
          className=""
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.graphicbangla.com/images/2024/01/19/65aa65fac30971705666042.jpg" 
            alt="Our Mission" 
            className="rounded-lg shadow-lg w-96"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;