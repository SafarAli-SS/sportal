import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../../context";
import CartList from "./CartList";

import "./Cart.css";

const Cart = props => {
  // console.log(props);
  const { cart } = useContext(ProductContext);
  return (
    <div className="cart-page">
      {cart.length === 0 ? <EmptyCart /> : <CartList history={props.history} />}
    </div>
  );
};

export default Cart;
