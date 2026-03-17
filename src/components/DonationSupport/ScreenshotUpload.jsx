// ScreenshotUpload.jsx
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

/**
 * ScreenshotUpload Component
 * -------------------------
 * Props:
 * - uniqueId: string, unique identifier for this card
 *
 * Features:
 * - Upload screenshot image
 * - Preview uploaded screenshot
 * - Delete uploaded screenshot
 * - Professional styled, mobile-friendly button
 */
const ScreenshotUpload = ({ uniqueId }) => {
  const [screenshot, setScreenshot] = useState(null);

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDelete = () => {
    setScreenshot(null);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {/* Upload Button */}
      <label
        htmlFor={`upload-${uniqueId}`}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white cursor-pointer select-none transition-transform duration-200 hover:from-blue-700 hover:to-indigo-700 active:scale-95"
      >
        <FaUpload />
        Upload Screenshot
      </label>

      {/* Hidden Input */}
      <input
        type="file"
        id={`upload-${uniqueId}`}
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Preview */}
      {screenshot && (
        <div className="relative mt-2">
          <img
            src={screenshot}
            alt="screenshot preview"
            className="w-28 h-28 object-cover rounded-lg border shadow"
          />
          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
            title="Delete screenshot"
          >
            <MdOutlineDeleteForever className="text-xs" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScreenshotUpload;