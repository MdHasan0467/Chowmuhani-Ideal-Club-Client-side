const PlanInfo = ({ formData, handleChange, wordCount }) => {

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold pt-4">পরিকল্পনা</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="শিরোনাম"
        className="input input-bordered w-full"
      />

      <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="বিস্তারিত লিখুন (১–১০০ শব্দ)"
        className="textarea textarea-bordered w-full"
      />

      <p className="text-sm text-gray-500">
        শব্দ সংখ্যা: {wordCount}/100
      </p>

    </div>
  );
};

export default PlanInfo;