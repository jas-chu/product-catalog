import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import ActionButton from './actionButton';
import icon from '../assets/icon-image.png';

const fileTypes = ['JPEG', 'PNG', 'GIF'];

function EditImages() {
  const [file, setFile] = useState(null);

  const handleChange = (newFile) => {
    // TODO: handle uploading multiple times.
    setFile(newFile);
  };

  return (
    <div className="File-uploader">
      <FileUploader multiple handleChange={handleChange} name="file" types={fileTypes}>
        <DragAndDrop />
      </FileUploader>
      <div>
        <p>{file ? `File name: ${file[0].name}` : 'No images uploading'}</p>
      </div>
    </div>
  );
}

function DragAndDrop() {
  return (
    <div className="Drag-and-drop">
      <img src={icon} alt="upload" />
      <b>Drag image to upload</b>
      <p>- or -</p>
      <ActionButton text="Choose Image" />
    </div>
  );
}

export default EditImages;
