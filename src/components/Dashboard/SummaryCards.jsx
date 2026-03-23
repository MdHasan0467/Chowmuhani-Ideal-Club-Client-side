const SummaryCards = ({ summaryCards, openModal }) => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {summaryCards?.map((card, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-6 rounded-xl shadow-md bg-white cursor-pointer hover:shadow-xl transition"
          onClick={() => openModal(card)}
        >
          <div>
            <p className="text-gray-500">{card?.title}</p>
            <p className="text-2xl font-bold text-gray-800">{card?.value}</p>
          </div>
          <div className={`p-4 rounded-lg ${card?.bg}`}>{card?.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;