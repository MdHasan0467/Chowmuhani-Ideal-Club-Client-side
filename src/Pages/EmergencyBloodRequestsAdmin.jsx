import { useState, useMemo } from "react";
import { FaPhone, FaHospital, FaTint, FaSortUp, FaSortDown, FaCopy } from "react-icons/fa";

const requestsData = [
  {
    id: 1,
    patient: "Rahim Ahmed",
    gender: "Male",
    blood: "A+",
    hospitalName: "Dhaka Medical College Hospital",
    hospitalLocation: "Dhanmondi, Dhaka",
    bags: 2,
    date: "2026-03-25",
    time: "10:00 AM",
    guardian: "Karim Uddin",
    phone: "01712345678",
    priority: "Critical",
  },
  {
    id: 2,
    patient: "Sumaiya Akter",
    gender: "Female",
    blood: "B+",
    hospitalName: "Square Hospital",
    hospitalLocation: "Gulshan, Dhaka",
    bags: 1,
    date: "2026-03-26",
    time: "02:00 PM",
    guardian: "Nur Islam",
    phone: "01811223344",
    priority: "Urgent",
  },
  {
    id: 3,
    patient: "Hasan Mahmud",
    gender: "Male",
    blood: "B-",
    hospitalName: "United Hospital",
    hospitalLocation: "Uttara, Dhaka",
    bags: 1,
    date: "2026-03-27",
    time: "09:30 AM",
    guardian: "Abdul Jalil",
    phone: "01999887766",
    priority: "Normal",
  },
  {
    id: 4,
    patient: "IBN Hasan",
    gender: "Male",
    blood: "AB+",
    hospitalName: "United Hospital",
    hospitalLocation: "Uttara, Dhaka",
    bags: 1,
    date: "2026-03-27",
    time: "09:30 AM",
    guardian: "Abdul Jalil",
    phone: "01999887766",
    priority: "Normal",
  },
  {
    id: 5,
    patient: "Abu TAleb",
    gender: "Male",
    blood: "AB-",
    hospitalName: "United Hospital",
    hospitalLocation: "Uttara, Dhaka",
    bags: 1,
    date: "2026-03-27",
    time: "09:30 AM",
    guardian: "Abdul Jalil",
    phone: "01999887766",
    priority: "Normal",
  },
  {
    id: 6,
    patient: "Sumaiya",
    gender: "Female",
    blood: "0-",
    hospitalName: "United Hospital",
    hospitalLocation: "Uttara, Dhaka",
    bags: 1,
    date: "2026-03-27",
    time: "09:30 AM",
    guardian: "Abdul Jalil",
    phone: "01999887766",
    priority: "Normal",
  },
  {
    id: 7,
    patient: "Salma",
    gender: "Female",
    blood: "0+",
    hospitalName: "United Hospital",
    hospitalLocation: "Uttara, Dhaka",
    bags: 1,
    date: "2026-03-27",
    time: "09:30 AM",
    guardian: "Abdul Jalil",
    phone: "01999887766",
    priority: "Normal",
  },
];

const EmergencyBloodRequestsAdmin = () => {
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getPriorityStyle = (priority) => {
    if (priority === "Critical") return "bg-red-50";
    if (priority === "Urgent") return "bg-yellow-50";
    return "bg-green-50";
  };

  const filteredRequests = useMemo(() => {
    let data = requestsData
      .filter(
        (r) =>
          r.patient.toLowerCase().includes(search.toLowerCase()) ||
          r.guardian.toLowerCase().includes(search.toLowerCase())
      )
      .filter((r) => (bloodFilter ? r.blood === bloodFilter : true))
      .filter((r) => (priorityFilter ? r.priority === priorityFilter : true));

    data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

    return data;
  }, [search, bloodFilter, priorityFilter, sortAsc]);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const currentData = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Emergency Blood Requests</h2>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by patient or guardian"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/3 focus:ring-2 focus:ring-red-300"
        />
        <select
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/6 focus:ring-2 focus:ring-red-300"
        >
          <option value="">All Blood Groups</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
          <option>AB+</option>
          <option>A-</option>
          <option>B-</option>
          <option>O-</option>
          <option>AB-</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/6 focus:ring-2 focus:ring-red-300"
        >
          <option value="">All Priorities</option>
          <option>Normal</option>
          <option>Urgent</option>
          <option>Critical</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full table-fixed text-sm">
          <thead className="bg-gray-100 text-gray-600 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left w-36">Patient</th>
              <th className="px-4 py-3 text-left w-16">Gender</th>
              <th className="px-4 py-3 text-left w-16">Blood</th>
              <th className="px-4 py-3 text-left w-48">Hospital</th>
              <th className="px-4 py-3 text-left w-48">Location</th>
              <th className="px-4 py-3 text-left w-36 cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
                Date & Time {sortAsc ? <FaSortUp className="inline" /> : <FaSortDown className="inline" />}
              </th>
              <th className="px-4 py-3 text-left w-16">Bags</th>
              <th className="px-4 py-3 text-left w-24">Priority</th>
              <th className="px-4 py-3 text-left w-40">Guardian</th>
              <th className="px-4 py-3 text-left w-36">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((req) => (
              <tr key={req?.id} className={`border-t hover:shadow-md transition-shadow ${getPriorityStyle(req?.priority)}`}>
                <td className="px-4 py-3 wrap-break-word">{req?.patient}</td>
                <td className="px-4 py-3">{req?.gender}</td>
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        <span className="mt-1">
                            <FaTint className="text-red-500" /> 
                        </span> 
                        <span>{req?.blood}</span> 
                    </p>
                </td> 
                <td className="px-4 py-3 items-center wrap-break-word"> 
                    <p className="flex gap-1"> 
                        <span className="mt-1">
                            <FaHospital />
                        </span> 
                        <span>{req?.hospitalName}</span> 
                    </p> 
                </td>
                <td className="px-4 py-3 wrap-break-word">{req?.hospitalLocation}</td>
                <td className="px-4 py-3">
                  {req?.date}
                  <div className="text-gray-400 text-xs">{req?.time}</div>
                </td>
                <td className="px-4 py-3">{req?.bags}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityStyle(req?.priority)}`}>
                    {req?.priority}
                  </span>
                </td>
                <td className="px-4 py-3 wrap-break-word flex justify-between items-center">
                  <span>
                    {req?.guardian}
                    <div className="text-gray-400 text-xs">{req?.phone}</div>
                  </span>
                  <button onClick={() => copyToClipboard(req?.phone)} className="text-gray-500 hover:text-gray-700 ml-2">
                    <FaCopy />
                  </button>
                </td>
                <td className="px-4 py-3 flex-wrap gap-2">
                  <a
                    href={`tel:${req?.phone}`}
                    className="bg-green-500 text-white px-3 py-1 rounded-md text-xs hover:bg-green-600 flex justify-center items-center gap-1"
                  >
                    <span><FaPhone /></span>
                    <span>Call</span>
                  </a>
                  <button className="bg-blue-500 text-white px-3 py-1 mt-1 rounded-md text-xs hover:bg-blue-600">
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4">
        {currentData.map((req) => (
          <div key={req.id} className={`bg-white shadow rounded-lg p-4 ${getPriorityStyle(req.priority)}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-lg">{req.patient}</span>
              <span className="text-sm">{req.date} {req.time}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="flex items-center gap-1"><FaTint className="text-red-500" /> {req.blood}</span>
              <span className="flex items-center gap-1"><FaHospital /> {req.hospitalName}</span>
              <span>Bags: {req.bags}</span>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full">{req.priority}</span>
            </div>
            <div className="text-sm mb-2">
              Guardian: {req.guardian} ({req.phone}) 
              <button onClick={() => copyToClipboard(req.phone)} className="text-gray-500 hover:text-gray-700 ml-2">
                <FaCopy />
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${req.phone}`}
                className="bg-green-500 text-white px-3 py-1 rounded-md text-xs hover:bg-green-600 flex items-center gap-1"
              >
                <FaPhone /> Call
              </a>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-600">
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === i + 1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmergencyBloodRequestsAdmin;