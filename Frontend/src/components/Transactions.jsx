import React from "react";

const Transactions = () => {
  return (
    <div className="h-16 flex justify-center items-center w-full px-5 gap-5 lg:gap-24 font-semibold text-sm border-b-2 border-gray-500">
      <h1 className="w-[33%] text-center">Time</h1>
      <h1 className="w-[33%] text-center overflow-x-auto">0x000sfge0wfjh...</h1>
      <a href="#" className="w-[33%] text-center">
        {" "}
        See Explorer
      </a>
    </div>
  );
};

export default Transactions;
