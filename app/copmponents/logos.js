import React from "react";

const logos = () => {
  return ( 
    <div className="logos section  container  mx-auto px-4  md:my-10  max-h-[20vh] ">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 lg:grid-cols-7 gap-3">
        <div className=" flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/airbnb.svg"
            alt="Airbnb Logo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/microsoft.svg"
            alt="microsoft Logo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[140px] h-auto"
            src="/assets/google.svg"
            alt="google Logo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/mailchimp.svg"
            alt="mailchimpLogo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/mashable.svg"
            alt="mashable Logo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/airbnb.svg"
            alt="Airbnb Logo"
          />
        </div>
        <div className="  flex justify-center items-center h-full p-4">
          <img
            className="w-[150px] h-auto"
            src="/assets/microsoft.svg"
            alt="microsoft Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default logos;
