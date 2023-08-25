import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[95%] mx-auto px-4 text-blue-950"
      id="home"
    >
      <h1 className="w-[33%] sm:text-3xl font-semibold text-blue-950 cursor-pointer">
        NFTplace.
      </h1>
      <ul className="hidden lg:flex justify-stretch w-[33%]">
        <li className="p-4 rounded-md text-md sm:mr-[25px] font-semibold cursor-pointer text-blue-950 duration-150 hover:text-[#3A71FD]">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 rounded-md text-md sm:mr-[25px] font-semibold cursor-pointer text-blue-950 duration-150 hover:text-[#3A71FD]">
          <Link
            to="marketplace"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            NFTs
          </Link>
        </li>
        <li className="p-4 rounded-md text-md sm:mr-[25px] font-semibold cursor-pointer text-blue-950 duration-150 hover:text-[#3A71FD]">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 rounded-md text-md sm:mr-[25px] font-semibold cursor-pointer text-blue-950 duration-150 hover:text-[#3A71FD]">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose className="text-3xl fill-black" />
        ) : (
          <AiOutlineMenu className="text-3xl" />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-white-900 z-50 bg-gray-50 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full font-bold text-black m-4">NFTplace.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b-2 border-[#3A71FD] md:text-[1.1rem] text-blue-900 font-semibold">
            <Link
              to="home"
              onClick={handleNav}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b-2 border-[#3A71FD] md:text-[1.1rem] text-blue-900 font-semibold">
            <Link
              to="marketplace"
              onClick={handleNav}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              NFTs
            </Link>
          </li>
          <li className="p-4 border-b-2 border-[#3A71FD] md:text-[1.1rem] text-blue-900 font-semibold">
            <Link
              to="about"
              onClick={handleNav}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-4 md:text-[1.1rem] text-blue-900 font-semibold">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              onClick={handleNav}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
