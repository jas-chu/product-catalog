import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImagesTab from './components/tabs/ImagesTab';
import BasicDetailsTab from './components/tabs/BasicDetailsTab';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className="App">
      <p className="Main-title">Product Details</p>
      <Tabs id="controlled-tabs">
        <TabList>
          <Tab>Basic Details</Tab>
          <Tab>Images</Tab>
          <Tab>Matrix Content</Tab>
          <Tab>Testing Notes</Tab>
          <Tab>Deep Dive</Tab>
          <Tab>Specifications</Tab>
        </TabList>
        <TabPanel>
          <BasicDetailsTab />
        </TabPanel>
        <TabPanel>
          <ImagesTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
