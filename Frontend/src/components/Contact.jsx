import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-full flex justify-center items-center lg:py-[300px]"
    >
      <form
        action="post"
        className="h-[550px] w-[320px] lg:w-[550px] bg-slate-50 rounded-2xl flex flex-col justify-center items-center md:justify-center shadow-xl"
      >
        <h2 className="sm:text-[16px] text-center font-bold text-[#3A71FD] px-8 py-1 w-40">
          NFTplace.
        </h2>
        <h1 className="text-center text-lg font-bold py-2 uppercase">
          Contact Us
        </h1>
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-5 w-full">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            className="w-[80%] h-8 bg-gray-200 rounded-md text-center text-1xl p-5"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            className="w-[80%] h-8 bg-gray-200 rounded-md text-center text-1xl p-5"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="w-[80%] h-8 bg-gray-200 rounded-md text-center text-1xl p-5"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-[80%] h-[150px] bg-gray-200 rounded-md text-center text-1xl p-4"
          ></textarea>
          <button className="p-4 bg-[#3A71FD] rounded-md text-white font-semibold w-[120px] md:w-[200px] hover:bg-slate-600 duration-150">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
