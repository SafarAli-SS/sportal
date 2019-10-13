import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1>Your Cart is empty</h1>
      <Link to="/">
        <button className="btn-back">Back to shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
