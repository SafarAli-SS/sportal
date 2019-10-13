import React, { useContext } from "react";

import "./Categories.css";
import { ProductContext } from "../../context";

const Categories = () => {
  const { categorize } = useContext(ProductContext);
  const getCategory = e => {
    let category = e.target.textContent;
    return category;
  };
  return (
    <div>
      <ul className="categories">
        <strong>Categories:</strong>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          All products
        </li>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          Boots
        </li>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          Runner Shoes
        </li>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          Boxing Gloves
        </li>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          Judogies
        </li>
        <li
          onClick={e => {
            categorize(getCategory(e));
          }}
        >
          Roller Skates
        </li>
      </ul>
    </div>
  );
};

export default Categories;
