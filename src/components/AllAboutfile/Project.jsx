import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'

function Project() {
   const [fillter, setFilter] = useState({
    project: '',
    work : '',
    company: '',
    State: '',
   })

  const [hiring, setHiring] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCard = async () => {
    try {
      setLoading(true);
       const query = new URLSearchParams(fillter).toString();
      const url = `http://localhost:5000/hiring/get?${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setHiring(data.card || []);
    } catch (error) {
      console.error("Failed to fetch card", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCard();
  }, [fillter]);

  return (
    <>
      <Header />
      <section className="relative w-full min-h-full">
        <div className="relative flex flex-col items-center mt-20">
          <div className="bg-white mt-5 px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-20 pb-10 shadow-sm md:flex-row md:gap-10">
              <div className="flex flex-col items-start md:px-4 text-left -mt-9 lg:-mt-14">
                <h1 className="text-3xl font-extrabold">
                  Find Workers – Your Workforce, Just a Click Away 🏗️
                </h1>
                <div className="space-y-2 py-5 text-black leading-relaxed">
                  <p className="text-sm">
                    Find Workers is a smart hiring platform designed to connect
                    contractors, builders, and project owners with skilled and
                    verified construction workers across India. Whether you need
                    a single worker or a full team, Find Workers helps you hire
                    faster, smarter, and without middlemen.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">
                    How to Apply (Step-by-Step):
                  </h2>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Fill Company Details</li>
                    <li>Add Labour Requirements</li>
                    <li>Submit the Project Form</li>
                    <li>Get Verified & Connected</li>
                  </ul>
                </div>
              </div>
              <img
                className="h-56  rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-96 lg:w-[460px]"
                src="https://3d-ace.com/wp-content/uploads/flexible-reference.png"
                alt="Construction workers on site"
              />
            </div>
          </div>
        </div>
      </section>
      {/*Filter section*/}
      <section className="mt-5 px-6">
        <h2 className="mb-5 text-2xl font-bold ">Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div>
            <h3 className="pb-5 text-start">Project Type</h3>
            <select value={fillter.project} onChange={(e) => setFilter({...fillter, project: e.target.value})} className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
              <option value="" disabled hidden selected>
                All
              </option>
              <option value="Commercial Building">Commercial Building </option>
              <option value="Food manufacturing product">
                Food manufacturing product{" "}
              </option>
              <option value="Industrial building">Industrial building </option>
              <option value="Industrial manufacturing facilities ">
                Industrial manufacturing facilities{" "}
              </option>
              <option value="Residential">Residential </option>
              <option value="Warehouse ">Warehouse </option>
            </select>
          </div>
          <div>
            <h3 className="pb-5 text-start">Work type</h3>
            <select value={fillter.work} onChange={(e) => setFilter({...fillter, work: e.target.value})}  className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
              <option value="" disabled hidden selected>
                All
              </option>
              <option value="Labour Supply">Labour Supply</option>
              <option value="Measurement Basis">Measurement Basis</option>
            </select>
          </div>
          <div>
            <h3 className="pb-5 text-start">Company</h3>
            <select value={fillter.company} onChange={(e) => setFilter({...fillter, company: e.target.value})}  className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
              <option value="" disabled hidden selected>
                All
              </option>
              <option value="DMart ">DMart </option>
              <option value="Godrej ">Godrej </option>
              <option value="Gps Renewables Private Limited ">
                Gps Renewables Private Limited{" "}
              </option>
              <option value="L&T Construction ">L&T Construction </option>
              <option value="Maharaja Dehydration pvt ltd  ">
                Maharaja Dehydration pvt ltd{" "}
              </option>
              <option value="Ramoji Film City ">Ramoji Film City </option>
              <option value="Reliance  Industries ">
                Reliance Industries{" "}
              </option>
            </select>
          </div>
          <div>
            <h3 className="pb-5 text-start">State</h3>
            <select className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
              <option value="" disabled hidden selected>
                All
              </option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Telangana">Telangana</option>
            </select>
          </div>
        </div>
      </section>
      {/*card*/}
      <section className="mt-10 px-6">
        {loading && (
           <p className="text-center text-gray-600">
            Loading jobs...
          </p>
        )}

         {!loading && hiring.length === 0 && (
          <p className="text-center text-gray-500">
            No jobs found
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE – YOUR CARDS (UNCHANGED) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-3 lg:gap-x-3 md:pr-10 lg:pr-10">
              {/* CARD 1 */}
              {hiring.map((post) => (
                <a key={post._id}
                href="#"
                className="bg-orange-300/30 min-h-full rounded-lg block  p-6 border-yellow-500 border-2 rounded-base shadow-xs hover:bg-neutral-secondary-medium"
              >
                <h5 className="mb-3 text-sm tracking-tight text-heading leading-8 text-start">
                  <span className="font-semibold"> Location:</span> {post.location}
                </h5>

                <h5 className="mb-3 text-xs font-semibold tracking-wide text-white text-center mr-5 bg-red-600 px-4 py-1 mx-auto w-fit rounded-full -mt-5 uppercase">
                  Urgent Hiring
                </h5>

                <h5 className="mb-3 text-sm font-semibold tracking-tight text-heading leading-8 text-start -mt-5">
                 {post.category}
                </h5>

                <h5 className="mb-3 text-2xl font-bold tracking-tight text-heading leading-8 text-start -mt-5">
                  {post.title}
                </h5>

                <div className="flex space-x-2">
                  <p className="text-sm text-start">
                    <span className="font-semibold">Rate:</span> ₹{post.price} per
                    month
                  </p>
                  <p className="text-sm text-start">
                    <span className="font-semibold">Worker required:</span> {post.required}
                  </p>
                </div>

                <div className="text-start py-9">
                  <h5 className="text-sm border-2 px-3 rounded-full max-w-80 p-1 border-blue-400">
                    <span className="font-semibold">Project type:</span>{post.project}
                  </h5>
                  <h5 className="text-sm border-2 px-3 rounded-full max-w-80 p-1 mt-3 border-blue-400">
                    <span className="font-semibold">Work type:</span> {post.work}
                  </h5>
                </div>

                <button className="bg-blue-500 p-2 w-full rounded-lg">
                  Apply
                </button>
              </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – FORM (UNCHANGED) */}
          <div className="h-fit -mt-5">
            <div className="flex items-start justify-center px-4 sticky top-24">
              <div className="w-full max-w-md bg-white rounded-2xl p-6">
                <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
                  Company Details
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500"
                      placeholder="Enter email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Company Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500"
                    >
                      <option value="" disabled selected>
                        Select company type
                      </option>
                      <option>Construction</option>
                      <option>Contractor</option>
                      <option>Real Estate</option>
                      <option>Manpower Agency</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full bg-red-600 text-white py-2 rounded-xl font-semibold hover:bg-red-700">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="-mb-10">
        <Footer/>
      </div>
    </>
  );
}

export default Project;
