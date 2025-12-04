import React, { useState } from "react";
export default function GradientAccordion() {
  const faqData = [
    {
      question: "BSc in CSE",
      status: "Ongoing",
      duration: "2020-2025",
      institution: "North South University",
    },
    {
      question: "HSC ( Higher Secondary Certificate )",
      status: "Finished",
      duration: "2017-2019",
      institution: "Udayan Higher Secondary School",
    },
    {
      question: "SSC ( Secondary School )",
      status: "Finished",
      duration: "2017",
      institution: "Motijheel Govt. Boys' High School",
    },
  ];
  return (
    <div className="w-full max-w-2xl mx-auto mb-24">
      <h2 className="text-4xl mb-12 text-center md:text-5xl  font-bold text-black dark:text-white">
        My{" "}
        <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400 ">
          Education
        </span>{" "}
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            status={item.status}
            duration={item.duration}
            institution={item.institution}
          />
        ))}
      </div>
    </div>
  );
}
function AccordionItem({ question, status, duration, institution }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-0.5 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 dark:from-cyan-500 dark:to-pink-600">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left p-4 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {question}
          </span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              <b>Status : </b>
              {status}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Duration : </b>
              {duration}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Institution : </b>
              {institution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
