import React from 'react';
import './Checkbox.css';

function Checkbox({ title, name }) {
  return (
    <div>
      <label className="Checkbox-title">
        <input type="checkbox" name={name} />
        {title}
      </label>
    </div>
  );
}

export default Checkbox;
