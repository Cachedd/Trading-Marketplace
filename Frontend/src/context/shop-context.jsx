import React, { useState } from "react";
import { NFTS } from "../products";

// ShopContext is a library of methods I made to use when managing the state of items in the cart so that if I was required to create several pages I could use this with the React Router to manage cart globally.

export const ShopContext = React.createContext(null);

// Removes all cart items to intialise
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < NFTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // Adds NFTs to cart
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Removes NFTs from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Clears the entire amount of a particular NFT from cart
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  // Wraps these funcitons into an object so that they can seemlessly be used throughout the application
  const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
