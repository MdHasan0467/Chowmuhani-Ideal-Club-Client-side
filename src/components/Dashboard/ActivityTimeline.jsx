const ActivityTimeline = ({ activities }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 mt-6">

      <h3 className="font-semibold mb-4">
        Activity Timeline
      </h3>

      <div className="space-y-4">

        {activities.map((item) => (
          <div
            key={item.id}
            className="border-l-4 border-blue-500 pl-4"
          >
            <p className="font-medium">{item.activity}</p>
            <p className="text-sm text-gray-500">
              {item.user} • {item.date}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ActivityTimeline;