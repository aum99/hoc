import React from "react";

const Services = () => {
  return (
    <section className="flex-col flex items-center justify-center h-screen py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <button className=" border-black border-2 rounded-full px-4 py-1 mb-4 text-2xl">
          OUR SERVICES
        </button>
        <h1 className="text-5xl md:text-6xl font-bold ">
          Creative Solution We’re Providing
        </h1>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: UI/UX Design */}
        <div className=" rounded-lg p-6 shadow-lg bg-black text-white">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 0l-4 4h8l-4-4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="mb-4">
            Elevate your audience. Our expert team combines innovative design
            with cutting-edge technology to deliver.
          </p>
          <button className="flex items-center text-lime-500 font-semibold">
            GET IN TOUCH
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Card 2: No Code Development */}
        <div className="bg-black text-white rounded-lg p-6 shadow-lg border-t-4 border-lime-400">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No Code Development</h3>
          <p className="mb-4">
            Elevate your audience. Our expert team combines innovative design
            with cutting-edge technology to deliver.
          </p>
          <button className="flex items-center text-lime-500 font-semibold">
            GET IN TOUCH
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Card 3: Web Development */}
        <div className="bg-black text-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="mb-4">
            Elevate your audience. Our expert team combines innovative design
            with cutting-edge technology to deliver.
          </p>
          <button className="flex items-center text-lime-500 font-semibold">
            GET IN TOUCH
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
