// For all references please see references.txt file in repository (Frontend folder)
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      id="footer"
      className="h-[180px] w-full flex justify-center items-center py-5"
    >
      {/* Like with the navbar component, I am using Link from react-scroll to allow smooth-scrolling. */}
      <div className="h-[100px] w-[45%] flex gap-2 flex-col justify-center items-center border-r-2 border-blue-900">
        <h1 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </h1>
        <h2 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link
            to="marketplace"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            NFTs
          </Link>
        </h2>
        <h2 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link to="cart" spy={true} smooth={true} offset={50} duration={500}>
            Cart
          </Link>
        </h2>
      </div>
      <div className="h-[100px] w-[45%] flex gap-2 flex-col justify-center items-center">
        <h1 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </h1>
        <h2 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </h2>
        <h2 className="text-blue-950 font-semibold text-center hover:text-blue-700 cursor-pointer duration-200">
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>
            Footer
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
