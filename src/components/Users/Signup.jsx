import React, { useState } from "react";
import { handleError, handleSuccess } from "../Alert/AlertMsg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("name, email or password must required");
    }
    try {
      const url = `http://10.223.194.153:5000/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();

      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      {/* Left Side – Signup Form */}
      <div className="flex items-center justify-center  px-4 lg:pr-14">
        <div className="w-full max-w-md p-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="find-workers" className="h-28" />
          </div>

          {/* Intro */}
          <p className="text-center text-gray-600 text-sm mb-2 font-serif">
            Sign up to connect, grow, and find better work opportunities.
          </p>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                value={signupInfo.name}
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                value={signupInfo.email}
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                value={signupInfo.password}
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side – Image */}
      <div className="hidden md:block">
        <img
          src="https://static.investindia.gov.in/s3fs-public/2024-12/consw.png"
          alt="Signup Visual"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}

export default Signup;
