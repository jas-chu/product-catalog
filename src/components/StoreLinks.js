import React from 'react';
import './tabs/BasicDetailsTab.css';

function StoreLinks() {
  return (
    <div className="Section Store-links">
      <p className="Section-title">Store Links</p>
      <p> Here goes the tabs </p>
      <p> Select store inside the tabs</p>
      <SelectStore />
    </div>
  );
}

function SelectStore() {
  return (
    <div className="Section">
      <p>Todo en row: select, input, button, checkbox</p>
    </div>
  );
}

export default StoreLinks;
