import React from 'react';
import '../styles/InputField.css';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="input-field-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required />
    </div>
  );
};

export default InputField;
