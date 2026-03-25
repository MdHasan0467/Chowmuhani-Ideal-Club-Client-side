// এটি শুধুমাত্র summary card দেখাবে (Total, Done, Pending, Expired)। আলাদা ফাইলে রাখলে মূল component ছোট হয়।


import { useState, useEffect } from "react";

const SummaryCard = ({ item }) => {
  const [count, setCount] = useState(item.value);

  useEffect(() => {
    let start = 0;
    const end = item.value;
    if (start === end) { setCount(end); return; }

    const duration = 500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [item.value]);

  const colorMap = {
    gray: "border-gray-400 text-gray-700 dark:text-gray-300",
    green: "border-green-500 text-green-600",
    blue: "border-blue-500 text-blue-600",
    red: "border-red-500 text-red-600"
  };

  return (
    <div className={`relative bg-white shadow-md rounded-xl p-4 border-l-4 ${colorMap[item.color]} transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500">{item.title}</p>
        <span className="text-xl">{item.icon}</span>
      </div>
      <h3 className="text-2xl font-bold">{count}</h3>
      <p className="text-xs mt-1 text-gray-400">{item.percent}% of total</p>
      <div className="mt-2 h-1.5 w-full bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-current transition-all duration-700" style={{ width: `${item.percent}%` }} />
      </div>
    </div>
  );
};

export default SummaryCard;