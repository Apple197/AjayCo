import React from "react";
import Link from "next/link";
const TrustedBy = () => {
  return (
    <div className="trustedby container  px-5  py-10  mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="left  pr-10 ">
          <h4 className="text-2xl  text-violet-600 font-bold">
            Trusted Worldwide
          </h4>
          <h2 className="text-3xl font-extrabold mt-2 mb-5  text-gray-900 tracking-tighter">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className=" text-lg   text-gray-500">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="buttons my-5 border-t border-gray-500 py-5">
            <Link
              href="#"
              className="flex   text-black   gap-2 py-3 rounded-md   hover:bg-violet-950-100 transition duration-300 ease-in-out w-full  cursor-pointer"
            >
              <span className="text-violet-600">Explore Legality Guid</span>
              <img
                src="/assets/arrow.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
            </Link>
            <Link
              href="#"
              className="flex   text-black gap-2   py-3 rounded-md   hover:bg-violet-950-100 transition duration-300 ease-in-out w-full  cursor-pointer"
            >
              <span className="text-violet-600">Explore Legality Guid</span>
              <img
                src="/assets/arrow.svg"
                alt="GitHub"
                className="w-6 h-6 mr-2  "
              />
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="grid grid-cols-2 gap-6">
            <div className="card bg-white p-4 rounded-lg shadow-md">
              <img
                src="/assets/uptime.svg"
                alt="Icon 1"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                99.99% uptime
              </h3>
              <p className="text-gray-600">
                For Landwind, with zero maintenance downtime
              </p>
            </div>

            <div className="card bg-white p-4 rounded-lg shadow-md">
              <img
                src="/assets/user.svg"
                alt="Icon 2"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                600M+ Users
              </h3>
              <p className="text-gray-600">
                Trusted by over 600 milion users around the world
              </p>
            </div>

            <div className="card bg-white p-4 rounded-lg shadow-md">
              <img
                src="/assets/countries.svg"
                alt="Icon 3"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                100+ countries
              </h3>
              <p className="text-gray-600">
                Have used Landwind to create functional websites
              </p>
            </div>

            <div className="card bg-white p-4 rounded-lg shadow-md">
              <img
                src="/assets/cart.svg"
                alt="Icon 4"
                className="w-12 h-12 mb-4 text-purple-800"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                5+ Million
              </h3>
              <p className="text-gray-600">Transactions per day`</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
