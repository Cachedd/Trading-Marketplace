// For all references please see references.txt file in repository (Frontend folder)
import React from "react";
import Transactions from "./Transactions";
import { AiOutlineClose } from "react-icons/ai";

// transactionDetails is a prop passed from Cart
const TransactionHistory = ({ transactionDetails }) => {
  return (
    <div className="fixed inset-0 h-full w-full bg-gray-400 bg-opacity-70 flex justify-center items-center duration-200">
      <div className="w-[90%] lg:w-[70%] h-[70%] bg-[#FFFFFF] flex flex-col z-50 items-center justify-center rounded-xl text-[#3A71FD] relative">
        <h1 className="w-full text-center p-5 font-semibold text-black">
          Transaction History
        </h1>
        <AiOutlineClose className="absolute top-5 right-5 text-black text-2xl cursor-pointer" />
        <div className="flex justify-center w-full text-center">
          <h1 className="w-[33%] font-bold">Time</h1>
          <h1 className="w-[33%] font-bold">Hash</h1>
          <h1 className="w-[33%] font-bold">EtherScan</h1>
        </div>
        <ul className="flex justify-start items-center flex-col h-full w-full">
          <Transactions transactionDetails={transactionDetails} />
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
