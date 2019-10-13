import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ProductContext } from "../context";

const Navbar = () => {
  const { wishlist, cart } = useContext(ProductContext);
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <strong>S</strong>
        <span>portAl</span>
      </Link>
      <span className="flex-grow" />
      <span className="search">
        <input
          type="text"
          name="search"
          placeholder="Search products"
          required
        />
        <button className="btn btn-search">
          <i className="material-icons">search</i>
        </button>
      </span>
      <span className="flex-grow" />
      <Link to="/wishlist" className="wishlist" title="wishlist">
        <i className="material-icons">favorite_border</i>
        <span className="badge">{wishlist.length}</span>
      </Link>
      <Link to="/cart" className="cart" title="shopping cart">
        <i className="material-icons">shopping_cart</i>
        <span className="badge">{cart.length}</span>
      </Link>
      <Link to="/user" className="account" title="signup/login">
        <i className="material-icons">account_circle</i>
      </Link>
    </nav>
  );
};

export default Navbar;
