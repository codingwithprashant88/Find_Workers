import React, { useState } from "react";
import { handleError, handleSuccess } from "../Alert/AlertMsg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password } = loginInfo;
    if (!email || !password) {
      return handleError(" email or password must required");
    }
    try {
      const url = `http://10.223.194.153:5000/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();

      const { success, message, error, jwtToken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInuser", name);
        setTimeout(() => {
          navigate("/");
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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side – Login Form */}
      <div className="flex items-center justify-center px-4 lg:pr-14">
        <div className="w-full max-w-md p-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="find-workers" className="h-28" />
          </div>

          {/* Intro */}
          <p className="text-center text-gray-600 text-sm mb-2 font-serif">
            Welcome back! Login to continue finding better opportunities.
          </p>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={loginInfo.email}
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
                name="password"
                value={loginInfo.password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side – Image */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
          alt="Login Visual"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}

export default Login;
