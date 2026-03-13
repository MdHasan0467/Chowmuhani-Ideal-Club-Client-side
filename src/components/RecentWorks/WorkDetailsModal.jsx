import React, { useState, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize } from "react-icons/fi";

const WorkDetailsModal = ({ isOpen, onClose, work }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!isOpen || !work) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % work.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? work.images.length - 1 : prev - 1));
  const toggleZoom = () => setZoom(!zoom);

  const handleTouchStart = (e) => touchStartX.current = e.touches[0].clientX;
  const handleTouchMove = (e) => touchEndX.current = e.touches[0].clientX;
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextImage();
    if (touchStartX.current - touchEndX.current < -50) prevImage();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4 transition-opacity">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] transform transition-transform duration-300 scale-100">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4 bg-gray-50">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{work.title}</h2>
            <p className="text-sm text-gray-500">{work.date}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={toggleZoom} className="text-gray-500 hover:text-gray-800 transition" title="Zoom">
              <FiMaximize className="w-6 h-6" />
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition" title="Close">
              <FiX className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4 overflow-auto">
          {/* Carousel */}
          <div
            className={`relative w-full h-80 sm:h-96 rounded-xl overflow-hidden ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={work.images[currentIndex]}
              alt={`work-${currentIndex}`}
              className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? "scale-150" : "scale-100"}`}
              onClick={toggleZoom}
            />

            {/* Navigation arrows */}
            {!zoom && work.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-90 transition">
                  <FiChevronLeft className="w-6 h-6 text-gray-800"/>
                </button>
                <button onClick={nextImage} className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-90 transition">
                  <FiChevronRight className="w-6 h-6 text-gray-800"/>
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            {!zoom && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white bg-opacity-30 rounded-full px-3 py-1">
                {work.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    className={`w-12 h-12 object-cover rounded-lg border-2 ${idx === currentIndex ? "border-blue-500" : "border-transparent"} cursor-pointer`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-gray-600 text-base">{work.description}</p>
            {work.link && (
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">
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