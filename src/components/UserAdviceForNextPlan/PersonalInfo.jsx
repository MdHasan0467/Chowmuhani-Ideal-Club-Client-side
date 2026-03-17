const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">ব্যক্তিগত তথ্য</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="আপনার পুরো নাম"
        className="input input-bordered w-full"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        placeholder="01*********"
        className="input input-bordered w-full"
      />

    </div>
  );
};

export default PersonalInfo;