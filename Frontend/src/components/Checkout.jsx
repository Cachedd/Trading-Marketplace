import React from "react";
import Nft1 from "../assets/nft1.jpg";
import Nft2 from "../assets/nft2.jpg";
import Nft3 from "../assets/nft3.jpg";
import Nft4 from "../assets/nft4.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Checkout = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-[500px] w-[320px] rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col items-center">
        <h1 className="h-[60px] text-lg flex justify-center items-center border-b-2 w-full font-semibold">
          CART
        </h1>
        <form action="post" className="h-full w-full bg-slate-300">
          <div className="bg-white h-[80px] w-full flex px-5 justify-between items-center">
            <img src={Nft2} alt="nft2" className="w-16 rounded-xl" />
            <h1 className="font-semibold w-[33%]">0.1 ETH</h1>
            <AiOutlineClose className="text-2xl cursor-pointer hover:scale-125 duration-200" />
          </div>
        </form>
        <div className="h-[120px] w-full  flex flex-col justify-around  items-center">
          <div className="w-full px-10 flex justify-between items-center h-[40px] bg-white ">
            <h1 className="text-center text-black font-semibold">TOTAL</h1>
            <h1 className="text-center text-black font-semibold">0.1 ETH</h1>
          </div>

          <button className="h-[80px] text-white w-full bg-[#3A71FD] text-center hover:bg-blue-950 font-semibold overflow-hidden cursor-pointer duration-200">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
