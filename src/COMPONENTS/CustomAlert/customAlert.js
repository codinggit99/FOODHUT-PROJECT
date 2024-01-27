// CustomAlert.js
import React from 'react';
import './customAlert.css';

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default CustomAlert;
