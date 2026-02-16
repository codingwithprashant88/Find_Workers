import React from 'react'

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
      <p className="text-sm leading-relaxed text-gray-900">
        Building the future of construction by digitally connecting skilled, semi-skilled, and unskilled workers to projects nationwide.
      </p>

      {/* Social Icons */}
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
      <ul className="space-y-3 text-sm text-gray-900">
        <li><a href="#" className="hover:text-white transition">Home</a></li>
        <li><a href="#" className="hover:text-white transition">About Us</a></li>
        <li><a href="#" className="hover:text-white transition">Services</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        About us
      </h3>
      <ul className="space-y-3 text-sm text-gray-900 hover:cursor-pointer ">
        <li className='hover:text-white transition'>Contact us</li>
        <li className='hover:text-white transition'>Media</li>
        <li className='hover:text-white transition'>Business</li>
        <li className='hover:text-white transition'>Terms & Conditions</li>
        <li className='hover:text-white transition'>Refund Policy</li>
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
      <p>© {new Date().getFullYear()} Find Workers. All rights reserved.</p>
      <div className="flex gap-6 mt-3 sm:mt-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Support</a>
      </div>
    </div>
  </div>
</footer>
                 </div>
          </div>
        </section>

  )
}

export default Footer