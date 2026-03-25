// Mobile Card Component
// মোবাইল ভিউর জন্য আলাদা component।

import { FaTint, FaHospital } from "react-icons/fa";

const RequestMobileCard = ({ req, getRowStyle, getActionButton }) => (
  <div className={`shadow rounded-lg p-4 ${getRowStyle(req)}`}>
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-lg">{req.patient}</span>
      <span className="text-sm">{req.date} {req.time}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-1">
      <span className="flex items-center gap-1"><FaTint className="text-red-500" /> {req.blood}</span>
      <span className="flex items-center gap-1"><FaHospital /> {req.hospitalName}</span>
      <span className="flex items-center gap-1"><FaHospital /> {req.hospitalLocation}</span>
      <span>Bags: {req.bags}</span>
      <span className="px-2 py-0.5 text-xs font-medium rounded-full">{req.priority}</span>
    </div>
    {getActionButton(req)}
  </div>
);

export default RequestMobileCard;