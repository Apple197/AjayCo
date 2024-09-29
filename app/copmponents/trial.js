import React from "react";
import Link from "next/link";

const trial = () => {
  return (
    <div className="triel section  bg-custom-gray py-[3rem]">
      <div className="container px-4 max-w-xl mx-auto text-center">
        <h3 className="text-black text-3xl font-extrabold mb-5">
          Start your free trial today
        </h3>
        <p className="text-md text-gray-400 mb-4">
          Try Landwind Platform for 30 days. No credit card required.
        </p>
        <Link
          href="#"
          className="w-[300px] mx-auto flex items-center justify-center bg-violet-600 text-white border border-gray-300 px-6 py-3 rounded-md shadow-md hover:bg-violet-800 transition duration-300 ease-in-out cursor-pointer "
        >
          <span>View on Figma</span>
        </Link>
      </div>
    </div>
  );
};

export default trial;
