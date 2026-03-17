import { useEffect, useRef, useState } from "react";

/**
 * 🎯 Custom Hook: useCountUpOnView
 * --------------------------------
 * Purpose:
 * 👉 Element screen এ আসলে (visible হলে) count animation শুরু করবে
 *
 * Params:
 * end (number)      = final number (e.g. 500)
 * duration (number) = animation duration in ms (default 2000ms)
 *
 * Returns:
 * [count, ref]
 * count = animated value
 * ref   = DOM element attach করার জন্য
 */
const useCountUpOnView = (end, duration = 2000) => {
  // 🔢 current animated number
  const [count, setCount] = useState(0);

  // 📍 DOM reference (card এ attach হবে)
  const ref = useRef(null);

  // 🚫 ensure animation only runs once
  const [started, setStarted] = useState(false);

  /**
   * 👀 Intersection Observer
   * Detects when element becomes visible in viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // যদি element visible হয় এবং আগে start না হয়ে থাকে
        if (entry.isIntersecting && !started) {
          setStarted(true); // animation start trigger
        }
      },
      {
        threshold: 0.5, // 50% visible হলে trigger হবে
      }
    );

    // যদি ref attach থাকে তাহলে observe করো
    if (ref.current) observer.observe(ref.current);

    // cleanup
    return () => observer.disconnect();
  }, [started]);

  /**
   * 🎬 Animation Logic (requestAnimationFrame)
   * Smooth counting effect তৈরি করে
   */
  useEffect(() => {
    if (!started) return; // visible না হলে run হবে না

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      // ⏱️ elapsed time
      const progress = currentTime - startTime;

      // 📊 progress ratio (0 → 1)
      const progressRatio = Math.min(progress / duration, 1);

      // ✨ ease-out effect (শেষে slow হবে)
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);

      // 🔢 current value calculate
      const value = Math.floor(easeOut * end);

      setCount(value);

      // animation continue
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return [count, ref];
};

export default useCountUpOnView;