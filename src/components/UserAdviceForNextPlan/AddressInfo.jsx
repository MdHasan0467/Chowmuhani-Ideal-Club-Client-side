const AddressInfo = ({ formData, handleChange }) => {
  return (
    <div>

      <h2 className="text-xl font-bold pt-4">ঠিকানা</h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="village"
          value={formData.village}
          onChange={handleChange}
          placeholder="🏕️ গ্রাম"
          className="input input-bordered"
        />

        <input
          name="post"
          value={formData.post}
          onChange={handleChange}
          placeholder="📬 পোস্ট অফিস"
          className="input input-bordered"
        />

        <input
          name="thana"
          value={formData.thana}
          onChange={handleChange}
          placeholder="👮‍♂️ থানা"
          className="input input-bordered"
        />

        <input
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="জেলা"
          className="input input-bordered"
        />

      </div>

    </div>
  );
};

export default AddressInfo;