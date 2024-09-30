import React from "react";
import { FaCheck } from "react-icons/fa";

const pricing = () => {
  return (
    <div className="pricing-section container px-4 mx-auto">
      <div className="contant md:text-center mx-auto max-w-3xl">
        <h2 className="text-3xl lg:text-5xl text-black font-extrabold mb-4">
          Designed for business teams like yours
        </h2>
        <p className="text-lg text-gray-400 mb-5">
          Here at Landwind, we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-8 container mx-auto md:mt-[3rem]">
        {/* <!-- Basic Plan --> */}
        <div className="cards  bg-custom-gray shadow-lg rounded-lg p-3 md:p-6 text-center">
          <h2 className="text-2xl  lg:text-3xl font-semibold mb-4 text-black">
            {" "}
            Starter
          </h2>
          <p className="text-lg text-gray-400 m-3">
            Best option for personal use & for your next project.
          </p>
          <p className="text-gray-900 text-4xl font-bold mb-6">
            $29 <span className="text-base text-gray-500">/month</span>
          </p>
          <div className="features ">
            <ul className="mb-6">
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Individual
                configuration
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> No setup, or
                hidden fees
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Team size: 1
                developer
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" />
                Premium support: 6 months
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Free
                updates: 6 months
              </li>
            </ul>
          </div>
          <button className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-900 transition ">
            Choose Plan
          </button>
        </div>
        {/* <!-- company --> */}
        <div className="cards  bg-custom-gray shadow-lg rounded-lg p-3 md:p-6 text-center">
          <h2 className="text-2xl  lg:text-3xl font-semibold mb-4 text-black">
            {" "}
            Company
          </h2>
          <p className="text-md text-gray-400 m-3">
            {" "}
            Relevant for multiple users, extended & premium support.
          </p>
          <p className="text-gray-900 text-4xl font-bold mb-6">
            $99 <span className="text-base text-gray-500">/month</span>
          </p>
          <div className="features ">
            <ul className="mb-6">
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Individual
                configuration
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> No setup, or
                hidden fees
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Team size:
                10 developers
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Premium
                support: 24 months
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Free
                updates: 24 months
              </li>
            </ul>
          </div>
          <button className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-900 transition ">
            Choose Plan
          </button>
        </div>
        {/* <!-- Enterprise --> */}
        <div className="cards  bg-custom-gray shadow-lg rounded-lg p-3 md:p-6 text-center">
          <h2 className="text-2xl  lg:text-3xl font-semibold mb-4 text-black">
            {" "}
            Enterprise
          </h2>
          <p className="text-md text-gray-400 m-3">
            {" "}
            Best for large scale uses and extended redistribution rights.
          </p>
          <p className="text-gray-900 text-4xl font-bold mb-6">
            $499 <span className="text-base text-gray-500">/month</span>
          </p>
          <div className="features ">
            <ul className="mb-6">
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Individual
                configuration
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> No setup, or
                hidden fees
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Team size:
                100 developer
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" />
                Premium support: 36 months
              </li>
              <li className="mb-5 text-gray-600 flex items-center ">
                <FaCheck className="h-5 w-5 text-green-500 mr-5" /> Free
                updates: 36 months
              </li>
            </ul>
          </div>
          <button className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-900 transition ">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default pricing;
