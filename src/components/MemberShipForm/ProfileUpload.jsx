import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProfileUpload = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const imgRef = useRef(null);

  const handleImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleImage(file);
  };

  const removeImage = () => {
    setImage(null);
    setCroppedImage(null);
    setProgress(0);
  };

  const getCroppedImg = () => {
    if (!imgRef.current) return;
    const canvas = document.createElement("canvas");
    const imageElement = imgRef.current;

    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      imageElement,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setCroppedImage(base64Image);
    setImage(null);
  };

  const uploadImage = () => {
    if (!croppedImage) return;

    // Simulate upload progress (or replace with Cloudinary/XHR)
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold text-center mb-6">Upload Profile Photo</h2>

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex justify-center"
      >
        <div className="relative">
          {croppedImage ? (
            <img
              src={croppedImage}
              className="w-40 h-40 rounded-full object-cover border"
            />
          ) : image ? (
            <ReactCrop crop={crop} onChange={setCrop} aspect={1}>
              <img ref={imgRef} src={image} alt="crop" className="max-w-full" />
            </ReactCrop>
          ) : (
            <div className="w-40 h-40 border-2 border-dashed rounded-full flex items-center justify-center text-gray-400">
              Upload
            </div>
          )}

          {/* Upload Button */}
          <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
            <FaCamera className="text-white" />
            <input
              type="file"
              onChange={handleChange}
              accept="image/*"
              className="hidden"
            />
          </label>

          {/* Remove Button */}
          {(image || croppedImage) && (
            <button
              onClick={removeImage}
              className="absolute top-0 right-0 cursor-pointer bg-red-500 p-1 rounded-full"
            >
              <MdDelete className="text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Crop Button */}
      {image && !croppedImage && (
        <button
          onClick={getCroppedImg}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Crop Image
        </button>
      )}

      {/* Upload Button */}
      {croppedImage && (
        <button
          onClick={uploadImage}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Upload Image
        </button>
      )}

      {/* Upload Progress */}
      {progress > 0 && (
        <div className="mt-4">
          <div className="bg-gray-200 h-3 rounded">
            <div
              className="bg-blue-600 h-3 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm mt-1">{progress}%</p>
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;