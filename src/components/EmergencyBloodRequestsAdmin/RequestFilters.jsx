// Filters Component
// সার্চ, ব্লাড গ্রুপ, প্রায়োরিটি ফিল্টার আলাদা component হিসেবে রাখলে মূল ফাইল পরিষ্কার হয়।

const RequestFilters = ({ search, setSearch, bloodFilter, setBloodFilter, priorityFilter, setPriorityFilter }) => (
  <div className="flex flex-col md:flex-row gap-3 mb-6">
    <input
      type="text"
      placeholder="Patient বা Guardian নাম দিয়ে সার্চ করুন"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg p-2 w-full md:w-1/3 focus:ring-2 focus:ring-red-300"
    />
    <select
      value={bloodFilter}
      onChange={(e) => setBloodFilter(e.target.value)}
      className="border rounded-lg p-2 w-full md:w-1/6 focus:ring-2 focus:ring-red-300"
    >
      <option value="">সব ব্লাড গ্রুপ</option>
      <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
      <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
    </select>
    <select
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value)}
      className="border rounded-lg p-2 w-full md:w-1/6 focus:ring-2 focus:ring-red-300"
    >
      <option value="">সব Priority</option>
      <option>Normal</option><option>Urgent</option><option>Critical</option>
    </select>
  </div>
);

export default RequestFilters;