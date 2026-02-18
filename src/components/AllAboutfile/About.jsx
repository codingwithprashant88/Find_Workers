import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



function About() {
  return (
    <>
    <Header/>
    <div className="mt-[1000px] md:mt-[1009px] lg:mt-[920px] ">
      <section className="relative w-full min-h-full ">
        {/* Background overlay + image */}
        <div className="fixed inset-0 z-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/950/142/small/construction-worker-silhouette-at-work-background-vector.jpg"
            className="w-full h-full object-cover"
            alt="Construction background"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center -mt-[1000px] lg:-mt-[900px] px-4">
          <div className="bg-white mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-6 shadow-sm md:flex-row md:gap-10">
              {/* Image */}
              <img
                className="h-56 w-full rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-80 lg:w-[450px]"
                src="https://russiaspivottoasia.com/wp-content/uploads/2025/07/India-1.jpg"
                alt="Construction workers on site"
              />

              {/* Content */}
              <div className="flex flex-col justify-center md:px-4">
                <h2 className="mb-2 text-sm font-semibold text-black">
                  <Link
                    to="/"
                    className="text-purple-700 hover:text-blue-700 cursor-pointer"
                  >
                    Home -{" "}
                  </Link>
                  About Us New
                </h2>

                <h3 className="mb-4 text-2xl font-bold text-blue-700">
                  About Find Workers
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    Welcome to Find Workers, India’s 1st job platform for
                    Blue-Collar Worker in the Construction industry. We
                    revolutionize the hiring process by connecting businesses
                    with skilled blue-collar worker and professionals through
                    our innovative platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Card Second*/}
      <section className="relative w-full min-h-full  z-10">
        <div className="relative z-10 flex flex-col items-center -mt-[40px] md:-mt-[40px] lg:-mt-[40px] px-4">
          <div className="bg-white mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-6 shadow-sm md:flex-row md:gap-10">
              {/* Image */}
              <img
                className="h-56 w-full rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-80 lg:w-[450px]"
                src="https://cms.thewire.in/wp-content/uploads/2018/11/indian_workers_in_the_Gulf.jpg"
                alt="Construction workers on site"
              />

              {/* Content */}
              <div className="flex flex-col justify-center md:px-4">
                <h2 className="mb-2 text-sm font-bold text-black lg:text-2xl ">
                  Empowering India’s Workforce, One Job at a Time
                </h2>

                <h3 className="mb-4 text-2xl font-bold text-blue-700">
                  Find Workers
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    Find Workers is a smart job-matching platform created to
                    bridge the gap between skilled blue-collar workers and
                    genuine hiring needs. It gives workers direct access to work
                    opportunities while allowing businesses and contractors to
                    discover dependable manpower without delays or
                    complications.
                  </p>
                  <p>
                    By combining technology with ground-level understanding,
                    Find Workers makes job discovery faster, safer, and more
                    transparent. Workers gain consistent employment options,
                    while employers benefit from a reliable hiring process that
                    saves time and effort. The platform is designed to serve
                    communities across metros as well as smaller cities,
                    ensuring equal access to opportunities regardless of
                    location.
                  </p>
                  <p>
                    Beyond employment, Find Workers focuses on dignity, trust,
                    and long-term growth for the workforce. Its mission is to
                    reshape the way informal labour markets operate in India by
                    creating a system where opportunity is open, fair, and
                    driven by direct connections rather than intermediaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <section className="relative w-full min-h-full  z-10">
        <div className="relative z-10 flex flex-col items-center -mt-[10px] lg:-mt-[45px] px-4">
          <h1 className="text-3xl mt-24 text-white font-semibold">
        For millions, a single day without work is a day without a meal.
      </h1>
          <div className="bg-white mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className=" mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-6 shadow-sm md:flex-row md:gap-10">
              {/* Content left */}
              <div className="flex flex-col justify-center md:px-4">
                <h3 className="mb-4 text-2xl font-bold text-black text-left">
                  About Find Workers
                </h3>

                <div className=" space-y-4 text-black leading-relaxed">
                  <p className="text-left">
                    Founded in 2020 by Prashant Mandal, Find Workers was created
                    to address the urgent need for structure, fairness, and
                    opportunity in the lives of blue-collar workers across
                    India. The platform was built to solve hiring challenges in
                    sectors like construction by directly connecting skilled
                    laborers with companies seeking reliable manpower. By
                    removing intermediaries and leveraging technology, we ensure
                    that workers have timely access to jobs, transparent wages,
                    and dignity in their work.
                  </p>
                  <p className="text-left ">
                    Our mission is to empower India’s unorganised workforce by
                    making job opportunities accessible, streamlined, and
                    trustworthy. With every worker onboarded, we move closer to
                    a future where blue-collar workers are recognized,
                    respected, and essential contributors to India’s growth
                    story.
                  </p>
                </div>
              </div>
              {/* Image */}
              <img
                className="h-56 w-full rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-80 lg:w-[450px]"
                src="https://img.freepik.com/premium-photo/industrial-worker-working-factory-industrial-worker-working-factory-back-view-male-workers-factory-ai-generated_585735-4217.jpg"
                alt="Construction workers on site"
              />

              {/* Content  right*/}
              <div className="flex flex-col justify-center md:px-4 -mt-44 py-44">
                <h3 className="mb-4 text-2xl font-bold text-black text-left">
                  Our Mission
                </h3>

                <div className="space-y-4 text-black leading-relaxed">
                  <p className="text-left">
                    To empower blue collar workers by creating a trusted,
                    tech-driven job platform that ensures easy, fair, and direct
                    access to employment opportunities. We aim to solve the
                    hiring challenges in the construction and informal labour
                    sectors by connecting skilled workers with businesses that
                    value reliability, transparency, and human dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="relative w-full min-h-full  z-10">
        <div className="relative z-10 flex flex-col items-center -mt-[10px] lg:-mt-[45px] px-4">
          <h1 className="text-3xl font-extrabold mt-20 text-white ">
          Why Hire From Find Workers!
        </h1>
          <div className="bg-gray-800 mt-10 px-4 sm:px-6 md:px-16 lg:px-32 w-screen ">
             
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-heading sm:grid-cols-3 xl:grid-cols-6 sm:p-8 text-white text-center">
              <div class="flex flex-col">
                <dt class="mb-2 text-2xl font-extrabold tracking-tight text-heading">
                  1L+
                </dt>
                <dd class="text-body">Workers trust and use our platform</dd>
              </div>
              <div class="flex flex-col">
                <dt class="mb-2 text-2xl font-extrabold tracking-tight text-heading">
                  10,000+
                </dt>
                <dd class="text-body">Contractors onboarded on our platform</dd>
              </div>
              <div class="flex flex-col">
                <dt class="mb-2 text-2xl font-extrabold tracking-tight text-heading">
                  200+
                </dt>
                <dd class="text-body">
                  Companies using our platform for their bulk hiring
                </dd>
              </div>
              <div class="flex flex-col">
                <dt class="mb-2 text-2xl font-extrabold tracking-tight text-heading">
                  100+
                </dt>
                <dd class="text-body">
                  General Contractors & Builder/Developers with active projects
                  on our platform
                </dd>
              </div>
            </dl>
        </div>
        </div>
       
       </section>
        
            {/*Footer*/}
       <div className="-mb-20">
        <Footer/>
       </div>
        </div>
    </>
  );
}

export default About;
