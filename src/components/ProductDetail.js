import React, { useContext } from "react";
import { ProductContext } from "../context";
import "./ProductDetail.css";

const ProductDetail = props => {
  const { productDetail, addToCart, addToWishlist } = useContext(
    ProductContext
  );
  const {
    id,
    company,
    image,
    title,
    price,
    description,
    inCart,
    inWishlist
  } = productDetail;
  return (
    <div className="details-page">
      <div className="product-details">
        <img src={image} alt={title} width="450" />
        <h3>Title: {title}</h3>
        <h3>Company: {company}</h3>
        <p>Product info: {description}</p>
        <h3>Price: ${price}</h3>
      </div>

      <button
        className="btn-back"
        onClick={() => {
          props.history.goBack();
        }}
      >
        Back to shopping
      </button>

      <button
        className="btn"
        disabled={inCart ? true : false}
        title={inCart ? "This product is already in your cart" : "Add to cart"}
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
      <button
        className="btn"
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
    </div>
  );
};

export default ProductDetail;
