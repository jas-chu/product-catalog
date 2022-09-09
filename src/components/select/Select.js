import React from 'react';
import './Select.css';

function Select({ title, options }) {
  return (
    <div>
      <label className="Select-title">
        {title}
        <select className="Select">
          {options.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;
