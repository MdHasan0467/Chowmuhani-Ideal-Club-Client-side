const FormSubmit = ({ success }) => {
  return (
    <div>

      <button
        type="submit"
        className="btn w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 text-white border-0"
      >
        জমা দিন
      </button>

      {success && (
        <p className="text-green-600 font-semibold text-center mt-3">
          আপনার পরিকল্পনা সফলভাবে জমা হয়েছে ✔
        </p>
      )}

    </div>
  );
};

export default FormSubmit;