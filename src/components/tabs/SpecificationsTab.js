import React from 'react';
import Header from './Header';
import './SpecificationsTab.css';

function Specifications() {
  return (
    <div className="Specifications">
      <Header
        title="Specifications"
        subtitle={
          <span>
            These are the specifications of the product, displayed on the Single Product
            <br />
            Review page.
          </span>
        }
      />
      <CustomizableSpecifications />
    </div>
  );
}

function CustomizableSpecifications() {
  return (
    <div className="Section Spacing">
      <p className="Section-title">Specification Content Builder</p>
      <div className="Custom-specifications">
        <p className="Section-title Custom-title">DIMENSIONS</p>
        <p className="Section-title Custom-title">FEATURES</p>
        <AddSpecificationCategory />
      </div>
    </div>
  );
}

function AddSpecificationCategory () {
  return (
    <p className="Custom-title Action">ADD SPECIFICATION CATEGORY</p>
  )
}

export default Specifications;
