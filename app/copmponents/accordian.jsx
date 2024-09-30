"use client"; // This must be at the very top

import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id); // Toggle accordion open/close
  };

  return (
    <div className="w-full max-w-4xl  lg:max-w-6xl mx-auto my-[5rem]">
      <h3 className="text-3xl text-center font-bold text-black mb-6">
        Frequently Asked Questions
      </h3>

      {/* Accordion Item 1 */}
      <div className="accordion-item border-b rounded-lg overflow-hidden mb-4">
        <div
          className="accordion-header flex justify-between items-center p-4 cursor-pointer border-b border-gray-400"
          onClick={() => toggleAccordion("accordion1")}
        >
          <h3 className="font-semibold text-xl text-gray-800">
            What programming languages should I learn for web development?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="accordion-icon h-6 w-6 text-gray-500 transition-transform transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                openAccordion === "accordion1"
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M12 4v16m8-8H4" // Plus icon
              }
            />
          </svg>
        </div>
        <div
          className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === "accordion1" ? "max-h-96" : "max-h-0"
          }`}
          style={{ maxHeight: openAccordion === "accordion1" ? "300px" : "0" }}
        >
          <p className="p-4 text-black text-base">
            To get started with web development, you should learn HTML, CSS, and
            JavaScript. For backend development, consider languages like
            Node.js, Python, Ruby, or PH
          </p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="accordion-item border-b rounded-lg overflow-hidden mb-4">
        <div
          className="accordion-header flex justify-between items-center p-4 cursor-pointer border-b border-gray-400"
          onClick={() => toggleAccordion("accordion2")}
        >
          <h3 className="font-semibold text-xl text-gray-800">
            What is the difference between front-end and back-end development?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="accordion-icon h-6 w-6 text-gray-500 transition-transform transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                openAccordion === "accordion2"
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M12 4v16m8-8H4" // Plus icon
              }
            />
          </svg>
        </div>
        <div
          className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === "accordion2" ? "max-h-96" : "max-h-0"
          }`}
          style={{ maxHeight: openAccordion === "accordion2" ? "300px" : "0" }}
        >
          <p className="p-4 text-black text-base">
            Front-end development refers to the visual part of a website that
            users interact with, while back-end development involves the
            server-side logic and database management that support the
            application.
          </p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="accordion-item border-b rounded-lg overflow-hidden mb-4">
        <div
          className="accordion-header flex justify-between items-center p-4 cursor-pointer border-b border-gray-400"
          onClick={() => toggleAccordion("accordion3")}
        >
          <h3 className="font-semibold text-xl text-gray-800">
            What is a responsive web design?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="accordion-icon h-6 w-6 text-gray-500 transition-transform transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                openAccordion === "accordion3"
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M12 4v16m8-8H4" // Plus icon
              }
            />
          </svg>
        </div>
        <div
          className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === "accordion3" ? "max-h-96" : "max-h-0"
          }`}
          style={{ maxHeight: openAccordion === "accordion3" ? "300px" : "0" }}
        >
          <p className="p-4 text-black text-base">
            Responsive web design is an approach that ensures a website looks
            good on all devices (desktops, tablets, and smartphones) by adapting
            its layout and content based on the screen size
          </p>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="accordion-item border-b rounded-lg overflow-hidden mb-4">
        <div
          className="accordion-header flex justify-between items-center p-4 cursor-pointer border-b border-gray-400"
          onClick={() => toggleAccordion("accordion4")}
        >
          <h3 className="font-semibold text-xl text-gray-800">
            What are APIs, and why are they important?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="accordion-icon h-6 w-6 text-gray-500 transition-transform transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                openAccordion === "accordion4"
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M12 4v16m8-8H4" // Plus icon
              }
            />
          </svg>
        </div>
        <div
          className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === "accordion4" ? "max-h-96" : "max-h-0"
          }`}
          style={{ maxHeight: openAccordion === "accordion4" ? "300px" : "0" }}
        >
          <p className="p-4 text-black text-base">
            APIs (Application Programming Interfaces) allow different software
            systems to communicate with each other. They are essential for
            integrating third-party services and enabling functionality in web
            applications.
          </p>
        </div>
      </div>

      {/* Accordion Item 5 */}
      <div className="accordion-item border-b rounded-lg overflow-hidden mb-4">
        <div
          className="accordion-header flex justify-between items-center p-4 cursor-pointer border-b border-gray-400"
          onClick={() => toggleAccordion("accordion5")}
        >
          <h3 className="font-semibold text-xl text-gray-800">
            How can I improve my coding skills?
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="accordion-icon h-6 w-6 text-gray-500 transition-transform transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                openAccordion === "accordion5"
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M12 4v16m8-8H4" // Plus icon
              }
            />
          </svg>
        </div>
        <div
          className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === "accordion5" ? "max-h-96" : "max-h-0"
          }`}
          style={{ maxHeight: openAccordion === "accordion5" ? "300px" : "0" }}
        >
          <p className="p-4 text-black text-base">
            To improve your coding skills, practice regularly by building
            projects, participating in coding challenges, reading documentation,
            and collaborating with other developers in communities or
            open-source projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
