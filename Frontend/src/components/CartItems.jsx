import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { AiOutlineClose } from "react-icons/ai";

const CartItems = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartItems flex justify-around items-center h-[120px] bg-white w-full p-3">
      <div className="flex flex-col justify-center items-center w-[25%]">
        <img src={image} alt="" className="h-[75px] rounded-xl mt-2" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="w-[25%] text-center text-lg font-semibold">
        <p>{price} ETH</p>
      </div>
      <div className="flex w-[25] justify-center items-center">
        <button
          className="text-2xl hover:scale-150 duration-200 hover:text-red-600"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input className="w-7 text-lg text-center" value={cartItems[id]} />
        <button
          className="text-2xl pb-[1px] hover:scale-150 duration-200 hover:text-green-600"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
      <div className="w-fit flex justify-center items-center md:w-[25%]">
        <AiOutlineClose
          onClick={() => deleteFromCart(id)}
          className="text-2xl text-center cursor-pointer hover:scale-110 duration-200 hover:bg-[#3A71FD] hover:text-white rounded-full hover:h-8 hover:w-8 hover:p-1"
        />
      </div>
    </div>
  );
};

export default CartItems;
