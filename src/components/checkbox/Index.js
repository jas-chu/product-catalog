import React from 'react';
import './Checkbox.css';

function Checkbox({ title, name }) {
  return (
    <div>
      <p className="Input-title">{title}</p>
      <label className="Checkbox-title">
        <input type="checkbox" name={name} />
        {name}
      </label>
    </div>
  );
}

export default Checkbox;
