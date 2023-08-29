import React from "react";
import Transactions from "./Transactions";
import { AiOutlineClose } from "react-icons/ai";

const TransactionHistory = () => {
  return (
    <div className="fixed inset-0 h-full w-full bg-gray-400 bg-opacity-70 flex justify-center items-center">
      <div className="w-[90%] lg:w-[70%] h-[70%] bg-[#3A71FD] flex flex-col z-50 items-center justify-center rounded-xl text-white relative">
        <h1 className="w-full text-center p-5 font-semibold">
          Transaction History
        </h1>
        <AiOutlineClose className="absolute top-5 right-5 text-2xl cursor-pointer" />

        <ul className="flex justify-start items-center flex-col h-full w-full">
          <Transactions />
          <Transactions />
          <Transactions />
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
