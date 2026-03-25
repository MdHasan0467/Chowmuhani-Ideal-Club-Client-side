import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const NUM_TRAILS = 6; // trailing blobs
const NUM_SPARKLES = 8; // max sparkles at a time

const UltimateCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 600, damping: 45 });
  const smoothY = useSpring(y, { stiffness: 600, damping: 45 });

  const [trails, setTrails] = useState(Array(NUM_TRAILS).fill({ x: 0, y: 0 }));
  const [sparkles, setSparkles] = useState([]);

  // Mouse movement
  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  // Update trails
  useEffect(() => {
    const unsubX = smoothX.onChange((latestX) => {
      setTrails((prev) => {
        const newTrails = [{ x: latestX, y: smoothY.get() }, ...prev];
        return newTrails.slice(0, NUM_TRAILS);
      });
    });
    const unsubY = smoothY.onChange((latestY) => {
      setTrails((prev) => {
        const newTrails = [{ x: smoothX.get(), y: latestY }, ...prev];
        return newTrails.slice(0, NUM_TRAILS);
      });
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [smoothX, smoothY]);

  // Sparkles effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sparkles.length >= NUM_SPARKLES) return;
      const sparkle = {
        id: Math.random().toString(36).substr(2, 9),
        x: smoothX.get() + (Math.random() - 0.5) * 80,
        y: smoothY.get() + (Math.random() - 0.5) * 80,
        scale: 0.5 + Math.random() * 0.5,
        opacity: 1,
      };
      setSparkles((prev) => [...prev, sparkle]);
      // remove sparkle after fade
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 500);
    }, 80);
    return () => clearInterval(interval);
  }, [smoothX, smoothY, sparkles]);

  return (
    <>
      {/* Main cursor aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-300/30 via-amber-400/20 to-transparent blur-3xl z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing blobs */}
      {trails.map((trail, idx) => (
        <motion.div
          key={idx}
          className="pointer-events-none fixed top-0 left-0 w-20 h-20 rounded-full bg-amber-400/25 blur-2xl z-[9998]"
          style={{
            x: trail.x,
            y: trail.y,
            translateX: "-50%",
            translateY: "-50%",
            opacity: (NUM_TRAILS - idx) / NUM_TRAILS,
            scale: 1 - idx * 0.1,
            rotate: idx * 15,
          }}
        />
      ))}

      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-yellow-300 rounded-full z-[10000]"
            style={{
              x: s.x,
              y: s.y,
              scale: s.scale,
            }}
            initial={{ opacity: 1, scale: s.scale }}
            animate={{ opacity: 0, scale: s.scale * 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default UltimateCursor;