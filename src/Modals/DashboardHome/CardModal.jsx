import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

const CardModal = ({ card, onClose }) => {

  const modalRef = useRef();

  // Close on outside click
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Close with ESC key
  useEffect(() => {

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleOutsideClick);
    };

  }, []);

  if (!card) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      {/* Modal */}
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-[95%] max-w-lg p-6 transform transition-all duration-300 scale-100"
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-semibold text-gray-800">
            {card.title} Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Card Summary */}
        <div className="mb-4 flex items-center gap-3">

          <div className={`${card.bg} p-3 rounded-lg`}>
            {card.icon}
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Total
            </p>

            <p className="text-2xl font-bold text-gray-800">
              {card.value}
            </p>
          </div>

        </div>

        {/* Details Table */}
        {card.detailsTable && (

          <div className="overflow-x-auto">

            <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Category
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Value
                  </th>
                </tr>
              </thead>

              <tbody>

                {card.detailsTable.map((item, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 text-gray-700">
                      {item.label}
                    </td>

                    <td className="p-3 font-medium text-gray-800">
                      {item.value}
                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};

export default CardModal;