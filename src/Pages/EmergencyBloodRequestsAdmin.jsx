import { useState, useMemo, useEffect } from "react";
import { FaSortUp, FaSortDown, FaTint, FaHospital } from "react-icons/fa";
import EmergencyRequestAdminModal from "../components/EmergencyBloodRequestsAdmin/EmergencyRequestAdminModal";
import SummaryCard from "../components/EmergencyBloodRequestsAdmin/SummaryCard";
import RequestFilters from "../components/EmergencyBloodRequestsAdmin/RequestFilters";
import RequestTableRow from "../components/EmergencyBloodRequestsAdmin/RequestTableRow";
import RequestMobileCard from "../components/EmergencyBloodRequestsAdmin/RequestMobileCard";

// Sample data
const initialRequests = [
  { id: 1, patient: "Rahim Ahmed", gender: "Male", blood: "A+", hospitalName: "Dhaka Medical College Hospital", hospitalLocation: "Dhanmondi, Dhaka", bags: 2, date: "2026-03-25", time: "10:00 AM", guardian: "Karim Uddin", phone: "01712345678", priority: "Critical", status: "done", managedAt: "2026-03-25 11:00 AM", managedBy: { name: "Md Hasan", phone: "01869870467", note: "Shift supervisor" } },
  { id: 2, patient: "Sadia Islam", gender: "Female", blood: "B+", hospitalName: "Square Hospital", hospitalLocation: "Panthapath, Dhaka", bags: 1, date: "2026-03-26", time: "02:30 PM", guardian: "Rasel Ahmed", phone: "01876543210", priority: "Urgent", status: "pending", managedAt: null, managedBy: null },
  { id: 3, patient: "Salma Akter", gender: "Female", blood: "A+", hospitalName: "Prime Hospital", hospitalLocation: "Gulshan, Dhaka", bags: 1, date: "2026-03-27", time: "02:30 PM", guardian: "Abu Salman", phone: "01876543211", priority: "Normal", status: "done", managedAt: "2026-03-27 03:00 PM", managedBy: { name: "Rokeya Sultana", phone: "01811223344", note: "Supervisor" } },
  { id: 4, patient: "Imran Hossain", gender: "Male", blood: "O-", hospitalName: "Ibn Sina Hospital", hospitalLocation: "Dhanmondi, Dhaka", bags: 3, date: "2026-03-28", time: "11:15 AM", guardian: "Jamal Uddin", phone: "01798765432", priority: "Critical", status: "pending", managedAt: null, managedBy: null },
  { id: 5, patient: "Fatema Begum", gender: "Female", blood: "AB+", hospitalName: "United Hospital", hospitalLocation: "Mirpur, Dhaka", bags: 1, date: "2026-03-29", time: "03:45 PM", guardian: "Nayeem Ahmed", phone: "01912345678", priority: "Urgent", status: "done", managedAt: "2026-03-29 04:15 PM", managedBy: { name: "Hasan Mahmud", phone: "01822334455", note: "Supervisor" } },
  { id: 6, patient: "Hasan Mahmud", gender: "Male", blood: "B-", hospitalName: "Bangabandhu Sheikh Mujib Medical University", hospitalLocation: "Shahbagh, Dhaka", bags: 2, date: "2026-03-30", time: "09:00 AM", guardian: "Riaz Uddin", phone: "01823456789", priority: "Normal", status: "pending", managedAt: null, managedBy: null },
  { id: 7, patient: "Lina Chowdhury", gender: "Female", blood: "O+", hospitalName: "Lab Aid Hospital", hospitalLocation: "Banani, Dhaka", bags: 1, date: "2026-03-31", time: "01:00 PM", guardian: "Farhan Khan", phone: "01734567890", priority: "Critical", status: "done", managedAt: "2026-03-31 02:00 PM", managedBy: { name: "Rashed Khan", phone: "01866778899", note: "Supervisor" } },
  { id: 8, patient: "Rafiqur Rahman", gender: "Male", blood: "AB-", hospitalName: "Ibn Sina Hospital", hospitalLocation: "Dhanmondi, Dhaka", bags: 2, date: "2026-04-01", time: "04:15 PM", guardian: "Monir Hossain", phone: "01987654321", priority: "Urgent", status: "pending", managedAt: null, managedBy: null },
  { id: 9, patient: "Tahmina Akter", gender: "Female", blood: "A-", hospitalName: "Square Hospital", hospitalLocation: "Panthapath, Dhaka", bags: 1, date: "2025-04-02", time: "10:30 AM", guardian: "Salim Uddin", phone: "01756789012", priority: "Normal", status: "pending", managedAt: null, managedBy: null }, // expired example
  { id: 10, patient: "Jahidul Islam", gender: "Male", blood: "B+", hospitalName: "Apollo Hospitals Dhaka", hospitalLocation: "Uttara, Dhaka", bags: 3, date: "2026-04-03", time: "02:00 PM", guardian: "Tariq Ahmed", phone: "01834567890", priority: "Critical", status: "pending", managedAt: null, managedBy: null }
];

const EmergencyBloodRequestsAdmin = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [toast, setToast] = useState("");

  const itemsPerPage = 5;

  const isExpired = (req) => new Date(`${req.date} ${req.time}`) < new Date();

  // Summary calculation
  const summary = useMemo(() => {
    const total = requests.length;
    const done = requests.filter(r => r.status === "done").length;
    const expired = requests.filter(r => r.status !== "done" && isExpired(r)).length;
    const pending = requests.filter(r => r.status === "pending" && !isExpired(r)).length;
    return { total, done, pending, expired };
  }, [requests]);

  // Row style
  const getRowStyle = (req) => {
    const expired = isExpired(req);
    if (req.status === "done") return "bg-green-50 text-green-600";
    if (expired) return "bg-red-50 text-red-600";
    if (!expired && req.status === "pending") return "bg-blue-50 text-blue-600";
    return "";
  };

  // Action button
  const getActionButton = (req) => {
    const expired = isExpired(req);
    const color = req.status === "done" ? "green" : expired ? "red" : "blue";
    const label = req.status === "done" ? "Done" : expired ? "Expired" : "Pending";
    return (
      <button
        className={`bg-${color}-500 hover:bg-${color}-600 text-white px-3 py-1 rounded-md w-full`}
        onClick={() => setSelectedRequest(req)}
      >
        {label}
      </button>
    );
  };

  // Toast
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  // Share functions
  const createShareText = (req) =>
`🚨 জরুরি রক্ত প্রয়োজন 🚨
👤 রোগী: ${req.patient}
🩸 গ্রুপ: ${req.blood}
🏥 হাসপাতাল: ${req.hospitalName}
📍 লোকেশন: ${req.hospitalLocation}
🧪 প্রয়োজন: ${req.bags} ব্যাগ
📞 যোগাযোগ: ${req.phone}
🔗 ${window.location.origin}/request/${req.id}`;

  const handleShare = async (req) => {
    const text = createShareText(req);
    const url = `${window.location.origin}/request/${req.id}`;
    if (navigator.share) await navigator.share({ title: "Blood Request", text, url });
    else { navigator.clipboard.writeText(text); showToast("Copied for sharing!"); }
  };

  const handleWhatsApp = (req) => {
    const text = encodeURIComponent(createShareText(req));
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleCopyLink = (req) => {
    const url = `${window.location.origin}/request/${req.id}`;
    navigator.clipboard.writeText(url);
    showToast("Link copied!");
  };

  // Update status
  const updateStatus = (id, update) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, ...update } : r));
  };

  // Filtering & Sorting
  const filteredRequests = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    let data = requests
      .filter(r => r.patient.toLowerCase().includes(lowerSearch) || r.guardian.toLowerCase().includes(lowerSearch))
      .filter(r => bloodFilter ? r.blood === bloodFilter : true)
      .filter(r => priorityFilter ? r.priority === priorityFilter : true);
    data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return sortAsc ? dateA - dateB : dateB - dateA;
    });
    return data;
  }, [search, bloodFilter, priorityFilter, sortAsc, requests]);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const currentData = filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => setCurrentPage(1), [search, bloodFilter, priorityFilter]);

  return (
    <div className="p-6 relative">
      {toast && <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-5 py-2 rounded shadow-lg z-50">{toast}</div>}

      {/* Summary */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Total Requests", value: summary.total, percent: 100, color: "gray", icon: "📊" },
          { title: "Completed", value: summary.done, percent: summary.total ? Math.round((summary.done / summary.total) * 100) : 0, color: "green", icon: "✅" },
          { title: "Active Pending", value: summary.pending, percent: summary.total ? Math.round((summary.pending / summary.total) * 100) : 0, color: "blue", icon: "⏳" },
          { title: "Expired", value: summary.expired, percent: summary.total ? Math.round((summary.expired / summary.total) * 100) : 0, color: "red", icon: "⚠️" }
        ].map((item, i) => <SummaryCard key={i} item={item} />)}
      </div>

      {/* Filters */}
      <RequestFilters
        search={search} setSearch={setSearch}
        bloodFilter={bloodFilter} setBloodFilter={setBloodFilter}
        priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter}
      />

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full table-fixed text-sm">
          <thead className="bg-gray-100 text-gray-600 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Blood</th>
              <th className="px-4 py-3">Hospital</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3 cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
                Date & Time {sortAsc ? <FaSortUp /> : <FaSortDown />}
              </th>
              <th className="px-4 py-3">Bags</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Guardian</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(req => (
              <RequestTableRow key={req.id} req={req} getRowStyle={getRowStyle} getActionButton={getActionButton} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {currentData.map(req => (
          <RequestMobileCard key={req.id} req={req} getRowStyle={getRowStyle} getActionButton={getActionButton} />
        ))}
      </div>

      {/* Modal */}
      <EmergencyRequestAdminModal
        request={selectedRequest}
        closeModal={() => setSelectedRequest(null)}
        handleShare={handleShare}
        handleWhatsApp={handleWhatsApp}
        handleCopyLink={handleCopyLink}
        updateStatus={updateStatus}
      />

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}
            className={`${currentPage === i+1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"} px-3 py-1 rounded-md text-sm`}>
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmergencyBloodRequestsAdmin;