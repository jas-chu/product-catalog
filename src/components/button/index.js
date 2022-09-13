import React from 'react';
import './button.css';

function Button({ text }) {
  return (
    <div className="Button">
      <button className="Button-text" type="submit">
        {text}
      </button>
    </div>
  );
}

export default Button;
