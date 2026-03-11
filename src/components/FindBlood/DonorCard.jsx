const DonorCard = ({ donor, openModal }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 text-center relative hover:shadow-lg transition">

      <img
        src={donor.image}
        alt=""
        className="w-20 h-20 rounded-full mx-auto"
      />

      <h3 className="font-bold mt-3">
        {donor.name}
      </h3>

      <p className="text-gray-500 text-sm">
        📍 {donor.district}
      </p>

      <span className="badge badge-error mt-2">
        {donor.blood}
      </span>

      <p className="text-sm mt-2">
        📞 {donor.mobile}
      </p>

      <button
        onClick={() => openModal(donor)}
        className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full"
      >
        i
      </button>

      <a
        href={`tel:${donor.mobile}`}
        className="btn btn-sm bg-[#ec6737] text-white mt-3"
      >
        Call
      </a>

    </div>
  );
};

export default DonorCard;