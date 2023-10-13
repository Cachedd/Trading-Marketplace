// For all references please see references.txt file in repository (Frontend folder)
import React from "react";

// transactionDetails is a prop passed from Cart
const Transactions = ({ transactionDetails }) => {
  if (!transactionDetails || !transactionDetails.time) return null;
  const etherScanLink =
    "https://sepolia.etherscan.io/tx/" + transactionDetails.hash;

  return (
    <div className="h-16 flex justify-evenly items-center w-full px-5 gap-5 font-semibold text-sm border-b-2 border-gray-500">
      <h1 className="w-[33%] text-center">{transactionDetails.time}</h1>
      <h1 className="text-center w-[33%] overflow-scroll lg:overflow-auto">
        {transactionDetails.hash}
      </h1>
      <a
        href={etherScanLink}
        className="w-[33%] text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        See Explorer
      </a>
    </div>
  );
};

export default Transactions;
