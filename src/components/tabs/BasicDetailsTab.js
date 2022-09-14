import React from 'react';
import ProductInfo from '../ProductInfo';
import StoreLinks from '../StoreLinks';
import './BasicDetailsTab.css';
import Header from './Header';

function BasicDetailsTab() {
  return (
    <div className="Basic-details-container">
      <Header
        title="Basic Product Details"
        subtitle="This is the large main article featured at the top of the page"
      />
      <ProductInfo />
      <StoreLinks />
    </div>
  );
}

export default BasicDetailsTab;
