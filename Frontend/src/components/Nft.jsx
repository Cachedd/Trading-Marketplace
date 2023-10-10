// For all references please see references.txt file in repository (Frontend folder)
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ShopContext } from "../context/shop-context";
import { NFTS } from "../products";

export const Nft = (props) => {
  // Destructuring the data from the NFTS array in products.jsx
  const { id, title, price, image } = props.data;
  // Function to inherit the data, objects and functions from the shop-context.jsx
  const { addToCart } = React.useContext(ShopContext);
  // Function to add items to cart
  const cartItemsAmount = React.useContext(ShopContext).cartItems[id];
  return (
    <div
      onClick={() => addToCart(id)}
      className="flex flex-col justify-between items-center h-[310px] w-[250px] relative rounded-xl text-white bg-[#3A71FD] overflow-hidden shadow-lg hover:bg-[#223052] hover:scale-105 cursor-pointer duration-200"
    >
      <img src={image} alt="" className="w-80 h-80 object-cover" />
      <div className="w-full h-[20%] flex justify-between items-center bg-[#3A71FD] absolute bottom-0">
        <p className="text-center text-sm font-semibold w-[33%]">{title}</p>
        <p className="text-center text-sm font-semibold w-[33%]">{price} ETH</p>

        <div className="w-[33%] flex justify-center items-center">
          {/* If there are no items in the cart, show the plus icon, else show the amount of items in the cart */}
          {cartItemsAmount > 0 ? null : <AiOutlinePlus className="text-2xl" />}
          {cartItemsAmount !== 0 && (
            <p className="text-center font-semibold">{cartItemsAmount}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nft;
