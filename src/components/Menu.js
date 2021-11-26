import { useState } from "react";
import Product from "./Product";
const Menu = ({ show }) => {
  const [showproducts, setshowproducts] = useState(false);
  return (
    <div className={show ? "sidebar active" : "sidebar"}>
      <div className="left-side">
        <ul className="lists">
          <p
            className="list-heading"
            onClick={() => setshowproducts(!showproducts)}
          >
            Products
          </p>
          <Product shows={showproducts} />
          <li>Azure</li>
          <li>Data Science</li>
          <li>Power Platform</li>
          <li>Big Data</li>
          <li>SAP Surround</li>
          <li>MS Teams</li>
          <li>Get in Touch</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
