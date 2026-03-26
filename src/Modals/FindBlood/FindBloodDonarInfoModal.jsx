

const FindBloodDonarInfoModal = ({ donor, closeModal }) => {
  console.log("donorTable", donor)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl w-96 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 font-bold"
        >
          X
        </button>
        <img
          src={donor.image}
          alt={donor.name}
          className="w-28 h-28 rounded-full mx-auto"
        />
        <h2 className="text-center text-xl font-bold mt-3">{donor.name}</h2>
        <p className="text-center text-gray-500">{donor.district}</p>
        <p className="text-center text-gray-500">{donor.upazila}</p>
        <p className="text-center text-red-500 font-semibold">{donor.blood}</p>
        <p className="text-center mt-2">📞 {donor.mobile}</p>
        <p className="text-center mt-2">✉️ {donor.email}</p>
        <p className="text-center mt-2">Last Donated: {donor.lastDonate}</p>
        <p className="text-center mt-2">Total Donations: {donor.totalDonate}</p>

        <div className="flex justify-center mt-4 gap-4">
          <a
            href={`tel:${donor.mobile}`}
            className="btn btn-success"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindBloodDonarInfoModal;