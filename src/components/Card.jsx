import React from "react";
import "flowbite";
import CardCustomer from "./Card/CardCustomer";
 import UserStep from '../components/UserStep'

function Card() {
  return (
    <>
 <section className=" bg-white dark:bg-gray-900 mt-0 px-4 sm:px-6 md:px-16 lg:px-32 lg:-mt-0" >
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-base bg-neutral-primary-soft p-6 shadow-xs md:flex-row md:gap-10 ">
    
    {/* Image */}
    <img
      className="h-56 w-full rounded-base object-cover sm:h-64 md:h-auto md:w-56 lg:h-80 lg:w-[450px]"
      src="https://assets-news.housing.com/news/wp-content/uploads/2018/07/24201756/Finalise-construction-workers-welfare-scheme-by-September-30-2018-SC-to-centre-FB-1200x628-compressed.jpg"
      alt="Construction workers on site"
    />

    {/* Content */}
    <div className="flex flex-col justify-center md:px-4 ">
      <h2 className="mb-2 text-sm font-semibold text-white">
        About Us-
      </h2>

      <h3 className="mb-4 text-2xl font-bold text-orange-400">
        Find Workers
      </h3>

      <div className="space-y-4 text-gray-400 leading-relaxed">
        <p>
          Welcome to <span className="font-semibold text-white">Find Workers</span> — India’s
          leading hiring platform for construction professionals.
        </p>

        <p>
          We’re redefining how India’s construction workforce discovers genuine
          career opportunities. As a digital-first platform for skilled and
          semi-skilled workers, we enable direct connections with trusted
          employers — no agents, no hidden costs, just transparent hiring.
        </p>

        <p>
          Launched in 2026, Find Workers was created to bridge the gap between job
          seekers and companies by offering a fast, reliable, and fair recruitment
          experience. Whether you’re a carpenter, welder, site engineer, painter,
          or supervisor, our platform matches your skills with the right projects.
        </p>

        <p>
          Powered by technology, Find Workers ensures access to verified
          opportunities for workers while helping companies hire dependable
          talent efficiently. Together, we’re building stronger careers,
          stronger businesses, and a stronger India.
        </p>
      </div>
    </div>
  </div>
</section>
<UserStep/>
<CardCustomer/>
</>
  );
}

export default Card;
