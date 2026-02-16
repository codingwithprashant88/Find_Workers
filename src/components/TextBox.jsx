import React from "react";
import Carousel from "./Carousel/Carousel";

function TextBox() {
  return (
    <>
      <div className="relative w-full flex justify-center  px-4 md:px-8 lg:px-16 py-20 md:py-32 ">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
                  bg-white w-full max-w-4xl rounded-md shadow-lg
                  p-6 md:p-8 lg:p-4"
        >
          <h2
            className="text-black font-bold text-base md:text-2xl xl:text-2xl xl:text-center
                   text-center md:text-left leading-relaxed"
          >
            500+ top companies trust{" "}
            <span className="text-[#154fac]">Find Workers</span> for their
            hiring needs
          </h2>
        </div>
        <div className="flex justify-center items-center  lg:-mt-14">
      <div className="max-w-4xl">
        <Carousel/>
      </div>
    </div>
      </div>
    </>
  );
}

export default TextBox;
