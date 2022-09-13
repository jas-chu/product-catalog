import React from 'react';
import './actionButton.css';

function ActionButton({ text, primary }) {
  return (
    <div className="Action-button">
      <button
        className={primary ? 'Action-button-text-primary' : 'Action-button-text-secondary'}
        type="submit"
      >
        {text}
      </button>
    </div>
  );
}

export default ActionButton;
