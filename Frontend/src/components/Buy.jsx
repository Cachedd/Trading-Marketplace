import React from "react";
import Nft1 from "../assets/nft1.jpg";
// https://unsplash.com/photos/dWHMEcdZF4U
import Nft2 from "../assets/nft2.jpg";
// https://unsplash.com/photos/WyUmTnaKnRs
import Nft3 from "../assets/nft3.jpg";
// https://unsplash.com/photos/tJSLtgcuoxI
import Nft4 from "../assets/nft4.jpg";
// https://unsplash.com/photos/oWFZm4NAvMQ
import { AiOutlinePlus } from "react-icons/ai";

const Buy = () => {
  return (
    <div
      id="buy"
      className="h-[200vh] md:h-[84em] w-full flex flex-col gap-10 justify-center items-center"
    >
      <div className="bg-white pb-12 pl-12 pr-12 rounded-2xl shadow-xl flex flex-col justify-center items-center">
        <h1 className="text-center p-7 text-lg font-semibold text-blue-900">
          TRENDING <strong>NFTs</strong>
        </h1>
        <div className="inline-grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 ">
          <div className="h-[300px] w-[250px] flex flex-col justify-between items-center rounded-2xl shadow-xl cursor-pointer bg-[#3A71FD] overflow-hidden hover:shadow-2xl xl:hover:scale-105 hover:bg-blue-950 duration-200">
            <img src={Nft1} alt="nft1" />
            <button className="h-full w-full flex justify-evenly items-center">
              <h1 className="w-[33%] text-sm font-semibold text-white text-center">
                0.1 ETH
              </h1>
              <h1 className=" text-center text-sm w-[33%] font-semibold text-white">
                MOON
              </h1>
              <AiOutlinePlus className="text-white w-[33%] text-2xl" />
            </button>
          </div>
          <div className="h-[300px] w-[250px] flex flex-col justify-between items-center rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl xl:hover:scale-105 duration-200 bg-[#3A71FD] hover:bg-blue-950">
            <img src={Nft2} alt="nft2" />
            <button className="h-full w-full flex justify-evenly items-center">
              <h1 className="w-[33%] text-sm font-semibold text-white text-center">
                0.1 ETH
              </h1>
              <h1 className=" text-center text-sm w-[33%] font-semibold text-white">
                ABSTRACT
              </h1>
              <AiOutlinePlus className="text-white w-[33%] text-2xl" />
            </button>
          </div>
          <div className="h-[300px] w-[250px] flex flex-col justify-between items-center rounded-2xl shadow-xl bg-[#3A71FD] overflow-hidden hover:shadow-2xl xl:hover:scale-105 duration-200 cursor-pointer hover:bg-blue-950">
            <img src={Nft3} alt="nft3" className="" />
            <button className="h-full w-full flex justify-evenly items-center">
              <h1 className="w-[33%] text-sm font-semibold text-white text-center">
                0.1 ETH
              </h1>
              <h1 className=" text-center text-sm w-[33%] font-semibold text-white">
                PINK
              </h1>
              <AiOutlinePlus className="text-white w-[33%] text-2xl" />
            </button>
          </div>
          <div className="h-[300px] w-[250px] flex flex-col justify-between items-center rounded-2xl shadow-xl bg-[#3A71FD] overflow-hidden hover:shadow-2xl xl:hover:scale-105 duration-200 cursor-pointer hover:bg-blue-950">
            <img src={Nft4} alt="nft4" />
            <button className="h-full w-full flex justify-evenly items-center">
              <h1 className="w-[33%] text-sm font-semibold text-white text-center">
                0.1 ETH
              </h1>
              <h1 className=" text-center text-sm w-[33%] font-semibold text-white">
                THE CUBE
              </h1>
              <AiOutlinePlus className="text-white w-[33%] text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
