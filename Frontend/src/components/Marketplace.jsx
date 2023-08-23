import React, { useState } from "react";
import { NFTS } from "../products";
import Nft from "./Nft";

const Marketplace = () => {
  const [sortedNFTs, setSortedNFTs] = useState(NFTS);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortAZ = () => {
    const sorted = [...sortedNFTs].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedNFTs(sorted);
  };

  const sortZA = () => {
    const sorted = [...sortedNFTs].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setSortedNFTs(sorted);
  };

  const sortPriceCheap = () => {
    const sorted = [...sortedNFTs].sort((a, b) => a.price - b.price);
    setSortedNFTs(sorted);
  };

  const sortPriceExpensive = () => {
    const sorted = [...sortedNFTs].sort((a, b) => b.price - a.price);
    setSortedNFTs(sorted);
  };

  return (
    <div
      id="marketplace"
      className="h-fit w-full flex flex-col justify-center items-center bg-white gap-10 shadow-xl pb-10 rounded-xl p-10"
    >
      <h1 className="text-3xl uppercase font-semibold pt-5">Browse NFTs</h1>
      <form
        action="get"
        className="w-full h-fit flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-[250px] lg:w-[350px] bg-[#f2f2f2] rounded-lg shadow-lg font-semibold text-center p-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      <div className="w-fit">
        <ul className="flex flex-col gap-3 pb-5 md:flex-row justify-center items-center">
          <li
            onClick={sortAZ}
            className="w-[200px] text-sm mx-5 p-2 bg-[#223052] cursor-pointer text-white rounded-lg text-center"
          >
            Sort A-Z
          </li>
          <li
            onClick={sortZA}
            className="w-[200px] text-sm mx-5 p-2 bg-[#223052] cursor-pointer text-white rounded-lg text-center"
          >
            Sort Z-A
          </li>
          <li
            onClick={sortPriceCheap}
            className="w-[200px] text-sm mx-5 p-2 bg-[#223052] cursor-pointer text-white rounded-lg text-center"
          >
            Sort Price (Low to High)
          </li>
          <li
            onClick={sortPriceExpensive}
            className="w-[200px] text-sm mx-5 p-2 bg-[#223052] cursor-pointer text-white rounded-lg text-center"
          >
            Sort Price (High to Low)
          </li>
        </ul>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-12">
        {sortedNFTs
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <Nft data={product} />
          ))}
      </div>
    </div>
  );
};

export default Marketplace;
