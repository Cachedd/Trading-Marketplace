import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { NFTS } from "../products";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const computeTotal = () => {
    return NFTS.reduce((total, product) => {
      return total + product.price * (cartItems[product.id] || 0);
    }, 0);
  };
  const totalETH = computeTotal();

  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center mt-20">
        <div className="w-full bg-white rounded-2xl shadow-xl flex justify-center items-center flex-col h-[90%] pb-8">
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
            <div className="w-[33%] hidden md:block"></div>
            <h1 className="text-3xl uppercase font-semibold py-5 md:my-10 w-fit md:w-[33%] text-center">
              NFT Cart
            </h1>
            <div className="w-fit md:w-[33%] justify-center items-center flex mb-8 md:mb-0">
              <button className="bg-[#3A71FD] text-xs text-white p-2 lg:p-3 rounded-lg font-semibold uppercase">
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="flex flex-col h-[70%] w-[84%] bg-gray-200 rounded-t-xl overflow-y-auto relative scrollbar scrollbar-thumb-[#3A71FD] scrollbar-track-[#192247]">
            <div className="flex flex-col-reverse gap-1 h-full w-full justify-end">
              {NFTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItems data={product} />;
                }
              })}
            </div>
          </div>
          <div className="w-[84%] text-center bg-white">
            <p className="text-center pt-3 font-semibold text-xs">TOTAL</p>
            <p className="text-xl font-semibold pb-5 pt-1">
              {totalETH.toFixed(2)} ETH
            </p>
          </div>
          <button className="h-20 bg-[#3A71FD] w-[84%] text-white font-semibold text-md rounded-b-xl hover:bg-[#2b335f] duration-200">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
