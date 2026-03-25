import React, { useEffect, useState } from "react";
import { 
  FaPhone, 
  FaShareAlt, 
  FaWhatsapp, 
  FaCopy, 
  FaTimes 
} from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import EmergencyRequestAdminDetailsModal from "./EmergencyRequestAdminDetailsModal";

const EmergencyRequestAdminModal = ({
  request,
  closeModal,
  handleShare,
  handleWhatsApp,
  handleCopyLink,
  updateStatus
}) => {
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(0.8);
  const [buttonScale, setButtonScale] = useState(1);
  const [showAdminModal, setShowAdminModal] = useState(false);

  useEffect(() => {
    if (request) {
      setVisible(true);
      document.body.style.overflow = "hidden";

      let frame;
      let current = 0.8;
      let velocity = 0;
      const target = 1;
      const stiffness = 0.12;
      const damping = 0.7;

      const animate = () => {
        const force = (target - current) * stiffness;
        velocity = (velocity + force) * damping;
        current += velocity;
        setScale(current);
        if (Math.abs(velocity) > 0.001 || Math.abs(target - current) > 0.001) {
          frame = requestAnimationFrame(animate);
        } else {
          setScale(1);
        }
      };
      animate();

      return () => {
        document.body.style.overflow = "auto";
        cancelAnimationFrame(frame);
      };
    }
  }, [request]);

  if (!request) return null;

  const status = request.status || "pending";
  const requestUrl = `${window.location.origin}/request/${request.id}`;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => closeModal(), 200);
  };

  const handleButtonHover = () => setButtonScale(1.05);
  const handleButtonLeave = () => setButtonScale(1);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 bg-black/40`}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-5 w-80 max-w-full relative transform"
        style={{ scale: scale, transition: "opacity 0.2s linear" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>

        {/* Request Details */}
        <h3 className="text-xl font-bold mb-3">{request.patient}</h3>
        <div className="text-left text-sm space-y-1 mb-4">
          <p><strong>Gender:</strong> {request.gender}</p>
          <p><strong>Blood Group:</strong> {request.blood}</p>
          <p><strong>Hospital:</strong> {request.hospitalName}</p>
          <p><strong>Location:</strong> {request.hospitalLocation}</p>
          <p><strong>Bags:</strong> {request.bags}</p>
          <p><strong>Priority:</strong> 
            <span className={`ml-1 px-2 py-0.5 rounded-full ${
              request.priority === "Critical" ? "bg-red-500 text-white" :
              request.priority === "Urgent" ? "bg-yellow-400 text-black" :
              "bg-green-500 text-white"
            }`}>{request.priority}</span>
          </p>
          <p><strong>Guardian:</strong> {request.guardian} ({request.phone})</p>
          <p><strong>Date & Time:</strong> {request.date} {request.time}</p>
        </div>

        {/* Pending → Show Manage Button */}
        {status === "pending" && (
          <div>
            <button
            onClick={() => setShowAdminModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-4"
          >
            Managed By
          </button>

          
        {/* Share Buttons & QR */}
        <div className="mt-2 flex flex-wrap gap-2 justify-center">
          <a href={`tel:${request.phone}`} className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center gap-1">
            <FaPhone /> Call
          </a>
          <button onClick={() => handleShare(request)} className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center gap-1">
            <FaShareAlt /> Share
          </button>
          <button onClick={() => handleWhatsApp(request)} className="bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
            <FaWhatsapp /> WhatsApp
          </button>
          <button onClick={() => handleCopyLink(request)} className="bg-gray-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
            <FaCopy /> Copy Link
          </button>
        </div>

        <div className="flex justify-center w-full mt-4">
          <QRCodeCanvas value={requestUrl} size={120} />
        </div>
          </div>

        )}

        {/* Done → Show Managed By info */}
        {status === "done" && (
          <div className="mb-4">
            <p><strong>Status:</strong> Done</p>
            <p>
              <strong>Managed By:</strong> {request.managedBy?.name}
            </p>
            <p><strong>Phone:</strong> {request.managedBy?.phone}</p>
            <p><strong>Managed At:</strong> {request.managedAt}</p>
          </div>
        )}

        {/* Nested Admin Modal */}
        <EmergencyRequestAdminDetailsModal
          admin={showAdminModal ? request : null} // Send entire request for pending
          closeModal={() => setShowAdminModal(false)}
          updateStatus={updateStatus}
        />

        <button onClick={handleClose} className="mt-4 text-red-500 font-medium w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default EmergencyRequestAdminModal;