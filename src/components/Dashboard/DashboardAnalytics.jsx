import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const incomeData = [
  { month: "Jan", income: 20000, expense: 12000 },
  { month: "Feb", income: 30000, expense: 15000 },
  { month: "Mar", income: 25000, expense: 18000 },
  { month: "Apr", income: 40000, expense: 25000 },
  { month: "May", income: 55000, expense: 44000 },
  { month: "Apr", income: 80000, expense: 58000 },
];

const bloodData = [
  { group: "A+", donors: 30 },
  { group: "B+", donors: 25 },
  { group: "O+", donors: 40 },
  { group: "AB+", donors: 10 },
];

const DashboardAnalytics = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">

      {/* Income vs Expense */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-4">
          Income vs Expense
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#22c55e" />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Blood Group Donors */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-4">
          Blood Group Donors
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={bloodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="donors" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DashboardAnalytics;