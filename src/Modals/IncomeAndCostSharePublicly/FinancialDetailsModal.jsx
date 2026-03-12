import React from "react";

const FinancialDetailsModal = ({ title, data, close }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[90%] md:w-[600px] rounded-xl shadow-lg p-6 max-h-[80vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <button
            onClick={close}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-left">

          <thead className="border-b">
            <tr>
              <th className="py-2">Date</th>
              <th>Description</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">

                <td className="py-2 text-gray-600">
                  {item.date}
                </td>

                <td>
                  {item.title}
                </td>

                <td
                  className={`text-right font-semibold ${
                    item.type === "Income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ৳ {item.amount}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default FinancialDetailsModal;