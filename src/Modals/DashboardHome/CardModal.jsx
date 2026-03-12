// CardModal.jsx
import { FiX } from "react-icons/fi";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 relative shadow-lg overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-4">{card.title}</h2>

        {/* Table */}
        {card.detailsTable && card.detailsTable.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-gray-600">Label</th>
                  <th className="p-3 text-left text-gray-600">Value</th>
                </tr>
              </thead>
              <tbody>
                {card.detailsTable.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{row.label}</td>
                    <td className="p-3">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-700">{card.details}</p>
        )}
      </div>
    </div>
  );
};

export default CardModal;