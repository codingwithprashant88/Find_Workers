import React from "react";

function Footer() {
  return (
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
                <p className="text-sm leading-relaxed text-white">
                  Building the future of construction by digitally connecting
                  skilled, semi-skilled, and unskilled workers to projects
                  nationwide.
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
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
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
                  <li className=" text-white/70 hover:text-white transition">
                    Contact us
                  </li>
                  <li className=" text-white/70 hover:text-white transition">
                    Media
                  </li>
                  <li className=" text-white/70 hover:text-white transition">
                    Business
                  </li>
                  <li className=" text-white/70 hover:text-white transition">
                    Terms & Conditions
                  </li>
                  <li className=" text-white/70 hover:text-white transition">
                    Refund Policy
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact Details
                </h3>

               <div className="ml-10">
                 {/* Contact Row */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                    📞
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-white">
                    <h3 className="font-semibold text-sm">Phone</h3>
                    <p className="text-sm text-white">+91 0000000000</p>
                  </div>
                </div>
                {/* Contact Row */}
                <div className="flex items-center gap-4 py-5">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                    ✉️
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-white">
                    <h3 className="font-semibold text-sm">Email</h3>
                    <p className="text-sm text-white">findworkers@gmail.com</p>
                  </div>
                </div>
               </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-900">
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-900">
                <p className="text-white">
                  © {new Date().getFullYear()} Find Workers. All rights
                  reserved.
                </p>
                <div className="flex gap-6 mt-3 sm:mt-0">
                  <a href="#" className="text-white/60 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-white/60 hover:text-white">
                    Terms
                  </a>
                  <a href="#" className="text-white/60 hover:text-white">
                    Support
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Footer;
