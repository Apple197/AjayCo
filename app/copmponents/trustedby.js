import React from "react";
import Link from "next/link";
const TrustedBy = () => {
  return (
    <div className="trustedby container  px-5  py-[3rem] md:py-[7rem]  mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="left  md:pr-10 ">
          <h4 className=" text-lg md:text-3xl md:mb-5  text-violet-600  font-semibold md:font-bold">
            Trusted Worldwide
          </h4>
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold  my-3  text-gray-900  ">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className=" text-lg   text-gray-500">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="buttons my-5 border-t border-gray-500  lg:mt-10">
            <Link
              href="#"
              className="flex   text-black  lg:mt-5  gap-2 py-3 rounded-md   hover:bg-violet-950-100 transition duration-300 ease-in-out w-full  cursor-pointer"
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
          <div className="grid grid-cols-2  md:gap-6">
            <div className="card   p-4 rounded-lg ">
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h3 className="text-xl text-black font-semibold mb-2">
                99.99% uptime
              </h3>
              <p className="text-gray-600">
                For Landwind, with zero maintenance downtime
              </p>
            </div>

            <div className="card   p-4 rounded-lg  ">
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h3 className="text-xl text-black font-semibold mb-2">
                600M+ Users
              </h3>
              <p className="text-gray-600">
                Trusted by over 600 milion users around the world
              </p>
            </div>

            <div className="card   p-4 rounded-lg  ">
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clip-rule="evenodd"
                />
              </svg>
              <h3 className="text-xl text-black font-semibold mb-2">
                100+ countries
              </h3>
              <p className="text-gray-600">
                Have used Landwind to create functional websites
              </p>
            </div>

            <div className="card   p-4 rounded-lg  ">
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
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
