import React, { Component, createContext } from "react";

import { defaultProducts } from "./data";

export const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    categorizedProducts: [],
    productDetail: defaultProducts[0],
    cart: [],
    wishlist: [],
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    let tempProducts = [];
    defaultProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetail: product };
    });
  };

  categorize = category => {
    let tempProducts = [...this.state.products];
    if (category === "All products") {
      this.setState({ categorizedProducts: [] });
    } else {
      let categorizedProducts = tempProducts.filter(item => {
        return item.category.toLowerCase() === category.toLowerCase();
      });
      console.log(categorizedProducts);
      this.setState(
        () => {
          return { categorizedProducts: categorizedProducts };
        },
        () => {
          console.log(this.state.categorizedProducts);
        }
      );
    }
    console.log(category);
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    let product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
        // console.log(this.state.cart);
      }
    );
  };

  addToWishlist = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    let product = tempProducts[index];
    product.inWishlist = true;

    this.setState(() => {
      return {
        products: tempProducts,
        wishlist: [...this.state.wishlist, product]
      };
    });
  };

  addTotals = () => {
    let total = 0;
    this.state.cart.map(item => {
      return (total += item.total);
    });

    this.setState(() => {
      return { cartTotal: total };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals());
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      () => {
        return { products: [...tempProducts], cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotals();
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          categorize: this.categorize,
          addToCart: this.addToCart,
          addToWishlist: this.addToWishlist,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductProvider;
