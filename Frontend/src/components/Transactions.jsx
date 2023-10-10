// For all references please see references.txt file in repository (Frontend folder)
import React from "react";

// transactionDetails is a prop passed from Cart
const Transactions = ({ transactionDetails }) => {
  if (!transactionDetails || !transactionDetails.time) return null;
  const etherScanLink =
    "https://sepolia.etherscan.io/tx/" + transactionDetails.hash;

  return (
    <div className="h-16 flex justify-center items-center w-full px-5 gap-5 lg:gap-24 font-semibold text-sm border-b-2 border-gray-500">
      <h1 className="w-[15%] text-center">{transactionDetails.time}</h1>
      <h1 className="w-fit text-center overflow-scroll lg:w-full lg:overflow-auto">
        {transactionDetails.hash}
      </h1>
      <a
        href={etherScanLink}
        className="w-[15%] text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        See Explorer
      </a>
    </div>
  );
};

export default Transactions;
