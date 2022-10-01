import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        {/* <!-- content - start --> */}
        <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
          {/* <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p> */}

          <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
            <span className="block">Let's go on a trip.</span>
            <span className="block">It will be Travel like never before</span>
          </h1>

          <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
            An app that allows you to plan and share your trips. Let's make a plan in the talk room for each plan.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-center gap-2.5">
            <Link
              to={`/dashboard`}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get started
            </Link>
          </div>
        </div>
        {/* <!-- content - end --> */}

        {/* <!-- image - start --> */}
        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="content"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* <!-- image - end --> */}
      </section>
    </>
  );
};

export default HomePage;
