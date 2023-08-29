import React, { useState, useRef } from "react";
import { CircularProgress } from "@material-ui/core";

const Contact = () => {
  const formRef = useRef(null);
  const [sendBtn, setSendBtn] = useState("SEND");

  const handleSendClick = () => {
    if (formRef.current) {
      // formRef.current.submit();
      setSendBtn(<CircularProgress className="fade-in" color="inherit" />);
      setTimeout(() => {
        setSendBtn(<CircularProgress className="fade-out" color="inherit" />);
        setTimeout(() => {
          setSendBtn("MESSAGE SENT");
        }, 1000); //
      }, 1000); //
    }
  };

  return (
    <div
      id="contact"
      className="h-screen w-full flex flex-col justify-center items-center "
    >
      <div className="w-full bg-white rounded-2xl shadow-xl flex justify-center items-center flex-col h-[90%] pb-8">
        <h1 className="text-3xl uppercase font-semibold py-5 md:my-10 w-fit md:w-[33%] text-center">
          CONTACT US
        </h1>
        <div className="flex  bg-gray-200 w-[84%] flex-col h-[70%] rounded-t-xl justify-between items-center ">
          <form
            ref={formRef}
            action="mailto:103389809@student.swin.edu.au"
            className="flex flex-col h-full w-[84%] rounded-t-xl justify-evenly items-center"
          >
            <div className="flex justify-center gap-5 lg:gap-8 items-center flex-col lg:flex-row mt-5 w-[90%] md:w-[75%]">
              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full lg:w-[50%] p-3 mt-2 text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#3A71FD]"
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full lg:w-[60%] p-3 mt-2 text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#3A71FD]"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-[90%] lg:w-[75%] p-3 mt-2 text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#3A71FD]"
            />
            <textarea
              placeholder="Message"
              required
              rows="4"
              cols="50"
              className="w-[90%] h-[30%] lg:w-[75%] p-3 bg-[#FFFFFF] rounded-md text-sm text-[#3A71FD] font-semibold"
            ></textarea>
          </form>
        </div>
        <button
          onClick={handleSendClick}
          className="h-20 bg-[#3A71FD] w-[84%] text-white font-semibold text-md rounded-b-xl hover:bg-[#2b335f] duration-200"
        >
          {sendBtn}
        </button>
      </div>
    </div>
  );
};

export default Contact;
