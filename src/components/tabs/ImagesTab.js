import React from 'react';
import ActionButton from '../actionButton';
import Input from '../input';
import Header from './Header';
import './ImagesTab.css';

function ImagesTab() {
  return (
    <div className="Images-container">
      <Header title="Images" subtitle="These images will populate the Single Product Review image carousel and the Matrix product image." />
      
      <p>Here goes the tabs</p>
      <div className='Edit-images'>
        <div>
          <p className='Drag-and-drop-text'>Drag and drop to reorder. The image in the first position will <br/> always be the cover image for both the SPR and Matrix.</p>
          <p>Showing images (if any) here.</p>
        </div>
        <div className='Images-section'>
          <Input title='FILE NAME' placeholder="the file name obtained somehow"/>
          <Input title='ALTERNATIVE TEXT' placeholder="Enter text"/>
          <div className='Button-section'>
            <ActionButton text="Save" primary />
            <ActionButton text="Cancel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesTab;