import { motion } from "motion/react";
import VolunteerCTA from "./VolunteerCTA";
import MoneyIcon from "../../IconSVG/MoneyHandToHand.svg"
import MoneyIcon2 from "../../IconSVG/MoneyBigBag.svg"

const Hero = () => {
  

  return (
    <div className="px-4 md:px-16 py-10 pt-28 md:pt-32">
      {/* Hero Section - Home Left Side Component */}
      <motion.div
        className="items-center gap-10 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1">
          {/* Text */}
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

          {/* Donation Button */}
          <motion.div className="flex gap-4">
            <a
              href="#donateTaka"
              className="btn bg-amber-300 hover:bg-amber-500 w-full flex items-center gap-2 px-4 py-2 rounded"
            >
              <img src={MoneyIcon} alt="money" className="w-7 h-7" />
              মানব সেবায় সহযোগিতা করুন
              <img src={MoneyIcon2} alt="Money Bag" className="w-7 h-7" />
            </a>
          </motion.div>

          {/* Volunteer Button */}
          <VolunteerCTA />
        </div>
         {/* Right Side Carousel */}
        <motion.div className="flex-1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}


        >
          {/* <Carousel /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;