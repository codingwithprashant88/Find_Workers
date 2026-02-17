import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function ClickBtn() {
  return (
<>
  <section className="min-h-screen flex flex-col">
    {/* Header */}
    <Header />

    {/* Push footer to bottom */}
    <main className="flex-grow"></main>

    {/* Footer – FULL WIDTH BACKGROUND */}
    <footer className="w-full bg-blue-700 text-gray-300 mt-auto">
      
      {/* Footer Content (CENTERED) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Find Workers
          </h2>
          <p className="text-sm text-white">
            Building the future of construction by digitally connecting
            skilled, semi-skilled, and unskilled workers nationwide.
          </p>

          <div className="flex gap-4 mt-6">
            {["facebook", "twitter", "instagram", "linkedin"].map((item) => (
              <a
                key={item}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <i className={`fab fa-${item}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-white/70">
            {["Home", "About Us", "Services", "Contact"].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            About Us
          </h3>
          <ul className="space-y-3 text-white/70">
            {[
              "Contact Us",
              "Media",
              "Business",
              "Terms & Conditions",
              "Refund Policy",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Details
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                📞
              </div>
              <p className="text-white">+91 0000000000</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                ✉️
              </div>
              <p className="text-white">findworkers@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar – FULL WIDTH */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between text-sm text-white">
          <p>
            © {new Date().getFullYear()} Find Workers. All rights reserved.
          </p>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <a className="text-white/60 hover:text-white">Privacy Policy</a>
            <a className="text-white/60 hover:text-white">Terms</a>
            <a className="text-white/60 hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  </section>
</>


  )
}

export default ClickBtn