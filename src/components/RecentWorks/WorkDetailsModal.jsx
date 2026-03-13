import React, { useState, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize } from "react-icons/fi";

const WorkDetailsModal = ({ isOpen, onClose, work }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!isOpen || !work) return null;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % work.images.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? work.images.length - 1 : prev - 1
    );

  const toggleZoom = () => setZoom(!zoom);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextImage();
    if (touchStartX.current - touchEndX.current < -50) prevImage();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 sm:px-6 py-3 sm:py-4 bg-gray-50">
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
              {work.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">{work.date}</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleZoom}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FiMaximize className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">

          {/* Image Carousel */}
          <div
            className={`relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden ${
              zoom ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={work.images[currentIndex]}
              alt={`work-${currentIndex}`}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                zoom ? "scale-150" : "scale-100"
              }`}
              onClick={toggleZoom}
            />

            {/* Navigation Arrows */}
            {!zoom && work.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-white/70 p-2 sm:p-3 rounded-full shadow hover:bg-white"
                >
                  <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-white/70 p-2 sm:p-3 rounded-full shadow hover:bg-white"
                >
                  <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>
              </>
            )}

            {/* Thumbnails */}
            {!zoom && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center px-3">
                <div className="flex gap-2 overflow-x-auto bg-white/40 backdrop-blur-md rounded-full px-3 py-1 max-w-full">
                  {work.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`thumb-${idx}`}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg border-2 cursor-pointer ${
                        idx === currentIndex
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {work.description}
            </p>

            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline font-medium text-sm sm:text-base"
              >
                Visit External Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsModal;