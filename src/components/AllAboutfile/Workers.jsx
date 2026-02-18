import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Workers() {
  return (
    <div>
      <Header />
      {/*top card section*/}
      <section className="relative w-full min-h-full">
        {/*Content*/}
        <div className="relative  flex flex-col items-center px-4 mt-20 lg:mt-10">
          <div className="bg-white mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-10  shadow-sm md:flex-row md:gap-10 ">
              {/* Content */}
              <div className="flex flex-col justify-center md:px-4 text-left -mt-9 lg:-mt-14 ">
                <h2 className="mb-2 text-sm font-semibold text-black  font-serif">
                  <Link
                    to="/"
                    className="text-purple-700 hover:text-blue-700 cursor-pointer"
                  >
                    Home -{" "}
                  </Link>
                  WORKER
                </h2>

                <h3 className="mb-4 text-3xl font-bold text-blue-700">
                  Find jobs in Top Construction Company
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p className="text-sm">
                    Find Workers is a trusted platform designed to help
                    employers quickly find skilled construction workers for
                    their projects. It brings together experienced professionals
                    such as masons, carpenters, electricians, plumbers,
                    painters, and helpers in one place. Employers can browse
                    verified worker profiles, check skills, work experience, and
                    ratings, and connect with the right workers based on project
                    requirements and location. The platform simplifies hiring by
                    offering real-time availability, transparent communication,
                    and reliable worker matching. It also supports secure
                    payment systems, ensuring smooth and timely transactions for
                    both parties. By using Find Workers, employers save time,
                    reduce hiring risks, and get access to dependable workers,
                    while workers gain consistent job opportunities and fair
                    wages—creating a balanced and trustworthy labour
                    marketplace.
                  </p>
                </div>
              </div>
              {/* Image */}
              <img
                className="h-56  rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-96 lg:w-[460px]"
                src="https://www.42gears.com/wp-content/uploads/2020/01/Featured-Image-4-benefits-of-frontline-worker-technologies-01.png"
                alt="Construction workers on site"
              />
            </div>
          </div>
        </div>

        <div></div>
      </section>
      {/*Services section*/}
      <section className="relative w-full min-h-full">
        <div className="flex flex-col items-center">
          <div className="w-screen py-10">
            <h1 className="text-4xl text-blue-700 font-extrabold">
              Services on demand
            </h1>
            <p className="text-sm py-5 font-medium">
              Construction jobs are now easier to manage with Find Workers, a
              reliable construction workers hiring platform that helps
              businesses find skilled labor quickly and efficiently.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://static.thenounproject.com/png/175831-200.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Labour
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Reliable and hardworking general labourers for all
                  construction and site-related tasks.
                </p>
                 <Link to='/labour'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 2*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-brick-wall-with-masonry-trowel-construction-logo-png-image_16348413.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Mason
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Skilled masons specialize in bricklaying, plastering, &
                  structural work for durable construction.
                </p>
                <Link to='/mason'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 3*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://png.pngtree.com/recommend-works/png-clipart/20240627/ourmid/pngtree-roll-paint-brush-illustration-png-image_12861772.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Painter
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Professional painters ensuring high-quality wall finishes,
                  interior, and exterior painting services.
                </p>

                <Link to='/painter'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/*card plumber*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10362/10362256.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Plumber
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Expert plumbers for seamless water supply, drainage, and
                  plumbing system installations and repairs.
                </p>
 
                <Link to='/plumber'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 4*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/94/94096.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Carpenter
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Experienced carpenters deliver customized woodwork solutions
                  for furniture, doors, and interiors.
                </p>
                <Link to='/carpenter'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 5*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://static.thenounproject.com/png/3383280-200.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Electrician
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Qualified electricians for safe electrical installations,
                  maintenance, and fault repair services.
                </p>
                 <Link to='/electrician'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 6*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7333/7333776.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Foremen
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Efficient foremen to oversee construction sites and ensure
                  timely project completion.
                </p>
                  <Link to='/foremen'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 7*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7822/7822112.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Supervisor
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Responsible supervisors to monitor workers, manage tasks, and
                  maintain workplace safety.
                </p>
                 <Link to='/supervisor'>
                <button 
                
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 8*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://www.svgrepo.com/show/307893/internet-user-software-engineer-programmer-software-developer.svg"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Engineer
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Expert engineers providing technical solutions for design,
                  planning, and execution of projects.
                </p>

                <Link to='/engineer'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 9*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://png.pngtree.com/png-vector/20220908/ourmid/pngtree-welder-logo-illustration-png-image_6143466.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  Welder
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Welders play a crucial role in fabricating and maintaining
                  steel structures.
                </p>

                <Link to='/welder'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
            {/* Card 10*/}
            <div
              className="
        group
        w-full max-w-sm mx-auto
        min-h-[20rem]
        rounded-2xl p-6
        relative overflow-hidden
        transition-all duration-500
        before:content-['']
        before:absolute before:inset-0
        before:bg-blue-50 hover:before:bg-blue-700
        before:transition-all before:duration-500
        before:z-0
      "
            >
              <div className="relative z-10 text-center text-black group-hover:text-white transition-all duration-500">
                <img
                  src="https://static.thenounproject.com/png/146720-200.png"
                  alt="Labour"
                  className="
            h-20 w-20 sm:h-24 sm:w-24
            mx-auto object-contain
            group-hover:invert
            transition-all duration-500
          "
                />

                <h2 className="text-xl sm:text-2xl font-bold mt-4 text-blue-700 group-hover:text-white">
                  ITI/Technician
                </h2>

                <p className="text-sm sm:text-base mt-2 px-2">
                  Certified ITI technicians offer specialized skills for
                  machinery maintenance and technical support.
                </p>

                <Link to='/iti-technician'>
                <button
                  className="
            mt-5 px-6 py-2 rounded
            bg-blue-700 text-white font-medium
            group-hover:bg-white group-hover:text-blue-700
            transition-all duration-300
            hover:-translate-y-1 hover:scale-105
          "
                >
                  Apply
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Content card*/}
      <section className="relative w-full min-h-full">
        {/*Content*/}
        <div className="relative  flex flex-col items-center px-4 mt-20 lg:mt-10">
          <div className="bg-white -mt-10 lg:mt-10 lg:mr-24 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className=" mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-10  shadow-sm md:flex-row md:gap-10 ">
              {/* Image */}
              <img
                className="h-56  rounded-lg  object-cover sm:h-64 md:h-auto md:w-56 lg:h-96 lg:w-[460px]"
               src={`${import.meta.env.BASE_URL}chowk.png`}
                alt="Construction workers on site"
              />
              {/* Content */}
              <div className="flex flex-col justify-center md:px-4 text-left -mt-4 lg:-mt-14 ">
                <h3 className="mb-4 text-3xl font-bold text-blue-700">
                  Revolutionize Construction Jobs
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p className="text-sm">
                    Leave behind the days of waiting at labor chowks. Find
                    Workers, a trusted platform for hiring construction
                    professionals, puts opportunities right at your fingertips.
                    Discover jobs that match your skills and location, access
                    expert training resources, and earn better pay—all without
                    the hassle of migrating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </section>
      {/*Footer*/}
     <div className="-mb-10">
      <Footer/>
     </div>
    </div>
  );
}

export default Workers;
