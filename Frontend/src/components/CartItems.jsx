// For all references please see references.txt file in repository (Frontend folder)
import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { AiOutlineClose } from "react-icons/ai";

// Function to inherit the data, objects and functions from the shop-context.jsx
const CartItems = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  // Each item in the cart is rendered here
  return (
    <div className="cartItems flex justify-around items-center h-[100px] bg-white w-full p-3">
      <div className="flex justify-between items-center w-[25%]">
        <img src={image} alt="" className="h-[64px] md:h-[75px] rounded-xl" />
        <p className="text-md font-semibold w-[100px] text-center hidden md:block">
          {title}
        </p>
      </div>
      <div className="w-[25%] text-center text-md font-semibold">
        <p>{price} ETH</p>
      </div>
      <div className="flex w-[25] justify-center mr-2 items-center">
        {/* Using the shop-context file, we can use addToCart, removeFromCart and deleteFromCart functions to add, remove and delete items from the cart. */}
        <button
          className="text-3xl hover:scale-110 duration-200 hover:text-red-600"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        {/* Remove 1 instance of an item in cart */}
        <input
          className="w-8 mt-1 text-md text-center text-[#3A71FD] font-bold cursor-not-allowed"
          value={cartItems[id]}
        />
        {/* Add 1 instance of an item in cart */}
        <button
          className="text-2xl mb-[2px] hover:scale-110 duration-200 hover:text-green-600"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
      {/* Remove all instances of an item from the cart */}
      <div className="w-fit flex justify-center items-center md:w-[5%]">
        <AiOutlineClose
          onClick={() => deleteFromCart(id)}
          className="text-xl text-center cursor-pointer hover:scale-110 duration-200 hover:bg-[#3A71FD] hover:text-white rounded-full hover:h-7 hover:w-7 hover:p-1"
        />
      </div>
    </div>
  );
};

export default CartItems;
