import React from "react";
import Header from "../Header";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import Brands from "./Brands";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <AllProducts />
      <Brands />
    </div>
  );
};

export default Home;
