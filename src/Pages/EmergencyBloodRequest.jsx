import React, { useState } from "react";
import { FaTint, FaHospital, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdFamilyRestroom, MdAccessTime } from "react-icons/md";

const EmergencyBloodRequest = () => {

  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    bloodGroup: "",
    hemoglobin: "",
    hospitalName: "",
    hospitalLocation: "",
    bags: "",
    requiredDate: "",
    requiredTime: "",
    guardianName: "",
    guardianNumber: "",
    priority: "Normal",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Emergency Blood Request Submitted!");
  };

  return (
    <section className="bg-red-50 py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <FaTint className="text-red-500 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Emergency Blood Request
          </h2>
          <p className="text-gray-500 mt-2">
            Fill the form below to request blood urgently.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-5"
        >

          {/* Patient Name */}
          <div>
            <label className="text-sm text-gray-600">Patient Name</label>
            <input
              type="text"
              name="patientName"
              placeholder="Enter patient name"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <BsGenderAmbiguous /> Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Blood Group */}
          <div>
            <label className="text-sm text-gray-600">Blood Group</label>
            <select
              name="bloodGroup"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB-</option>
            </select>
          </div>

          {/* Hemoglobin */}
          <div>
            <label className="text-sm text-gray-600">Hemoglobin (g/dL)</label>
            <input
              type="text"
              name="hemoglobin"
              placeholder="Example: 13.5"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            />
          </div>

          {/* Hospital Name */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaHospital /> Hospital Name
            </label>
            <input
              type="text"
              name="hospitalName"
              placeholder="Example: Dhaka Medical College Hospital"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Hospital Location */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaMapMarkerAlt /> Hospital Location
            </label>
            <input
              type="text"
              name="hospitalLocation"
              placeholder="Example: Dhanmondi, Dhaka"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Bag Quantity */}
          <div>
            <label className="text-sm text-gray-600">Bag Quantity</label>
            <input
              type="number"
              name="bags"
              placeholder="Number of blood bags"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Required Date */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaCalendarAlt /> Required Date
            </label>
            <input
              type="date"
              name="requiredDate"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Required Time */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <MdAccessTime /> Required Time
            </label>
            <input
              type="time"
              name="requiredTime"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Guardian Name */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <MdFamilyRestroom /> Guardian Name
            </label>
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian name"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Guardian Number */}
          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <FaPhone /> Guardian Number
            </label>
            <input
              type="tel"
              name="guardianNumber"
              placeholder="01XXXXXXXXX"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Priority */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Emergency Priority</label>
            <select
              name="priority"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            >
              <option>Normal</option>
              <option>Urgent</option>
              <option>Critical</option>
            </select>
          </div>

          {/* Note */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Additional Note</label>
            <textarea
              name="note"
              rows="3"
              placeholder="Write additional details..."
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-red-300"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Submit Emergency Request
          </button>

        </form>
      </div>
    </section>
  );
};

export default EmergencyBloodRequest;