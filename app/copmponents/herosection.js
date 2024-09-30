import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-5 md:my-[5rem] mt-20  pb-5 ">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="md:mt-10 flex flex-col justify-center md:gap-5">
          {" "}
          {/* Centering the content vertically */}
          <h2 className="text-4xl font-extrabold mb-5 text-black md:text-6xl">
            Building digital products & brands.
          </h2>
          <p className="text-black text-lg leading-6">
            This free and open-source landing page template was built using the
            utility classes from Tailwind CSS and based on the components from
            the Flowbite Library and the Blocks System.
          </p>
          <div className="flex flex-col md:flex-row mt-10 gap-2 items-center">
            <Link
              href="#"
              className="flex items-center justify-center bg-white text-black px-6 py-3 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-300 ease-in-out w-full md:w-auto cursor-pointer"
            >
              <img
                src="/assets/github.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
              <span>View on GitHub</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300 ease-in-out w-full md:w-auto cursor-pointer"
            >
              <img
                src="/assets/figma.svg"
                alt="Figma"
                className="w-6 h-6 mr-2"
              />
              <span>View on Figma</span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/heroimage.png"
            alt="Hero"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
