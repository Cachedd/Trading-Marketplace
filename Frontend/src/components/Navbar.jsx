import React, { useState } from "react";
// Icons imported for the nav menu on mobile devices
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// Link allows smooth-scrolling
import { Link } from "react-scroll";

const Navbar = () => {
  // A function to manage the opening and closing of the navbar
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[95%] mx-auto px-4 text-blue-950"
      id="home"
    >
      {/* Navbar for larger screens */}

      <h1 className="w-[33%] sm:text-3xl font-semibold text-black cursor-pointer">
        NFTplace.
      </h1>
      <ul className="hidden lg:flex w-fit justify-center items-center gap-5">
        <li className="p-4 rounded-md text-md font-semibold cursor-pointer text-black duration-150 hover:text-[#3A71FD]">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 rounded-md text-md font-semibold cursor-pointer text-black duration-150 hover:text-[#3A71FD]">
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
        <li className="p-4 rounded-md text-md font-semibold cursor-pointer text-black duration-150 hover:text-[#3A71FD]">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 rounded-md text-md font-semibold cursor-pointer text-black duration-150 hover:text-[#3A71FD]">
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

      {/* Navbar for small screens */}

      {/* Function for if menu is open show close icon, if nav is not open show menu icon */}
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose className="text-3xl fill-black" />
        ) : (
          <AiOutlineMenu className="text-3xl" />
        )}
      </div>

      {/* The styling for the nav element */}
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
