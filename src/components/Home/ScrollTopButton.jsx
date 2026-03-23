import { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollY(currentScroll);
      setScrollHeight(docHeight);

      // 👉 show/hide logic
      if (currentScroll > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 click action
  const handleClick = () => {
    if (scrollY < 50) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 👉 progress %
  const progress = scrollHeight
    ? Math.round((scrollY / scrollHeight) * 100)
    : 0;

  // 👉 circle config
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const isAtTop = scrollY < 50;

  return (
    <div
      className={`fixed bottom-18 right-5 z-50 flex flex-col items-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer bg-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Progress Circle */}
        <svg className="absolute w-14 h-14 -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="green"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.2s linear" }}
          />
        </svg>

        {/* Arrow */}
        <span className="relative text-xl font-bold text-green-600">
          {isAtTop ? "↓" : "↑"}
        </span>
      </button>

      {/* ✅ ALWAYS SHOW PROGRESS % */}
      <span className="mt-2 text-xs font-bold text-green-600 bg-white px-2 py-0.5 rounded-full shadow">
        {progress}%
      </span>

      {/* Optional Label */}
      <span className="text-[10px] text-gray-500 mt-1">
        {isAtTop ? "Go Down" : "Go Top"}
      </span>
    </div>
  );
};

export default ScrollTopButton;