import { useEffect, useState, useRef } from "react";

const VolunteerCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const btnRef = useRef(null);

  // 🔽 Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("volunteer-cta");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧲 Magnetic Effect (Desktop only)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // mobile disable

    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = `translate(0px, 0px) scale(1)`;
  };

  // 💧 Ripple Effect
  const handleClick = (e) => {
    const btn = btnRef.current;
    const circle = document.createElement("span");

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    btn.appendChild(circle);
  };

  return (
    <section
      id="volunteer-cta"
      className={`relative my-20 px-4 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient"></div>

      {/* ✨ Glow Effect */}
      <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 bg-purple-400"></div>

      {/* 💎 Glass Container */}
      <div className="relative text-white text-center py-14 px-6 md:px-10 rounded-3xl backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
        
        {/* 🎈 Floating Blobs */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>

        {/* 🏷 Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          স্বেচ্ছাসেবক হিসেবে যুক্ত হোন
        </h2>

        {/* 📄 Description */}
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          আমাদের সাথে যুক্ত হয়ে রক্তের প্রয়োজন এমন মানুষের পাশে দাঁড়ান।
          আপনার একটি উদ্যোগ একটি জীবন বাঁচাতে পারে।
        </p>

        {/* 🔘 Premium CTA Button */}
        <a
          href="#addMember"
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="relative inline-block bg-white/90 backdrop-blur-md text-gray-900 px-10 py-3 rounded-full font-semibold text-lg overflow-hidden group shadow-lg transition duration-300 hover:shadow-xl hover:shadow-white/30"
        >
          {/* Text */}
          <span className="relative z-10">
            এখনই যোগ দিন
          </span>

          {/* ✨ Shine Effect */}
          <span className="pointer-events-none absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
        </a>

        {/* 📝 Note */}
        <p className="text-sm text-white/70 mt-5">
          সম্পূর্ণ বিনামূল্যে • কোনো রেজিস্ট্রেশন ফি নেই
        </p>
      </div>

      {/* 🎬 Animation + Ripple CSS */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 8s ease infinite;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 600ms linear;
            background-color: rgba(255, 255, 255, 0.7);
            pointer-events: none;
          }

          @keyframes ripple-effect {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default VolunteerCTA;