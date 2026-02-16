import React,{useState} from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../Alert/AlertMsg";

function ItI() {
   const [ragisterItI, setRagisterItI] = useState({
            name: "",
            age: "",
            phone: "",
            email: "",
            category: "",
          });
          const navigate = useNavigate()
  const allTypes = [
    "pump operator cum mechanic (पंप ऑपरेटर कममैकेनिक)",
    "fitter (फिटर)",
    "Belt Jointer (बेल्ट जोइंटर)",
    " Electrician (इलेक्ट्रीशियन)",
    " Mechanical ITI (मैकेनिकल आई.टी.आई)",
    " plumber (प्लंबर)",
    "PCM Operator (पीसीएम ऑपरेटर )",
    "wood work technician (लकड़ी का काम)",
    "lift and escalator mechanic (लिफ्ट और एस्केलेटर मैकेनिक)",
    "electrical ITI (विद्युत आई.टी.आई)",
    "Mason (राजमिस्त्री)",
    "welder (वेल्डर)",
    "other skills (अन्य)",
  ];

  const handleChange = (e) => {
              const { name, value } = e.target;
          
              setRagisterItI((prev) => ({
                ...prev,
                [name]: value,
              }));
            };
          
            const handleSubmit = async (e) => {
              e.preventDefault();
              const url = "http://localhost:5000/api/Registration";
              const token = localStorage.getItem("token");
              try {
                const { name, age, phone, email, category } = ragisterItI;
                if (!name || !age || !phone || !email || !category) {
                  return handleError("All fields are required");
                }
                const response = await fetch(url, {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                  },
                  body: JSON.stringify(ragisterItI),
                });
          
                const data = await response.json();
          
                const { success, message, error } = data;
                if (success) {
                  handleSuccess(message);
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                } else if (error) {
                  const details = error?.details[0].message;
                  handleError(details);
                } else if (message) {
                  handleError(message);
                }
              } catch (error) {
                return handleError(error);
              }
            };
  return (
    <>
      <Header />
      {/*top Info Card Section*/}
      <section className="relative w-full min-h-full">
        <div className="relative flex flex-col items-center mt-10">
          <div className="w-screen  bg-blue-100 p-10">
            {/*Content + Image */}
            <div className="bg-[#f5f4ff] mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-lg bg-neutral-primary-soft p-20 lg:pb-10 lg:pt-10 shadow-sm md:flex-row md:gap-10">
              <div className="flex flex-col justify-center text-left px-4 p-5">
                <h1 className="mb-4 text-4xl  text-blue-700 font-extrabold">
                  Apply for{" "}
                  <span className="text-orange-500">Construction</span> Jobs
                  That Match Your Skills
                </h1>
                <p className="py-1 text-black/75  ">
                  This platform is built to help construction workers find the
                  right job without stress or middlemen. Workers can easily
                  create their profile, add personal details, select their work
                  category, and showcase their skills and experience.
                </p>
              </div>
              <img
                src="https://www.dhartiiti.org/assets/images/fitter.jpg"
                className="h-56  rounded-lg object-cover sm:h-64 md:h-auto md:w-56 lg:h-96 lg:w-[460px]"
                alt="Information"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply*/}
      <section className="relative w-full min-h-full">
        <div className="realtive flex flex-col items-center">
          <div className="w-screen bg-blue-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10">
                Who Can Apply
              </h1>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mb-5">
                {allTypes.map((item, index) => (
                  <div
                    key={index}
                    className="bg-yellow-400/60 rounded-2xl shadow-md p-6 text-gray-800 font-semibold text-lg hover:scale-105 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ragistration form section*/}
      <section className="relative w-full min-h-full">
        <div className="relative flex flex-col items-center justify-center px-4 ">
          <div className="w-screen  bg-blue-100 rounded-2xl  p-6 sm:p-8">
            <div className="min-w-lg  ">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                Worker Registration
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Full Name
                    </label>
                    <input
                    onChange={handleChange}
                    name="name"
                    value={ragisterItI.name}
                      type="text"
                      placeholder="Enter full name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Age
                    </label>
                    <input
                     onChange={handleChange}
                    name="age"
                    value={ragisterItI.age}
                      type="number"
                      placeholder="Enter age"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Phone Number
                    </label>
                    <input
                     onChange={handleChange}
                    name="phone"
                    value={ragisterItI.phone}
                    maxLength={10}
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email Address
                    </label>
                    <input
                     onChange={handleChange}
                    name="email"
                    value={ragisterItI.email}
                      type="email"
                      placeholder="Enter email"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Category - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Work Category
                  </label>
                  <select  onChange={handleChange}
                    name="category"
                    value={ragisterItI.category} className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value=''>Select category</option>
                    {allTypes.map((category, index) => (
                      <option key={index}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-64 mt-4 bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Register Worker
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*Footer*/}
      <div className="-mb-10">
        <section className="relative w-full min-h-full  ">
          <div className="relative  flex flex-col items-center  px-4  ">
            <div className="bg-blue-700  px-4 sm:px-6 md:px-16 lg:px-32 w-screen">
              <footer className="bg-blue-700 text-gray-300 ">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Brand / About */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Find Workers
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-900">
                      Building the future of construction by digitally
                      connecting skilled, semi-skilled, and unskilled workers to
                      projects nationwide.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                      {["facebook", "twitter", "instagram", "linkedin"].map(
                        (item) => (
                          <a
                            key={item}
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                          >
                            <i className={`fab fa-${item}`}></i>
                          </a>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-900">
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      About us
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-900 hover:cursor-pointer ">
                      <li className="hover:text-white transition">
                        Contact us
                      </li>
                      <li className="hover:text-white transition">Media</li>
                      <li className="hover:text-white transition">Business</li>
                      <li className="hover:text-white transition">
                        Terms & Conditions
                      </li>
                      <li className="hover:text-white transition">
                        Refund Policy
                      </li>
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Newsletter
                    </h3>
                    <p className="text-sm text-gray-900 mb-4">
                      Subscribe to receive updates and offers.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full rounded-lg px-4 py-2 text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                      <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900">
                  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-900">
                    <p>
                      © {new Date().getFullYear()} Find Workers. All rights
                      reserved.
                    </p>
                    <div className="flex gap-6 mt-3 sm:mt-0">
                      <a href="#" className="hover:text-white">
                        Privacy Policy
                      </a>
                      <a href="#" className="hover:text-white">
                        Terms
                      </a>
                      <a href="#" className="hover:text-white">
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ItI;
