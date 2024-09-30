"use client";

import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle mobile menu
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Store previous scroll position
  const [visible, setVisible] = useState(true); // Track navbar visibility

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to show/hide navbar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Hide on scroll down, show on scroll up
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-white  transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }    border-b border-gray-100`}
    >
      <div className="container mx-auto px-5 py-2">
        <div id="nav-bar" className="flex justify-between py-3 items-center">
          <div className="logo">
            <h2 className="font-medium text-2xl text-black">Ajay & co</h2>
          </div>

          {/* Hamburger menu for mobile */}
          <div
            className="hamburger md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <MdClose size={"24px"} className="text-black" />
            ) : (
              <MdMenu size={"24px"} className="text-black" />
            )}
          </div>

          {/* Navbar for desktop */}
          <nav className="hidden md:flex">
            <ul className="flex justify-between gap-10 text-black text-lg">
              <li>
                <a href="/" className="  hover:text-violet-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-violet-600">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-violet-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-violet-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu section */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li>
                  <a
                    href="/"
                    className="text-black bg-violet-400  hover:text-violet-800-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-black hover:text-blue-700">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-black hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-black hover:text-blue-700">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* CTA buttons for Register and Login */}
          <div className="hidden md:flex gap-5 text-lg">
            <button className="px-4 py-2 border rounded-lg bg-violet-600 hover:bg-violet-700  text-white">
              Register
            </button>
            <button className="px-4 py-2 border rounded-lg  bg-violet-600 hover:bg-violet-700  text-white ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
