import React, { useContext } from "react";
import { ProductContext } from "../../context";
import Product from "./Product";
import "./AllProducts.css";

const AllProducts = () => {
  const { products, categorizedProducts } = useContext(ProductContext);
  // console.log(products);
  if (categorizedProducts.length > 0) {
    return (
      <div className="all-products">
        {categorizedProducts.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="all-products">
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
};

export default AllProducts;
