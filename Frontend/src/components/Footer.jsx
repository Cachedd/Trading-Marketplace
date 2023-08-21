import React from "react";

const Footer = () => {
  return (
    <div className="h-[180px] w-full flex justify-center items-center py-5">
      <div className="h-[100px] w-[45%] flex gap-2 flex-col justify-center items-center border-r-2 border-blue-900">
        <h1 className="text-blue-950 font-semibold text-center">links</h1>
        <h2 className="text-blue-950 font-semibold text-center">more</h2>
        <h2 className="text-blue-950 font-semibold text-center">more</h2>
      </div>
      <div className="h-[100px] w-[45%] flex gap-2 flex-col justify-center items-center">
        <h1 className="text-blue-950 font-semibold text-center">links</h1>
        <h2 className="text-blue-950 font-semibold text-center">more</h2>
        <h2 className="text-blue-950 font-semibold text-center">more</h2>
      </div>
    </div>
  );
};

export default Footer;
