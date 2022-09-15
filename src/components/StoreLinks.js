import React from 'react';
import Checkbox from './checkbox';
import Input from './input';
import Select from './select';
import Button from './button';
import './tabs/BasicDetailsTab.css';
import CustomTab from './tab';

function StoreLinks() {
  return (
    <div className="Section Store-links">
      <p className="Section-title">Store Links</p>
      <CustomTab titles={['US', 'CA', 'AU', 'GB', 'AE', 'SG']} className="Section Spacing">
        <SelectStore />
        <SelectStore />
      </CustomTab>
    </div>
  );
}

function SelectStore() {
  return (
    <div className="Section Select-store">
      <Select title="Store 1" options={['Select Store']} />
      <Input title="URL" placeholder="Enter URL" />
      <Button text="Go" />
      <Checkbox name="Active" />
    </div>
  );
}

export default StoreLinks;
