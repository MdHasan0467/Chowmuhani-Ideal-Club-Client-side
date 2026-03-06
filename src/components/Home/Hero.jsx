import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="px-4 md:px-16 py-10">

      {/* Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Together We Can Make a Difference
          </motion.h1>
          <motion.p
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join us in helping those in need and creating a better future.
          </motion.p>
          <motion.div className="flex gap-4">
            <button className="btn btn-primary hover:text-black">Get Involved</button>
            <button className="btn bg-orange-600 hover:text-white">Donate Now</button>
          </motion.div>
        </div>
        <motion.div className="flex-1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* <img 
            src="https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/25/2019/05/SU4SW_LOGO-400x300.jpg" 
            alt="Social Work" 
            className="rounded-lg shadow-lg"
          /> */}

          <figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-orange-200 text-primary-content grid place-content-center text-5xl font-black">
      CHOWMUHANI IDEAL CLUB
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-base-200 grid place-content-center text-5xl font-black">CHOWMUHANI IDEAL CLUB</div>
  </div>
  <div className="diff-resizer"></div>
</figure>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-blue-600">500+</h2>
          <p>Volunteers</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-green-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-green-600">120+</h2>
          <p>Projects</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-orange-50 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-orange-600">15K+</h2>
          <p>People Helped</p>
        </motion.div>
      </motion.section>

      {/* Other sections (Mission, Causes, Contact) */}
      {/* Add similar motion wrappers for animation on scroll */}

    </div>
  );
};

export default Hero;