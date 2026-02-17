import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser'
import { handleError, handleSuccess } from '../Alert/AlertMsg'

function FeedbackForm() {
     const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
        e.preventDefault();
       const serviceId = 'service_le6ndrs';
         const tempalteId = 'template_xspyzqn';
         const publicId = 'lCv1dXb3xbCFUtilg';
        
          const TempleteInfo = {
             from_name:  name,
             from_number: number,
             from_email: email,
             to_name: "Find_workers",
             message: message,
         }

         emailjs.send(serviceId, tempalteId, TempleteInfo, publicId).then(() => {
          handleSuccess('Your Form Was Submitted SuccessFuly')
          setName('')
          setEmail('')
          setNumber('')
          setMessage('')
         }).catch((error) => {
          handleError(error.text || "Something went wrong")
         })

  }

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

  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Full Name */}
     <input type="hidden" name="form-name" value="contact" />
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Full Name
      </label>
      <input
      onChange={(e) => setName(e.target.value)}
        type="text"
        name='name'
        value={name}
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
       onChange={(e) => setNumber(e.target.value)}
        type="tel"
        name='number'
        value={number}
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
       onChange={(e) => setEmail(e.target.value)}
        type="email"
        name='email'
        value={email}
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
       onChange={(e) => setMessage(e.target.value)}
        rows="4"
        name='message'
        value={message}
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