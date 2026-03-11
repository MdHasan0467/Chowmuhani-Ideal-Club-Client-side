const bloodGroups = [
  "A+","A-",
  "B+","B-",
  "AB+","AB-",
  "O+","O-"
];

const BloodGroupSelector = ({ blood, setBlood }) => {
  return (
    <select
      value={blood}
      onChange={(e) => setBlood(e.target.value)}
      className="select select-bordered w-full"
    >
      <option value="">Select Blood Group</option>

      {bloodGroups.map((group) => (
        <option key={group}>{group}</option>
      ))}
    </select>
  );
};

export default BloodGroupSelector;