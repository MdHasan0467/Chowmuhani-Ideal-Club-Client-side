import { useState } from 'react';
import DynamicModal from '../../Styles/DynamicModal.css'

function ModalButton() {
 const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    // alert(data?.title)
    // console.log(data)
    setModalData(data);
    setIsOpen(true);
  };

  // 

  return (
    <div>

      {/* Button 1 */}
      <button
        onClick={() =>
          openModal({
            title: "Visit Website",
            description: "Go to the official website.",
            buttonText: "Visit Now",
            action: () => alert("Opening Website")
          })
        }
         className="btn p-2 bg-blue-500 m-5"
      >
        Visit
      </button>

      

      {/* Button 2 */}
      <button
        onClick={() =>
          openModal({
            title: "Download App",
            description: "Download the mobile app.",
            buttonText: "Download",
            action: () => alert("Downloading App")
          })
        }
         className="btn p-2 bg-fuchsia-500 m-5"
      >
        Download
      </button>

      <DynamicModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={modalData}
      />

    </div>
  );
}

export default ModalButton
