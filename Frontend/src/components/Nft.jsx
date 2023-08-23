import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ShopContext } from "../context/shop-context";

export const Nft = (props) => {
  const { id, title, price, image } = props.data;
  const { addToCart } = React.useContext(ShopContext);
  const cartItemsAmount = React.useContext(ShopContext).cartItems[id];
  return (
    <div
      onClick={() => addToCart(id)}
      className="flex flex-col justify-between items-center h-[360px] w-[300px] rounded-xl text-white bg-[#3A71FD] overflow-hidden shadow-lg hover:bg-[#223052] hover:scale-105 cursor-pointer duration-200"
    >
      <img src={image} alt="" />
      <div className="w-full h-full flex justify-between items-center">
        <p className="text-center font-semibold w-[33%]">{title}</p>
        <p className="text-center font-semibold w-[33%]">{price} ETH</p>

        <div className="w-[33%] flex justify-center items-center">
          {cartItemsAmount > 0 ? null : <AiOutlinePlus className="text-2xl" />}
          {cartItemsAmount !== 0 && (
            <p className="text-center font-semibold">{cartItemsAmount}</p>
          )}
        </div>
      </div>
      {/* {id} */}
    </div>
  );
};

export default Nft;
