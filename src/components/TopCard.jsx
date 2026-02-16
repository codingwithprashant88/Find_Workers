import React from "react";
import Image from "./image";
import { Link } from "react-router-dom";

function TopCard() {
  return (
    <>
   <section className="relative px-6 py-16 md:px-10 md:py-24 lg:px-20 xl:ml-20 ">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* Text Content */}
    <div className="mx-auto md:mx-0 text-center md:text-left max-w-xl">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-black md:text-white">
        <span>Find the Right Workers</span>
        <br />
        <span>Right Now</span>
      </h1>

      <p className="mt-6 text-base md:text-xl font-semibold text-black md:text-white">
        Find skilled workers and hire instantly with transparent pricing and reliable support.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
        {[<Link to='/jobs'>Find Job</Link>,<Link to='/project'>Find Projects</Link>].map((btn, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center text-white bg-[#154fac] hover:bg-pink-600 font-semibold rounded-md text-base md:text-lg px-5 py-3 transition transform hover:-translate-y-1 hover:scale-105"
          >
            {btn}
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>

        {/* Image */}
          <Image/>

  </div>
  
</section>

    </>
  );
}

export default TopCard;