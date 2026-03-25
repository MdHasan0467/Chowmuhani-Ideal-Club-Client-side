import { BsMessenger } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    // Main footer container
    <footer className="mt-20 py-10 px-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      
      {/* Glow background blur effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Logo / Name */}
        <h2 className="text-xl md:text-2xl font-semibold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
         Developed By: MD Hasan
        </h2>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          
          <a
            href="#"
            className="hover:scale-125 hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="hover:scale-125 hover:text-green-500 transition duration-300"
          >
            <FaWhatsappSquare />
          </a>

          <a
            href="#"
            className="hover:scale-125 hover:text-blue-400 transition duration-300"
          >
            <BsMessenger />
          </a>

        </div>

        {/* Copyright with animated underline */}
        <p className="text-sm text-gray-400 group">
          
          <a
            href="https://mdhasan-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block"
          >
            © 2026 MD Hasan

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
          </a>

        </p>

      </div>
    </footer>
  );
};

export default Footer;