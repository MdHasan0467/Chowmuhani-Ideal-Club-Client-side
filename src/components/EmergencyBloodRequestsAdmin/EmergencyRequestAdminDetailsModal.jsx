import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const EmergencyRequestAdminDetailsModal = ({ admin, closeModal, updateStatus }) => {
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(0.8);
  const [adminName, setAdminName] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (admin) {
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
  }, [admin]);

  if (!admin) return null;

  const handleSubmit = () => {
    if (!adminName || !adminPhone) return alert("Admin Name & Phone required");
    updateStatus(admin.id, {
      status: "done",
      managedBy: { name: adminName, phone: adminPhone, note },
      managedAt: new Date().toLocaleString(),
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/40" onClick={closeModal}>
      <div className="bg-white rounded-xl shadow-xl p-5 w-80 max-w-full relative transform" style={{ scale }} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>

        <h3 className="text-xl font-bold mb-3">Manage Request</h3>

        <input type="text" placeholder="Admin Name" value={adminName} onChange={(e) => setAdminName(e.target.value)} className="border rounded p-2 w-full mb-2"/>
        <input type="text" placeholder="Admin Phone" value={adminPhone} onChange={(e) => setAdminPhone(e.target.value)} className="border rounded p-2 w-full mb-2"/>
        <input type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} className="border rounded p-2 w-full mb-2"/>

        <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full mt-2">Submit</button>
      </div>
    </div>
  );
};

export default EmergencyRequestAdminDetailsModal;