import React from 'react';
import Input from '../input';
import CustomTab from '../tab';
import TextArea from '../text-area';
import Header from './Header';
import './MatrixContent.css';

function MatrixContent() {
  return (
    <div>
      <Header
        title="Matrix Content"
        subtitle={
          <span>
            This content will populate all places where matrix content shows up, like
            <br />
            Matrix pages, the top of Single Product Reviews, etc. It will be the source of
            <br />
            truth, and will be the default that can be returned to after any edits.
          </span>
        }
      />
      <div className="Section">
        <CustomTab titles={['US', 'CA', 'AU', 'GB', 'AE', 'SG']} className="Section Spacing">
          <MatrixInfo />
          <MatrixInfo />
        </CustomTab>
      </div>
    </div>
  );
}

function MatrixInfo() {
  return (
    <div className="Matrix-container">
      <div className="Section">
        <p className="Section-title">Bottom Line</p>
        <div>
          <Input
            title="PRODUCT SUMMARY"
            name="product summary"
            placeholder="Enter product summary"
          />
          <p className="Suggestion-text">Max character count: 25 characters</p>
          <TextArea
            title="BOTTOM LINE COPY"
            placeholder="Enter Bottom Line"
            className="Suggestion-text Last"
            suggestion="Suggested max character count: 300 characters, though typically under 150 characters"
          />
        </div>
      </div>
      <div className="Section Matrix-spacing">
        <p className="Section-title">Pros</p>
        <TextArea
          placeholder="Enter Pros"
          className="Suggestion-text Last"
          suggestion="Suggested max character count: 300 characters"
        />
      </div>
      <div className="Section Matrix-spacing">
        <p className="Section-title">Cons</p>
        <TextArea
          placeholder="Enter Cons"
          className="Suggestion-text Last"
          suggestion="Suggested max character count: 300 characters, though typically under 100 characters"
        />
      </div>
    </div>
  );
}

export default MatrixContent;
