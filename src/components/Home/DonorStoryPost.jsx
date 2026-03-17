import React, { useState, useRef } from "react";

const DonorStoryPost = () => {
  const [newStory, setNewStory] = useState({
    name: "",
    location: "",
    story: "",
    avatar: null,
  });

  const [storyLength, setStoryLength] = useState(0);
  const fileInputRef = useRef(null);

  // Input handler
  const handleChange = (e) => {
    setNewStory({ ...newStory, [e.target.name]: e.target.value });
    if (e.target.name === "story") setStoryLength(e.target.value.length);
  };

  // Image Upload Handlers
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNewStory({ ...newStory, avatar: ev.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNewStory({ ...newStory, avatar: ev.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newStory.name || !newStory.location || !newStory.story) return;
    alert("Story submitted successfully!");
    setNewStory({ name: "", location: "", story: "", avatar: null });
    setStoryLength(0);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
        Share Your Blood Donation Story
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newStory.name}
          onChange={handleChange}
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={newStory.location}
          onChange={handleChange}
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400"
          required
        />

        {/* Story Textarea with Counter */}
        <div className="relative">
          <textarea
            name="story"
            placeholder="Write your story..."
            value={newStory.story}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400 resize-none h-32 w-full"
            maxLength={500}
            required
          />
          <span className="absolute bottom-2 right-4 text-gray-400 text-sm">
            {storyLength}/500
          </span>
        </div>

        {/* Drag & Drop / Click Upload */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-red-400 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-red-50 transition"
          onClick={() => fileInputRef.current.click()}
        >
          <p className="text-gray-500 mb-2">Drag & Drop your image here or click to upload</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          {/* Preview */}
          {newStory.avatar && (
            <img
              src={newStory.avatar}
              alt="preview"
              className="w-32 h-32 rounded-full object-cover border-4 border-red-200 shadow-md mt-4"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
        >
          Submit Story
        </button>
      </form>
    </section>
  );
};

export default DonorStoryPost;