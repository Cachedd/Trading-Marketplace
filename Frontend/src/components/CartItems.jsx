import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { AiOutlineClose } from "react-icons/ai";

const CartItems = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

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
        <button
          className="text-3xl hover:scale-110 duration-200 hover:text-red-600"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="w-8 mt-1 text-md text-center text-[#3A71FD] font-bold"
          value={cartItems[id]}
        />
        <button
          className="text-2xl mb-[2px] hover:scale-110 duration-200 hover:text-green-600"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
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
