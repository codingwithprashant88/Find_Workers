import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

function Busines() {
  const features = [
  {
    title: "Strong Worker Network",
    description:
      "We are trusted by the largest corporations and contractors to provide highly skilled and reliable manpower. Our platform gets you the best workers backed by data, ratings, culture.",
    icon: "👥",
  },
  {
    title: "PAN India Support",
    description:
      "We operate across India providing regional and language support to ensure seamless hiring of workers nationwide, making it easy for you to get the manpower you need, wherever you are.",
    icon: "📍",
  },
  {
    title: "Trusted by Companies",
    description:
      "Our platform is relied upon by leading construction firms and businesses across India. We are known for our consistency, speed, and ability to deliver manpower for projects of any size.",
    icon: "💼",
  },
  {
    title: "Data-Driven Matching",
    description:
      "Our advanced algorithms and rating systems ensure that you are matched with the most qualified workers for your specific needs. Data-driven insights make hiring faster and more accurate.",
    icon: "📊",
  },
];
  return (
    <div>
      <Header />
      {/*Hero Section*/}

      <section className="relative w-full min-h-full">
        {/*Content*/}
        <div className="relative  flex flex-col items-center px-4 mt-20 lg:mt-10">
          <div className="bg-white mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-10  shadow-sm md:flex-row md:gap-10 ">
              {/* Content */}
              <div className="flex flex-col justify-center md:px-4 text-left -mt-9 lg:-mt-14 ">
                <h2 className="mb-2 text-sm font-semibold text-black  font-serif ">
                  <Link
                    to="/"
                    className="text-purple-700 hover:text-blue-700 cursor-pointer"
                  >
                    Home -{" "}
                  </Link>
                  Business
                </h2>

                <h3 className="mb-4 text-3xl font-bold text-blue-700">
                  Hire construction Workers for Your next project
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    Finding skilled and reliable workers is now simple and
                    stress-free. With{" "}
                    <span className="font-bold">Find Workers</span>, you can
                    quickly connect with trusted construction and blue-collar
                    professionals for any project.
                  </p>
                  <p>
                    Whether you’re looking for experienced masons, electricians,
                    carpenters, plumbers, or general labourers, our platform
                    helps you find the right workers—fast and hassle-free. From
                    small repairs to large construction sites, Digital Labour
                    Chowk is your dependable solution to find workers with
                    confidence.
                  </p>
                </div>
              </div>
              {/* Image */}
              <img
                className="h-56  rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-96 lg:w-[460px]"
                src="https://static.vecteezy.com/system/resources/thumbnails/048/739/690/small/confident-construction-worker-standing-crossed-arm-isolated-against-a-transparent-background-png.png"
                alt="Construction workers on site"
              />
            </div>
          </div>
        </div>

        <div></div>
      </section>
      {/*Hero Section*/}
      <section className="relative w-full min-h-full">
        {/*Top content*/}
        <div className="py-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-black/90">
            Who We Serve
          </h1>
          <div className="space-y-4 text-black leading-relaxed py-5">
            <p>
              Find Workers is a reliable digital labour hiring platform built to
              connect businesses with skilled construction workers and
              blue-collar professionals—fast and hassle-free. We help general
              contractors, sub-contractors, builders, and manpower suppliers
              find the right workforce with complete transparency and
              confidence. From small crews to large-scale construction projects,
              Find Workers simplifies hiring and workforce management. Our
              platform ensures quick access to verified, skilled labour so your
              projects stay on schedule and run smoothly—across all industries
              and project sizes.
            </p>
          </div>
        </div>

        {/*Card 1*/}

        <div className="grid space-y-4  md:space-y-0 md:space-x-4 md:grid-cols-3 lg:grid-cols-3">
          <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs ">
            <Link to="/contact">
              <img
                class="rounded-base "
                src="https://skilledtradesbc.ca/sites/default/files/2023-01/tradeworkers_02_web.jpg"
                alt=""
              />
            </Link>
            <Link to="#">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                General Contractor
              </h5>
            </Link>
            <p class="mb-6 text-body">
              Hire Contractors and Workers for your Big project​
            </p>
            <Link
              to="/contact"
              class="inline-flex items-center text-body bg-blue-700 box-border border border-default-medium  rounded hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white/90 relative  overflow-hidden
    before:content-[''] before:absolute before:left-0 before:top-0
    before:h-full before:w-0 before:bg-pink-500
    before:transition-all before:duration-100
    hover:before:w-full  transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <span className="z-10"> Click Here</span>
              <svg
                class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5 z-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          {/*Card 2*/}
          <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs ">
            <Link to="/contact">
              <img
                class="rounded-base "
                src="https://img.freepik.com/free-photo/male-worker-factory_1303-14306.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
              />
            </Link>
            <a href="/contact">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                Manpower Supplier
              </h5>
            </a>
            <p class="mb-6 text-body">
              Hire Workers to supply to another company or project
            </p>
            <Link
              to="/contact"
              class="inline-flex items-center text-body bg-blue-700 box-border border border-default-medium  rounded hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white/90 relative  overflow-hidden
    before:content-[''] before:absolute before:left-0 before:top-0
    before:h-full before:w-0 before:bg-pink-500
    before:transition-all before:duration-100
    hover:before:w-full  transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <span className="z-10"> Click Here</span>
              <svg
                class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5 z-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          {/*Card 3*/}
          <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs ">
            <Link to="/contact">
              <img
                class="rounded-base "
                src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-298.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
              />
            </Link>
            <Link to="/contact">
              <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                Sub-Contractor
              </h5>
            </Link>
            <p class="mb-6 text-body">
              Hire Workers for multiple project in one click
            </p>
            <Link
              to="/contact"
              class="inline-flex items-center text-body bg-blue-700 box-border border border-default-medium  rounded hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white/90 relative  overflow-hidden
    before:content-[''] before:absolute before:left-0 before:top-0
    before:h-full before:w-0 before:bg-pink-500
    before:transition-all before:duration-100
    hover:before:w-full  transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <span className="z-10"> Click Here</span>
              <svg
                class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5 z-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/*text point*/}

      <section className="relative w-full min-h-full">       {/*take full screen width*/}
  <div className="relative flex flex-col items-center ">
    <div className=" bg-yellow-500 mt-5 p-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
      <h2 className="text-center font-extrabold  text-sm lg:text-xl text-black/76">
        People join places where they feel valued, respected, and inspired. Build an environment they want to belong to.
      </h2>
    </div>
  </div>
</section>

         <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            WHY TO <span className="text-blue-600">CHOOSE US?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Find Workers is trusted by top contractors and businesses
            across India to hire construction workers with speed, accuracy,
            and reliability.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* Left Cards */}
          <div className="space-y-8">
            {features.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-blue-50 flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20240418/original/pngtree-african-american-construction-worker-over-isolated-white-background-png-image_14885212.png" // place image in public folder
                alt="Worker"
                className="w-60 h-60 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-8">
            {features.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>


       <div className="py-10">
              <h1 className="text-2xl font-extrabold text-black/85">Companies trust Find Workers for their Hiring needs</h1>

       </div>
             {/*Carousel*/}

    <div className="flex justify-center items-center">
      <div className="max-w-3xl">
        <Carousel/>
      </div>
    </div>
    
          {/*Footer*/}

    <div className="-mb-10 mt-5">
      <Footer/>
    </div>

    </div>
  );
}

export default Busines;
