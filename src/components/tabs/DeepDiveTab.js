import React from 'react';
import TextArea from '../text-area';
import Header from './Header';
import './DeepDiveTab.css';

function DeepDive() {
  return (
    <div className="Deep-dive">
      <Header
        title="Deep Dive"
        subtitle={
          <span>
            This is the in-depth review of the product, displayed on the Single Product
            <br />
            Review page.
          </span>
        }
      />
      <div className="Section Spacing">
        <p className="Section-title">Deep Dive Content Builder</p>
        <TextArea className="Suggestion-text" placeholder="HERE WE USE THE ckedit0" />
      </div>
    </div>
  );
}

export default DeepDive;
