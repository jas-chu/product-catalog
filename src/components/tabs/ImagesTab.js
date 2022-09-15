import React from 'react';
import Header from './Header';
import './ImagesTab.css';
import EditImages from '../EditImages';
import UploadImages from '../UploadImages';
import CustomTab from '../tab';

function ImagesTab() {
  return (
    <div className="Images-container">
      <Header
        title="Images"
        subtitle={
          <span>
            These images will populate the Single Product Review image carousel and the <br />{' '}
            Matrix product image.
          </span>
        }
      />
      <CustomTab titles={['Edit Images', 'Upload Images']} className="Section Spacing">
        <EditImages />
        <UploadImages />
      </CustomTab>
    </div>
  );
}

export default ImagesTab;
