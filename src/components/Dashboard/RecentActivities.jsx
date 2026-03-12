const RecentActivities = ({ recentActivities }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-gray-600">Activity</th>
              <th className="p-4 text-left text-gray-600">User</th>
              <th className="p-4 text-left text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">{item.activity}</td>
                <td className="p-4">{item.user}</td>
                <td className="p-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;