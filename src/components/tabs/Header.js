import React from 'react';
import './Header.css';

function Header({ title, subtitle }) {
  return (
    <div>
      <p className="Title">{title}</p>
      <p className="Subtitle">{subtitle}</p>
    </div>
  );
}

export default Header;
