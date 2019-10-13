import React, { useContext } from "react";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { id, title, image, price, inCart, inWishlist } = product;
  const { addToCart, addToWishlist, handleDetail } = useContext(ProductContext);
  return (
    <div className="product">
      <div className="image-container">
        <button
          className="btn btn-wish"
          disabled={inWishlist ? true : false}
          title={
            inWishlist
              ? "This product is already in your wish list"
              : "Add to your wish list"
          }
          onClick={() => {
            addToWishlist(id);
          }}
        >
          {inWishlist ? (
            <i className="material-icons wish">favorite</i>
          ) : (
            <i className="material-icons wish">favorite_border</i>
          )}
        </button>
        <img src={image} alt={title} className="product-image" width="350" />
        <button
          className="btn btn-addToCart"
          disabled={inCart ? true : false}
          title={
            inCart ? "This product is already in your cart" : "Add to cart"
          }
          onClick={() => {
            addToCart(id);
          }}
        >
          {inCart ? (
            <i className="material-icons add-cart">shopping_cart</i>
          ) : (
            <i className="material-icons add-cart">add_shopping_cart</i>
          )}
        </button>
      </div>
      <h3 className="product-title">{title}</h3>
      <h3 className="product-price">${price}</h3>
      <Link to="/details">
        <button
          className="btn-details"
          onClick={() => {
            handleDetail(id);
          }}
        >
          Details
        </button>
      </Link>
    </div>
  );
};

export default Product;
