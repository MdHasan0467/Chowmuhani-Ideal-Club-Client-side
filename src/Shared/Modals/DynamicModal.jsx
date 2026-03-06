import React from "react";

const DynamicModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;



    const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "350px",
  textAlign: "center"
};


  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>


        {data?.buttonText && (
          <button onClick={data?.action}
           className="btn p-2 bg-emerald-500 m-5">
            {data.buttonText}
          </button>
        )}

        <button onClick={onClose} className="btn p-2 bg-red-500">Close</button>
      </div>
    </div>

  );
};





export default DynamicModal;