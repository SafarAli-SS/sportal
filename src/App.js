import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import User from "./components/signup/User";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/cart" component={Cart} />
        <Route path="/category" component={Home} />
        <Route path="/details" component={ProductDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
