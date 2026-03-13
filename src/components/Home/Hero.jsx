import { motion } from "motion/react";
import Carousel from "./Carousel";
import { Link } from "react-router";

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
            <a href={'#addMember'} className="btn btn-primary hover:text-black">সদস্য হোন</a>
            <a href={'#donateTaka'} className="btn bg-blue-600 hover:bg-blue-800 text-white ">দান করুন</a>
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



          {/* <figure className="diff aspect-16/9" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
              <div className="bg-orange-200 text-primary-content grid place-content-center text-5xl font-black">
                CHOWMUHANI IDEAL CLUB
              </div>
            </div>
            <div className="diff-item-2" role="img">
              <div className="bg-base-200 grid place-content-center text-5xl font-black">CHOWMUHANI IDEAL CLUB</div>
            </div>
            <div className="diff-resizer"></div>
          </figure> */}



          <Carousel />
        </motion.div>
      </motion.div>

      
      
      


    </div>
  );
};

export default Hero;