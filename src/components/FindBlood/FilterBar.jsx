import BloodMultiSelect from "./BloodMultiSelect";

const FilterBar = ({
  division,
  setDivision,
  district,
  setDistrict,
  upazila,
  setUpazila,
  blood,
  setBlood,
  divisions,
  districts,
  upazilas,
  resultCount,
  resetPagination,
  search,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">

      {/* 🏷️ Filter Title + Result Count */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">🎯 ফিল্টার</h2>
        {!search && (
          <span className="text-sm text-gray-500">{resultCount} জন পাওয়া গেছে</span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

        {/* Division */}
        <select
          className="select select-bordered w-full"
          value={division}
          onChange={(e) => {
            setDivision(e.target.value);
            setDistrict("");
            setUpazila("");
            resetPagination();
          }}
        >
          <option value="">বিভাগ</option>
          {divisions?.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* District */}
        <select
          className="select select-bordered w-full"
          value={district}
          disabled={!division}
          onChange={(e) => {
            setDistrict(e.target.value);
            setUpazila("");
            resetPagination();
          }}
        >
          <option value="">জেলা</option>
          {districts?.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* Upazila */}
        <select
          className="select select-bordered w-full"
          value={upazila}
          disabled={!district}
          onChange={(e) => {
            setUpazila(e.target.value);
            resetPagination();
          }}
        >
          <option value="">উপজেলা</option>
          {upazilas?.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>

        {/* Blood MultiSelect */}
        <BloodMultiSelect
          selected={blood}
          setSelected={(values) => {
            setBlood(values);
            resetPagination();
          }}
        />

      </div>
    </div>
  );
};

export default FilterBar;