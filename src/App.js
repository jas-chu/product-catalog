import React from 'react';
import './App.css';
import ImagesTab from './components/tabs/ImagesTab';
import BasicDetailsTab from './components/tabs/BasicDetailsTab';
import 'react-tabs/style/react-tabs.css';
import CustomTab from './components/tab';

function App() {
  return (
    <div className="App">
      <p className="Main-title">Product Details</p>
      <CustomTab
        titles={[
          'Basic Details',
          'Images',
          'Matrix Content',
          'Testing Notes',
          'Deep Dive',
          'Specifications',
        ]}
      >
        <BasicDetailsTab />
        <ImagesTab />
      </CustomTab>
    </div>
  );
}

export default App;
