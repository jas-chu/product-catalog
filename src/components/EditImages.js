import React from 'react';
import ActionButton from './actionButton';
import Input from './input';

function EditImages() {
  return (
    <div className="Edit-images">
      <div>
        <p className="Drag-and-drop-text">
          Drag and drop to reorder. The image in the first position will <br /> always be the cover
          image for both the SPR and Matrix.
        </p>
        <p>Showing images (if any) here.</p>
      </div>
      <div className="File-name Fill">
        <div className="Images-section">
          <Input title="FILE NAME" placeholder="the file name obtained somehow" />
          <Input title="ALTERNATIVE TEXT" placeholder="Enter text" />
        </div>
        <div className="Button-section">
          <ActionButton text="Save" primary />
          <ActionButton text="Cancel" />
        </div>
      </div>
    </div>
  );
}

export default EditImages;
