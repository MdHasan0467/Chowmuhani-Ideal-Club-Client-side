import { useState, useEffect } from "react";
import bdLocations from "../../data/bdLocations";

const AddressInfo = ({ formData, setFormData }) => {
  const [division, setDivision] = useState(formData.division || "");
  const [district, setDistrict] = useState(formData.district || "");
  const [thana, setThana] = useState(formData.thana || "");

  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);

  // Update districts when division changes
  useEffect(() => {
    if (division) {
      const selectedDiv = bdLocations.find(d => d[division]);
      setDistricts(selectedDiv ? Object.keys(selectedDiv[division]) : []);
      setDistrict("");
      setThana("");
      setThanas([]);
      setFormData(prev => ({ ...prev, division, district: "", thana: "" }));
    }
  }, [division]);

  // Update thanas when district changes
  useEffect(() => {
    if (division && district) {
      const selectedDiv = bdLocations.find(d => d[division]);
      const thanaList = selectedDiv[division][district] || [];
      setThanas(thanaList);
      setThana("");
      setFormData(prev => ({ ...prev, district, thana: "" }));
    }
  }, [district, division]);

  // Update formData when thana changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, thana }));
  }, [thana]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">বর্তমান ঠিকানা</h2>
      <div className="grid md:grid-cols-2 gap-4">

        {/* Division */}
        <select
          className="input input-bordered w-full"
          required
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        >
          <option value="">বিভাগ নির্বাচন করুন</option>
          {bdLocations.map(d => Object.keys(d)).flat().map(div => (
            <option key={div} value={div}>{div}</option>
          ))}
        </select>

        {/* District */}
        <select
          className="input input-bordered w-full"
          required
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          disabled={!division}
        >
          <option value="">জেলা নির্বাচন করুন</option>
          {districts.map(dist => (
            <option key={dist} value={dist}>{dist}</option>
          ))}
        </select>

        {/* Thana */}
        <select
          className="input input-bordered w-full"
          required
          value={thana}
          onChange={(e) => setThana(e.target.value)}
          disabled={!district}
        >
          <option value="">থানা নির্বাচন করুন</option>
          {thanas.map(th => (
            <option key={th} value={th}>{th}</option>
          ))}
        </select>

        {/* Show Union, Village, Ward, Home only when thana is selected */}
        {thana && (
          <>
            <input
              name="union"
              type="text"
              placeholder="ইউনিয়ন"
              className="input input-bordered w-full"
              value={formData.union || ""}
              onChange={(e) => setFormData({ ...formData, union: e.target.value })}
            />
            <input
              name="village"
              type="text"
              placeholder="গ্রাম"
              className="input input-bordered w-full"
              value={formData.village || ""}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
            />
            <input
              name="ward"
              type="text"
              placeholder="ওয়ার্ড"
              className="input input-bordered w-full"
              value={formData.ward || ""}
              onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
            />
            <input
              name="home"
              type="text"
              placeholder="বাড়ি নাম্বার / ঠিকানা"
              className="input input-bordered w-full"
              value={formData.home || ""}
              onChange={(e) => setFormData({ ...formData, home: e.target.value })}
            />
          </>
        )}

      </div>
    </div>
  );
};

export default AddressInfo;