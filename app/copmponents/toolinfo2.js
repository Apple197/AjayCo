import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const toolinfo2 = () => {
  return (
    <div className="tools-section bg-custom-gray w-full">
      <div className="container px-5 mx-auto md:py-10">
        <div className="grid md:grid-cols-2 lg:gap-20  ">
          <div className="left mt-5 order-2 lg:order-1">
            <img src="/assets/toolsinfo2.png" alt="Tools" />
          </div>
          <div className="right lg:pt-16 ">
            <h2 className="text-3xl text-black font-bold lg:text-4xl ">
              We invest in the world’s potential
            </h2>
            <p
              className="text-lg   my-8 text-gray-500  lg:text-lg"
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
                <span className="  ">Dynamic reports and dashboards</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Templates for everyone</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Development workflow</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Limitless business automation</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 my-5">
                {" "}
                {/* Flex container with spacing */}
                <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
                {/* Icon with some custom styles */}
                <span className=" ">Knowledge management</span>
              </div>
            </div>
            <p className="text-md text-gray-400 my-8 lg:text-lg">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default toolinfo2;
