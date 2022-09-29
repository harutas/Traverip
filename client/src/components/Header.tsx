import React from "react";
// router
import { Link } from "react-router-dom";

// mui icon
// import FlightRoundedIcon from "@mui/icons-material/FlightRounded";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 md:py-4 mb-4 md:mb-4 xl:mb-8 bg-teal-200 px-4">
      {/* <!-- logo - start --> */}
      <Link
        to={`/`}
        className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
        aria-label="logo"
      >
        <svg
          width="95"
          height="94"
          viewBox="0 0 95 94"
          className="w-6 h-auto text-indigo-500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        TraveRip
      </Link>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden lg:flex gap-12">
        <Link to={`/`} className="text-indigo-500 text-lg font-semibold">
          Home
        </Link>
        <Link
          to={`/`}
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          Features
        </Link>
        <Link
          to={`/`}
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          Pricing
        </Link>
        <Link
          to={`/`}
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          About
        </Link>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <Link
        to={`/`}
        className="hidden lg:inline-block bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      >
        Contact Sales
      </Link>

      <button
        type="button"
        className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
      {/* <!-- buttons - end --> */}
    </header>
  );
};

export default Header;
