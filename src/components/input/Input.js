import React from 'react';
import './Input.css';

function Input({ title, name, placeholder }) {
  return (
    <div>
      <label className="Input-title">
        {title}
        <input className="Input" type="text" name={name} placeholder={placeholder} />
      </label>
    </div>
  );
}

export default Input;
