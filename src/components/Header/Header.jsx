import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import { handleSuccess } from "../Alert/AlertMsg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    handleSuccess("Logout SuccessFuly");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about" },
    { name: "Worker", slug: "/worker" },
    { name: "Business", slug: "/business" },
    { name: "Projects", slug: "/project" },
    { name: "Contact Us", slug: "/contact-us" },
  ];

  return (
    <section>
      <nav className="bg-white fixed w-screen z-50 top-0 start-0 shadow-sm">
        <div className="max-w-full-xl mx-auto flex items-center justify-between p-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-4">
              <img
                src="/logo.png"
                className="h-16 scale-[180%] w-auto object-contain"
                alt="Logo"
              />
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-semibold text-lg ml-60">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blue-700"
                      : "hover:text-blue-700 transition";
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Sign Up + Mobile Menu */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Desktop Sign Up */}
            <button
              onClick={handleLogout}
              className="hidden mr-20 md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SIDE NAV ================= */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/logo.png" className="h-10" alt="Logo" />
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.slug}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blue-600"
                      : "block hover:text-blue-600 transition";
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li className="pt-4">
              <Link
                onClick={handleLogout}
                className="block text-center px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <ToastContainer />
    </section>
  );
}

export default Header;
