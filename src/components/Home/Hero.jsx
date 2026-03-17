import { motion } from "motion/react";
import Carousel from "./Carousel";
import VolunteerCTA from "./VolunteerCTA";

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
            এটি একটি অরাজনৈতিক এবং সামাজিক সংগঠন।
          </motion.h1>
          <motion.p
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            আমাদের প্রতিটি কাজ  হোক একমাত্র আল্লাহ কে রাজি খুশি করার জন্য।
          </motion.p>
          <motion.div className="flex gap-4">
            {/* <a href={'#addMember'} className="btn btn-primary hover:text-black">সদস্য হোন</a> */}
            <a href={'#donateTaka'} className="btn bg-blue-600 hover:bg-blue-800 text-white ">দান করুন</a>
          </motion.div>


          <VolunteerCTA />
        </div>



         
         {/* Right Side Carousel */}
        <motion.div className="flex-1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}


        >
          <Carousel />
        </motion.div>
      </motion.div>

      
      
      


    </div>
  );
};

export default Hero;