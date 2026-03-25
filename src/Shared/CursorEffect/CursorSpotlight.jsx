import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useEffect } from "react";

const CursorSpotlight = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 250, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 250, damping: 25 });

  const mask = useMotionTemplate`
    radial-gradient(
      300px circle at ${smoothX}px ${smoothY}px,
      rgba(255,255,255,0.15),
      rgba(0,0,0,0.9)
    )
  `;

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background: mask,
      }}
    />
  );
};

export default CursorSpotlight;