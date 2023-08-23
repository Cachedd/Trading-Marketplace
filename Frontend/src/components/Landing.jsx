import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Blockchain from "../assets/blockchain.png";
import "../index.css";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full min-h-[93vh] text-center justify-center items-center md:flex-col lg:flex lg:flex-row overflow-x-hidden ">
        <div className="relative flex justify-center items-center py-[5%]">
          <img
            src={Blockchain}
            alt="logo"
            className="w-[90%] md:w-[80%] lg:w-[650px]"
          />
        </div>

        <div className="px-[3%]">
          <p className="text-[#3A71FD] text-[1.18em] font-bold p-2 uppercase hidden md:block">
            Join the emerging Web3 revolution
          </p>
          <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 text-black">
            Buy and trade NFTs.
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-xl md:text-2xl font-semibold py-4 text-black">
              The place to
            </p>
            <Typed
              className="text-xl md:text-2xl font-semibold pl-2 text-[#3A71FD]"
              strings={["buy.", "mint.", "sell."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="hidden text-xl font-bold text-gray-500 py-[10px] md:hidden lg:block">
            Emerging NFT marketplace NFTplace.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <button className="bg-[#3A71FD] text-white w-[250px] text-2xl lg:w-[220px] rounded-md font-medium my-6 mx-[2%] py-4 sm:py-6 hover:bg-slate-600 duration-150">
              <Link
                to="marketplace"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Browse NFTs
              </Link>
            </button>
            <button className="bg-[#E6E6E6] w-[250px] text-2xl lg:w-[220px] rounded-md font-medium my-0 mx-[2%] py-4 sm:py-6 text-[#101336] hover:bg-slate-600 duration-150 hover:text-white">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
