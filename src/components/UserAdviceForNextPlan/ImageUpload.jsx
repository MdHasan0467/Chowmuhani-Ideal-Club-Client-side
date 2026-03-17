import { FiUploadCloud } from "react-icons/fi";

const ImageUpload = ({ setImage, preview, setPreview }) => {

  const handleImage = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  return (
    <div>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-400 p-6 text-center rounded-lg cursor-pointer hover:bg-gray-50"
      >
        <FiUploadCloud size={40} className="mx-auto mb-2" />

        <p className="text-sm text-gray-500">
          ছবি Drag & Drop করুন অথবা ক্লিক করে আপলোড করুন
        </p>

        <input
          type="file"
          onChange={(e) => handleImage(e.target.files[0])}
          className="hidden"
          id="imageUpload"
        />

        <label htmlFor="imageUpload" className="btn btn-sm mt-3">
          ছবি নির্বাচন
        </label>

      </div>

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-40 rounded shadow mt-4"
        />
      )}

    </div>
  );
};

export default ImageUpload;