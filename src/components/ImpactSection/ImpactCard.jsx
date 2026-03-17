import useCountUpOnView from "../../Hooks/useCountUpOnView";

/**
 * 🧩 Component: ImpactCard
 * --------------------------------
 * Single stat card (icon + number + label)
 *
 * Props:
 * icon  = React icon
 * end   = final count number
 * label = description text
 * color = icon text color
 * bg    = icon background color
 */
const ImpactCard = ({ icon, end, label, color, bg }) => {
  // 🎯 hook থেকে animated count + ref নিচ্ছি
  const [count, ref] = useCountUpOnView(end);

  return (
    <div
      ref={ref} // 👈 observer attach করা হচ্ছে
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
    >
      {/* 🔵 Icon container */}
      <div
        className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${bg} ${color} text-2xl`}
      >
        {icon}
      </div>

      {/* 🔢 Animated Number */}
      <h3 className="text-2xl font-bold mt-4 text-gray-800">
        {count}+
      </h3>

      {/* 📝 Label */}
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  );
};

export default ImpactCard;