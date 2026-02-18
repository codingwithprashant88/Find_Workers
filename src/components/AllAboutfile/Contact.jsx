import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Alert/AlertMsg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!name, !number, !email, !message)) {
      return handleError("All fields are required");
    }
    if (number.length !== 10) {
        return   handleError("Phone number must be exactly 10 digits");
    }

    const serviceId = "service_le6ndrs";
    const tempalteId = "template_xspyzqn";
    const publicId = "lCv1dXb3xbCFUtilg";

    const TempleteInfo = {
      from_name: name,
      from_number: number,
      from_email: email,
      to_name: "Find_workers",
      message: message,
    };

    emailjs
      .send(serviceId, tempalteId, TempleteInfo, publicId)
      .then(() => {
        handleSuccess("Your Form Was Submitted SuccessFuly");
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => {
        handleError(error.text || "Something went wrong");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://www.visionhelpdesk.com/wp-content/uploads/2018/01/finding-helpdesk.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input type="hidden" name="from_name" value="content" />
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Number */}
            <div>
              <label className="block mb-1 font-medium">Number</label>
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                value={number}
                maxLength={10}
                placeholder="Enter your number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                value={message}
                placeholder="Write your message..."
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}

export default Contact;
