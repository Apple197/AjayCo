import React from "react";
import { MdMenu } from "react-icons/md";
import { Gi3dGlasses } from "react-icons/gi";
import { BsCash } from "react-icons/bs";

const navbar = () => {
  return (
    <div className="container-fluid  px-10  ">
      <div id="nav-bar  " className="flex justify-between py-3">
        <div className="logo ">
          <h2 className="font-medium text-2xl  text-black ">AjayPoddar</h2>
        </div>

        {/* //humber menu */}

        <div className="hamburger  md:hidden">
          <MdMenu size={"24px"} className="text-black" />
        </div>

        <nav className="navbar hidden md:flex">
          <ul className="flex justify-between gap-10 text-black text-lg">
            <li>
              <a href="/" className="hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-5 px-5 text-lg border rounded-lg group hover:bg-blue-700 cursor-pointer">
          <Gi3dGlasses
            size={"24px"}
            className="text-black group-hover:text-red-100"
          />
          <h4 className="text-black group-hover:text-red-100">Join Club</h4>
          <BsCash
            size={"24px"}
            className="text-black group-hover:text-red-100"
          />
        </div>
      </div>
    </div>
  );
};

export default navbar;
