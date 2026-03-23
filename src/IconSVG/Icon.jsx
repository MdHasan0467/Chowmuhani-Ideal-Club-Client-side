// Icon.jsx
import React from "react";

/**
 * 🔹 Reusable SVG Icon component
 * @param {string} name - icon name (home, bloodRequest, donate, support, member)
 * @param {string} className - tailwind classes
 */
const Icon = ({ name, className }) => {
  switch (name) {
    case "home":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.75z" />
        </svg>
      );
    case "bloodRequest":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z" />
        </svg>
      );
    case "donate": // LOVE
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3a5.5 5.5 0 0 1 4.5 2.36A5.5 5.5 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "moneyBag":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Bag Top */}
          <path d="M9 3h6l-1.5 3h-3L9 3z" />
    
          {/* Knot */}
          <path d="M10 6h4a2 2 0 0 1 2 2v1H8V8a2 2 0 0 1 2-2z" />
    
          {/* Bag Body */}
          <path d="M12 9c-4.5 0-7 2.5-7 6a7 7 0 0 0 14 0c0-3.5-2.5-6-7-6z" />
    
          {/* Taka Symbol */}
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="6"
            fill="white"
            fontWeight="bold"
          >
            ৳
          </text>
        </svg>
      );
    case "support": 
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.25 3.75 9.5 9 10 5.25-.5 9-4.75 9-10V5l-9-4z" />
        </svg>
      );
    case "member":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 14c2.67 0 8 1.34 8 4v2H7v-2c0-2.66 5.33-4 8-4zm-3-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      );
      case "addMember":
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      {/* Person silhouette */}
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path d="M7 20v-2c0-2.21 4.03-4 9-4s9 1.79 9 4v2H7z" />

      {/* Plus sign further right so it doesn't touch anything else */}
      <g transform="translate(3.5,0)"> 
        <path d="M19 7h-2V5h-2v2h-2v2h2v2h2v-2h2V7z" />
      </g>
    </svg>
  );
      case "dashboard":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      );
      case "bloodDonor":
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3a5.5 5.5 0 0 1 4.5 2.36A5.5 5.5 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
case "about":
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
               10-4.48 10-10S17.52 2 12 2zm0 18
               c-4.41 0-8-3.59-8-8s3.59-8 8-8
               8 3.59 8 8-3.59 8-8 8z" />
      <path d="M11 10h2v6h-2zm0-4h2v2h-2z" />
    </svg>
  );
  case "whatsapp":
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill="currentColor"
    >
      <path d="M380.9 97.1C339-2.9 258.1-19.8 187.6 9.5 128.6 35.4 85 85 60.5 140.7 26 207.2 21.6 282.7 50.1 346.1c19 44.1 50 80 92.6 103.2 36.7 19.5 77.7 26.2 117.1 19.3 54.2-9.5 99.3-40.9 135-90.5 35.7-49.7 49.1-112.6 38.7-173.8-5.6-32.2-18.8-61.2-37.6-86.2zm-45.2 182.5c-4.9 13.5-24 26.1-33.1 27.7-8.5 1.5-19.1.7-35-7.2-15.5-7.7-26.5-12.3-38.8-25.1-12.3-12.8-16.6-19.3-23.3-31.9-6.8-12.7-7.2-18.5-7.2-27.2 0-8.7 4.5-13 8-17.6 4.1-5.2 9-6.7 12-7.5 3.1-.9 6.2-.7 8.7-.7 2.5 0 5.5-.3 8.4.3 2.8.6 5.7 2.1 8.2 4.3 2.5 2.2 4.2 4.8 5.3 6.2 1.1 1.4.9 2.5 2 3.9.9 1.1 1.9 2.4 2.7 3.2.9.9 1.7 1.6 2.5 2.5.8.9 1.5 1.7 2.1 2.6.7 1 1.3 1.9 1.8 2.7.5.8 1.1 1.7 1.6 2.5.5.8.9 1.5 1.2 2.3.3.8.7 1.5 1 2.3.2.8.4 1.5.5 2.3.1.8.1 1.5 0 2.3-.1.8-.3 1.6-.5 2.3-.2.8-.5 1.5-.9 2.3z"/>
    </svg>
  );
    default:
      return null;
  }
};

export default Icon;