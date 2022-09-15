import React from 'react';
import ActionButton from '../actionButton';
import TextArea from '../text-area';
import Header from './Header';
import icon from '../../assets/icon-arrow-dropdown.png';
import './TestingNotesTab.css';

function TestingNotes() {
  return (
    <div className='Testing-notes'>
      <Header
        title="Testing Notes"
        subtitle={
          <span>
            You can save internal testing notes here, as well as create the user-facing
            <br />
            Testing Notes shown on the Single Product Review.
          </span>
        }
      />
      <div className="Section Spacing">
        <p className="Section-title">Internal Testing Notes</p>
        <TextArea className="Suggestion-text" />
        <ActionButton
          text={
            <span className="Button-content">
              <img src={icon} alt="expand" className="Expand-icon" /> Expand
            </span>
          }
        />
      </div>
      <div className="Section Spacing">
        <p className="Section-title">User-Facing Testing Notes Content Builder</p>
        <TextArea className="Suggestion-text" placeholder="HERE WE USE THE ckedit0" />
      </div>
    </div>
  );
}

export default TestingNotes;
