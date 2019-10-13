import React, { useContext } from "react";
import { ProductContext } from "../../context";

const CartList = props => {
  // console.log(props);
  const {
    cart,
    cartTotal,
    increment,
    decrement,
    removeItem,
    clearCart
  } = useContext(ProductContext);
  return (
    <div className="cart-list">
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} width="150" />
          <h3>{item.title}</h3>
          <h3>
            Quantity:
            <span
              className="decrement"
              onClick={() => {
                decrement(item.id);
              }}
            >
              -
            </span>
            <strong className="quantity">{item.count}</strong>
            <span
              onClick={() => {
                increment(item.id);
              }}
              className="increment"
            >
              +
            </span>
          </h3>
          <h3>${item.price}</h3>
          <button
            className="btn btn-delete"
            onClick={() => removeItem(item.id)}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>
      ))}
      <h3 className="total-price">Total price: ${cartTotal}</h3>
      <button
        className="clear-cart"
        onClick={() => {
          clearCart();
        }}
      >
        Clear cart
      </button>
      <button
        className="btn-back"
        onClick={() => {
          props.history.push("/");
        }}
      >
        Back to shopping
      </button>
    </div>
  );
};

export default CartList;
