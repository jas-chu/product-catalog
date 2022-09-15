import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function CustomTab({ titles, children, className }) {
  return (
    <Tabs id="controlled-tabs" className={className}>
      <TabList>
        {titles.map((title) => (
          <Tab>{title}</Tab>
        ))}
      </TabList>
      {children.map((component) => (
        <TabPanel>{component}</TabPanel>
      ))}
    </Tabs>
  );
}

export default CustomTab;
