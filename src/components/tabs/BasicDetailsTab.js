import React from 'react';
import ProductInfo from '../ProductInfo';
import StoreLinks from '../StoreLinks';
import './BasicDetailsTab.css';

function BasicDetailsTab() {
  return (
    <div className="Basic-details-container">
      <Header />
      <ProductInfo />
      <StoreLinks />
    </div>
  );
}

function Header() {
  return (
    <div>
      <p className="Title">Basic Product Details</p>
      <p className="Subtitle">This is the large main article featured at the top of the page</p>
    </div>
  );
}

export default BasicDetailsTab;
