import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/**
 * SuccessModal Component
 * Props:
 * - title: modal heading text
 * - message: modal body text
 * - autoClose: milliseconds to auto close + redirect
 * 
 * Features:
 * - CSS confetti animation (100 particles)
 * - Auto close after `autoClose` ms
 * - Redirect to `/thank-you`
 */
const SuccessModal = ({ title, message, autoClose = 10000 }) => {
  const navigate = useNavigate(); // react-router hook to redirect
  const [particles, setParticles] = useState([]); // store confetti particles

  // Auto close + redirect
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, autoClose);
    return () => clearTimeout(timer); // clean up
  }, [navigate, autoClose]);

  // Generate confetti particles randomly
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 100; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100 + "%", // random horizontal position
        bg: `hsl(${Math.random() * 360}, 100%, 50%)`, // random color
        size: Math.random() * 8 + 4 + "px", // random size between 4-12px
        animationDelay: Math.random() * 2 + "s", // random start time
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden">
      {/* Confetti Particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute animate-fall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.bg,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      {/* Modal Box */}
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl z-10">
        <h3 className="text-xl font-bold text-green-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <p className="text-sm text-gray-400">Redirecting shortly...</p>
      </div>

      {/* Inline CSS animation for confetti */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(300px) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          position: absolute;
          top: -10px;
          border-radius: 50%;
          animation: fall 3s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;