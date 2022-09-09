import './BasicDetailsTab.css';

const BasicDetailsTab = () => (
  <div className="Basic-details-container">
    <Header />
    <ProductInfo />
    <StoreLinks />
  </div>
);

const Header = () => (
  <div>
    <p className="Title">Basic Product Details</p>
    <p className="Subtitle">This is the large main article featured at the top of the page</p>
  </div>
);

const ProductInfo = () => (
  <div className="Section">
    <p className="Section-title">Product Info</p>
  </div>
);

const StoreLinks = () => (
  <div className="Section">
    <p className="Section-title">Store Links</p>
    <p> Here goes the tabs </p>
    <p> Select store inside the tabs</p>
    <SelectStore />
  </div>
);

const SelectStore = () => (
  <div className="Section">
    <p>Todo en row: select, input, button, checkbox</p>
  </div>
);

export default BasicDetailsTab;
