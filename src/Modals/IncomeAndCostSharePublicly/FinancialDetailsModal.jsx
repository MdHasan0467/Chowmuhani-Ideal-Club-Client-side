import React from "react";

const FinancialDetailsModal = ({ title, data, close }) => {

  let balance = 0;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[95%] md:w-[750px] rounded-xl shadow-lg p-6 max-h-[80vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            {title}
          </h2>

          <button
            onClick={close}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* Head */}
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Description</th>
                <th className="p-3">Type</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3 text-right">Balance</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-sm">

              {data.map((item) => {

                if (item.type === "Income") {
                  balance += item.amount;
                } else {
                  balance -= item.amount;
                }

                return (
                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-3 text-gray-600">
                      {item.date}
                    </td>

                    <td className="p-3 font-medium text-gray-700">
                      {item.title}
                    </td>

                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.type === "Income"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td
                      className={`p-3 text-right font-semibold ${
                        item.type === "Income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ৳ {item.amount.toLocaleString()}
                    </td>

                    {/* Balance */}
                    <td className="p-3 text-right font-semibold text-blue-600">
                      ৳ {balance.toLocaleString()}
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default FinancialDetailsModal;