// For all references please see references.txt file in repository (Frontend folder)
import React, { useEffect } from "react";

const AboutUs = () => {
  // A UX effect to slide the two main components of the about us page in from the left and right as the user scrolls to view the page.
  useEffect(() => {
    const handleScroll = () => {
      const elemLeft = document.querySelector(".slide-in-left");
      const elemRight = document.querySelector(".slide-in-right");
      // These essentially identify the size and positioning of an element on screen so I can use it to determine when to slide in the elements.
      const rectLeft = elemLeft.getBoundingClientRect();
      const rectRight = elemRight.getBoundingClientRect();

      // If the top of the element is greater than 0 and the bottom of the element is less than the height of the window, then the element is in view.
      if (rectLeft.top >= 0 && rectLeft.bottom <= window.innerHeight) {
        elemLeft.classList.add("active");
      }
      if (rectRight.top >= 0 && rectRight.bottom <= window.innerHeight) {
        elemRight.classList.add("active");
      }
    };

    // This is the event listener that listens for the user to scroll and then calls the handleScroll function.
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="h-screen w-full flex flex-col justify-center lg:justify-start items-center bg-white overflow-x-hidden relative"
    >
      <h1 className="w-full text-center font-semibold text-3xl lg:py-10 absolute top-14">
        ABOUT US
      </h1>
      <div className="h-fit lg:h-full w-[80%] justify-center items-center grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
        <div className="h-fit lg:h-[40%] flex flex-col text-black gap-5 justify-center items-center slide-in-left px-3">
          {/* LEFT SLIDE IN */}
          <h1 className="font-semibold">What is an NFT?</h1>
          <p>
            As stated by Investopedia.com, "non-fungible tokens (NFTs) are
            assets that have been tokenized via a blockchain. They are assigned
            unique identification codes and metadata that distinguish them from
            other tokens."
          </p>
          <a
            href="https://www.investopedia.com/non-fungible-tokens-nft-5115211"
            className="text-xs opacity-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            - https://www.investopedia.com/non-fungible-tokens-nft-5115211
          </a>
        </div>
        <div className="h-fit lg:h-[40%] rounded-2xl flex flex-col justify-center items-center gap-5 slide-in-right p-5 bg-[#3A71FD]">
          {/* Right SLIDE IN */}
          <h1 className="font-semibold text-white">Who is NFTplace?</h1>
          <p className="text-white ">
            NFTplace is an emerging NFT markeplace, aiming to contribute to the
            web3 revolution. Honing in on the power of blockchain technology,
            NFTplace aims to explore the potential of NFTs and their use cases
            from media, to real-world assets.
          </p>
          <p className="text-white text-xs">- The team at NFTplace.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
