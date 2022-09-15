import React from 'react';
import './App.css';
import ImagesTab from './components/tabs/ImagesTab';
import BasicDetailsTab from './components/tabs/BasicDetailsTab';
import 'react-tabs/style/react-tabs.css';
import CustomTab from './components/tab';
import MatrixContent from './components/tabs/MatrixContentTab';

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
        <MatrixContent />
      </CustomTab>
    </div>
  );
}

export default App;
