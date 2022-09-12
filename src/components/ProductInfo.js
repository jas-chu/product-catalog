import React from 'react';
import './tabs/BasicDetailsTab.css';
import './input/Input.css';
import Input from './input/Index';
import Checkbox from './checkbox/Index';
import Select from './select/Index';

function ProductInfo() {
  return (
    <>
      <div className="Section">
        <p className="Section-title">Product Info</p>
        <div className="Brand-model">
          <Input title="BRAND" placeholder="Enter brand name" />
          <Input title="MODEL" placeholder="Enter model name" />
        </div>
      </div>
      <div>
        <div className="Expert">
          <div className="Section">
            <Checkbox title="TESTING STATUS" name="Tested" />
            <p className="Testing-notes">
              See Testing Notes tab for both
              <br />
              internal and external testing notes
            </p>
          </div>
          <div className="Section Expert Fill">
            <Checkbox title="EXPERT STATUS" name="Expert recommended" />
            <Select title="EXPERT'S NAME" options={["Select Expert's Name"]} />
          </div>
        </div>
      </div>
      <div className="Section">
        <div className="Category">
          <Select title="CATEGORY" options={['Select Category']} />
          <Select title="SUBCATEGORY" options={['Select Subcategory']} />
        </div>
      </div>
      <div className="Section">
        <div className="Review">
          <p className="Input-title">REVIEW PAGES WHERE PRODUCT APPEARS</p>
          <p className="Review-text">
            Review Pages will appear when product is
            <br />
            saved and/or added to matrix pages.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
