import React from 'react'
import Footer from '../Footer/Footer'

function FeedbackForm() {
  return (
  <>
  <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 ">
  <div className="max-w-3xl mx-auto text-center mb-10 ">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      Do You Have Any Questions?
    </h1>
    <p className="mt-3 text-gray-600 dark:text-gray-400">
      Feel free to contact us. We’ll get back to you as soon as possible.
    </p>
  </div>

  <form className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Full Name */}
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Phone Number
      </label>
      <input
        type="number"
        placeholder="Enter Your Number"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter Your Email"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>

    {/* Message */}
    <div className="md:col-span-2">
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Your Message
      </label>
      <textarea
        rows="4"
        placeholder="Write your message here..."
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="md:col-span-2 text-center">
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Send Message
      </button>
    </div>
  </form>
</section>
  <div className='-mb-20'>
    <Footer/>
  </div>
  </>

  )
}

export default FeedbackForm