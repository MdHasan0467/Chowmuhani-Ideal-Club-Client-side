import { motion, useMotionValue, useSpring } from "motion/react";
import VolunteerCTA from "./VolunteerCTA";
import MoneyIcon from "../../IconSVG/MoneyHandToHand.svg";
import MoneyIcon2 from "../../IconSVG/MoneyBigBag.svg";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  // Magnetic cursor effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    // proportional magnetic effect
    x.set((dx / rect.width) * 30);
    y.set((dy / rect.height) * 30);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="px-4 md:px-16 py-10 pt-28 md:pt-32 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.h1
            className="text-2xl md:text-5xl font-bold mb-4 text-blue-600"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
          >
            এটি একটি অরাজনৈতিক এবং সামাজিক সংগঠন।
          </motion.h1>

          <motion.p
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            মানুষের সেবা করাই আমাদের একমাত্র লক্ষ্য
          </motion.p>

          <motion.p
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            আমাদের প্রতিটি কাজ হোক একমাত্র আল্লাহ কে রাজি খুশি করার জন্য।
          </motion.p>

          {/* Donate Button */}
     <div className="border border-gray-100 bg-white/60 p-4 rounded-full">
        <motion.div
          className="w-full flex justify-center"
          style={{ x: springX, y: springY }}
        >
          <motion.a
            ref={ref}
            href="#donateTaka"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden w-full md:w-auto flex items-center gap-3 px-7 py-3.5 
              transition-all duration-300 bg-white text-gray-800 font-semibold rounded-full
              shadow-[0_0_15px_rgba(255,255,255,0.5),0_0_25px_rgba(0,0,255,0.15)]"
          >
            {/* Shine */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 70%)",
                transform: "skewX(-25deg)",
                filter: "blur(8px)",
              }}
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        
            {/* Ripple Effect */}
            <motion.span
              className="absolute w-3 h-3 bg-blue-300/50 rounded-full"
              initial={{ scale: 0, opacity: 0.7 }}
              whileTap={{ scale: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
        
            {/* Left Icon */}
            <motion.img
              src={MoneyIcon}
              alt="money"
              className="w-7 h-7 relative z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
        
            {/* Text */}
            <span className="relative z-10 tracking-wide">মানব সেবায় সহযোগিতা করুন</span>
        
            {/* Right Icon */}
            <motion.img
              src={MoneyIcon2}
              alt="Money Bag"
              className="w-7 h-7 relative z-10"
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
     </div>
          {/* Volunteer Button */}
          <VolunteerCTA />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;