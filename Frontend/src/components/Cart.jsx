// For all references please see references.txt file in repository
import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { NFTS } from "../products";
import CartItems from "./CartItems";
import { CircularProgress } from "@material-ui/core";
// https://mui.com/material-ui/
import { RiHistoryLine } from "react-icons/ri";
// https://react-icons.github.io/react-icons/
import TransactionHistory from "./TransactionHistory";

const Cart = () => {
  // Function to inherit the data, objects and functions from the shop-context.jsx
  const { cartItems } = useContext(ShopContext);
  const computeTotal = () => {
    return NFTS.reduce((total, product) => {
      return total + product.price * (cartItems[product.id] || 0);
    }, 0);
  };
  const totalETH = computeTotal();

  // Series of states to handle the connect wallet button.
  // Text on Connect Button
  const [connectBtn, setConnectBtn] = useState("Connect Wallet");
  // Colour of Connect button
  const [connectBtnColor, setConnectBtnColor] = useState("#3A71FD");
  // Transaction history icon
  const [prevTransactions, revealPrevTransactions] = useState("hidden");
  // User address
  const [currentAddress, setUserAddress] = useState(null);
  const connectStatus = async () => {
    if (connectBtn === "Connect Wallet") {
      try {
        // await window.ethereum.request({ method: "eth_requestAccounts" });
      } finally {
        setConnectBtn("Connected");
        setConnectBtnColor("#006400");
        revealPrevTransactions("block text-xl cursor-pointer");
        setUserAddress("0xA99Cc2A7fhcAe860259B1781AEB09ef679b398B4");
        // setUserAddress(window.ethereum.selectedAddress);
      }
    }
  };
  // Function to handle the transaction history modal
  const [txnModal, setTxnHistory] = useState("hidden");

  const setTxnModal = () => {
    if (txnModal === "hidden") {
      setTxnHistory("flex");
    } else {
      setTxnHistory("hidden");
    }
  };

  // Loading symbol for the purchase button
  const [purchaseBtn, setPurchaseBtn] = useState("PURCHASE");
  const purchaseStatus = () => {
    if (purchaseBtn === "PURCHASE" && connectBtn === "Connected") {
      // Loading icon
      setPurchaseBtn(<CircularProgress color="inherit" />);
    } else if (purchaseBtn === "PURCHASE" && connectBtn !== "Connected") {
      // Throw an alert to notify the user they must connect wallet to buy
      alert("Please connect your wallet first.");
    }
  };

  return (
    <div id="cart">
      <div className="h-screen w-full flex flex-col justify-center items-center mt-20">
        <div
          // Transaction Modal
          onClick={setTxnModal}
          className={`${txnModal} z-40 w-full h-full justify-center items-center flex duration-200`}
        >
          <TransactionHistory />
        </div>
        <div className="w-full bg-white rounded-2xl shadow-xl flex justify-center items-center flex-col h-[90%] pb-8">
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
            <p className="text-xs pt-7 md:pt-0 md:w-[33%] overflow-hidden text-center md:pl-16 font-semibold">
              {currentAddress}
            </p>
            <h1 className="text-3xl uppercase font-semibold py-5 md:my-10 w-fit md:w-[33%] text-center">
              NFT Cart
            </h1>
            <div className="w-fit md:w-[33%] justify-center gap-8 items-center flex mb-8 md:mb-0">
              {/* Transaction History Button */}
              <RiHistoryLine
                onClick={setTxnModal}
                className={prevTransactions}
              />
              <button
                style={{ backgroundColor: connectBtnColor }}
                className="text-xs text-white p-2 lg:p-3 rounded-lg font-semibold uppercase duration-200"
                onClick={connectStatus}
              >
                {connectBtn}
              </button>
            </div>
          </div>

          <div className="flex flex-col h-[70%] w-[84%] bg-gray-200 rounded-t-xl overflow-y-auto relative scrollbar scrollbar-thumb-[#3A71FD] scrollbar-track-[#192247]">
            <div className="flex flex-col-reverse gap-1 h-full w-full justify-end slide-in-top">
              {/* This maps the cart items to the cart */}
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
              {/* Makes the total ETH value have 2 decimal places eg 0.00 */}
              {totalETH.toFixed(2)} ETH
            </p>
          </div>
          <button
            // This purchase animation is currently configured to loop infinitely as you wouldnt want to confirm a sale without backend working. Will modify once backend is working.
            onClick={purchaseStatus}
            className="h-20 bg-[#3A71FD] w-[84%] text-white font-semibold text-md rounded-b-xl hover:bg-[#2b335f] duration-200"
          >
            {purchaseBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
