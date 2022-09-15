import React, { useState } from 'react';
import './text-area.css';

function TextArea({ title, placeholder, suggestion, className }) {
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label className="Textarea-title">
        {title}
        <textarea
          className="Textarea"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </label>
      <p className={className}>{suggestion}</p>
    </div>
  );
}

export default TextArea;
