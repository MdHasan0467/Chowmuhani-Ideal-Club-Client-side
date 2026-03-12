import React, { useState } from "react";
import FinancialDetailsModal from "../Modals/IncomeAndCostSharePublicly/FinancialDetailsModal";
// import FinancialDetailsModal from "./FinancialDetailsModal";

const transactions = [
  { id: 1, type: "Income", title: "Donation from Rahim Ahmed", amount: 5000, date: "10 Mar 2026" },
  { id: 2, type: "Cost", title: "Blood Donation Campaign Banner", amount: 1200, date: "09 Mar 2026" },
  { id: 3, type: "Income", title: "Donation from Karim Uddin", amount: 3000, date: "08 Mar 2026" },
  { id: 4, type: "Cost", title: "Food Distribution Program", amount: 2500, date: "07 Mar 2026" },
  { id: 5, type: "Cost", title: "Food Distribution Program", amount: 500, date: "07 Mar 2026" },
  { id: 6, type: "Income", title: "Donation from Karim Uddin", amount: 30000, date: "08 Mar 2026" },
  { id: 7, type: "Cost", title: "Food Distribution Program", amount: 500, date: "07 Mar 2026" },
  { id: 8, type: "Income", title: "Donation from Karim Uddin", amount: 10000, date: "08 Mar 2026" },
  { id: 9, type: "Cost", title: "Food Distribution Program", amount: 15000, date: "07 Mar 2026" },
  { id: 10, type: "Income", title: "Donation from Karim Uddin", amount: 30000, date: "08 Mar 2026" },
  { id: 11, type: "Cost", title: "Food Distribution Program", amount: 15000, date: "07 Mar 2026" },
  { id: 12, type: "Cost", title: "Food Distribution Program", amount: 15000, date: "07 Mar 2026" },
];

const IncomeAndCostSharePublicly = () => {

  const [modalType, setModalType] = useState(null);

  const incomeList = transactions.filter(t => t.type === "Income");
  const costList = transactions.filter(t => t.type === "Cost");

  const totalIncome = incomeList.reduce((sum, t) => sum + t.amount, 0);
  const totalCost = costList.reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalCost;

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">আর্থিক স্বচ্ছতা</h2>
          <h2 className="text-3xl font-bold">Financial Transparency</h2>

          <p className="text-gray-500 mt-2">
            আমরা সম্পূর্ণ স্বচ্ছতায় বিশ্বাস করি। আমাদের সংগঠনে প্রাপ্ত সকল অনুদান এবং করা সকল ব্যয়ের 
            তথ্য এখানে সবার জন্য প্রকাশ করা হয়েছে।
          </p>
          <p className="text-gray-500 mt-2">
            We believe in complete transparency. All donations received and 
            expenses made by our organization are publicly shared here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Income */}
          <button
            onClick={() => setModalType("income")}
            className="bg-white p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <p className="text-gray-500">Total Income</p>
            <h3 className="text-2xl font-bold text-green-600 mt-2">
              ৳ {totalIncome}
            </h3>
          </button>

          {/* Cost */}
          <button
            onClick={() => setModalType("cost")}
            className="bg-white p-6 cursor-pointer rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <p className="text-gray-500">Total Cost</p>
            <h3 className="text-2xl font-bold text-red-600 mt-2">
              ৳ {totalCost}
            </h3>
          </button>

          {/* Balance */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Current Balance</p>
            <h3 className="text-2xl font-bold text-blue-600 mt-2">
              ৳ {balance}
            </h3>
          </div>

        </div>



       {/* Transactions Table */}
<div className="bg-white shadow-md rounded-xl overflow-hidden mt-10">

  <div className="px-6 py-4 border-b">
    <h3 className="text-lg font-semibold text-gray-700">
      Financial Transactions
    </h3>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-left">

      {/* Table Head */}
      <thead className="bg-gray-100 text-sm text-gray-600">
        <tr>
          <th className="p-4">Date</th>
          <th className="p-4">Description</th>
          <th className="p-4">Type</th>
          <th className="p-4 text-right">Amount</th>
          <th className="p-4 text-right">Balance</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-sm">

        {(() => {
          let balance = 0;

          return transactions.map((item) => {

            if (item.type === "Income") {
              balance += item.amount;
            } else {
              balance -= item.amount;
            }

            return (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-4 text-gray-600">
                  {item.date}
                </td>

                <td className="p-4 font-medium text-gray-700">
                  {item.title}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      item.type === "Income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td
                  className={`p-4 text-right font-semibold ${
                    item.type === "Income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ৳ {item.amount.toLocaleString()}
                </td>

                {/* Balance Column */}
                <td className="p-4 text-right font-semibold text-blue-600">
                  ৳ {balance.toLocaleString()}
                </td>

              </tr>
            );
          });
        })()}

      </tbody>

    </table>
  </div>

</div>


      </div>

      {/* Income Modal */}
      {modalType === "income" && (
        <FinancialDetailsModal
          title="Income Details"
          data={incomeList}
          close={() => setModalType(null)}
        />
      )}

      {/* Cost Modal */}
      {modalType === "cost" && (
        <FinancialDetailsModal
          title="Cost Details"
          data={costList}
          close={() => setModalType(null)}
        />
      )}

    </section>
  );
};

export default IncomeAndCostSharePublicly;