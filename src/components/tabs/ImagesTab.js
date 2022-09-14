import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from './Header';
import 'react-tabs/style/react-tabs.css';
import './ImagesTab.css';
import EditImages from '../EditImages';
import UploadImages from '../UploadImages';

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
      <Tabs id="controlled-tabs" className="Section Spacing">
        <TabList>
          <Tab>Edit Images</Tab>
          <Tab>Upload Images</Tab>
        </TabList>
        <TabPanel>
          <EditImages />
        </TabPanel>
        <TabPanel>
          <UploadImages />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ImagesTab;
