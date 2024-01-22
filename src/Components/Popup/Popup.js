import React from "react";
import "./Popup.css";

const Popup = ({onClose,onNextStep}) => {
    const handleClose = () => {
        onClose(); 
        onNextStep(); 
      };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
        Please be sure to hit submit! You should receive a Thank you message if completed.
        </h2>
        <button className="closebtn" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
