import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Tools = () => {
  return (
    // Full-width background with custom color
    <div className="tools-section bg-custom-gray w-full">
      <div className="container px-5 mx-auto py-10">
        <div className="grid md:grid-cols-2 lg:gap-20  ">
          <div className="left lg:pt-16">
            <h2 className="text-3xl text-black font-extrabold lg:text-4xl ">
              Work with tools you already use
            </h2>
            <p
              className="text-md leading-5 my-8 text-gray-400  lg:text-lg"
              style={{ fontWeight: 300 }}
            >
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <div className="iconsection my-5 border-t border-gray-400 text-base font-medium leading-tight text-black ">
              <div className="flex items-center space-x-2 my-5 ">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className="  ">
                  Continuous integration and deployment
                </span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Continuous integration and deployment</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Continuous integration and deployment</span>
              </div>
            </div>
            <p className="text-md text-black my-8 lg:text-lg">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <div className="right mt-5">
            <img src="/assets/tools1.png" alt="Tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
