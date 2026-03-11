import { useState } from "react";
import bdLocations from "../../data/bdLocations";

const LocationSelector = ({ setLocation }) => {

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const selectedDivision = bdLocations.find(
    (div) => div.division === division
  );

  const districts = selectedDivision ? selectedDivision.districts : [];

  const selectedDistrict = districts.find(
    (dist) => dist.name === district
  );

  const upazilas = selectedDistrict ? selectedDistrict.upazilas : [];

  const handleDivision = (e) => {
    setDivision(e.target.value);
    setDistrict("");
    setUpazila("");
  };

  const handleDistrict = (e) => {
    setDistrict(e.target.value);
    setUpazila("");
  };

  const handleUpazila = (e) => {
    setUpazila(e.target.value);

    setLocation({
      division,
      district,
      upazila: e.target.value
    });
  };

  return (
    <div className="space-y-3">

      {/* Division */}
      <select
        value={division}
        onChange={handleDivision}
        className="select select-bordered w-full"
      >
        <option value="">Select Division</option>

        {bdLocations.map((div) => (
          <option key={div.division}>
            {div.division}
          </option>
        ))}
      </select>

      {/* District */}
      <select
        value={district}
        onChange={handleDistrict}
        className="select select-bordered w-full"
        disabled={!division}
      >
        <option value="">Select District</option>

        {districts.map((dist) => (
          <option key={dist.name}>
            {dist.name}
          </option>
        ))}
      </select>

      {/* Upazila */}
      <select
        value={upazila}
        onChange={handleUpazila}
        className="select select-bordered w-full"
        disabled={!district}
      >
        <option value="">Select Upazila</option>

        {upazilas.map((upz) => (
          <option key={upz}>
            {upz}
          </option>
        ))}
      </select>

    </div>
  );
};

export default LocationSelector;