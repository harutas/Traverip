import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DashboardPage = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };

  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#99f6e4",
      },
    },
  });

  return (
    <div className="bg-white pb-6 sm:pb-4 lg:pb-8">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* <!-- text - start --> */}
        <div className="mb-2 md:mb-8">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4">Plans</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Let's make a new plan and share with others!
          </p>
        </div>
        {/* <!-- text - end --> */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8"
        >
          {/* <!-- article - start --> */}
          <motion.div layout variants={item} transition={{ type: "spring", damping: 15, stiffness: 100, bounce: 0.2 }}>
            <Link
              to={`/room/:id`}
              className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/thumbnail-sample1.jpg`}
                loading="lazy"
                alt="content"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-700 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

              <div className="relative p-4 mt-auto">
                <span className="text-gray-200 text-sm">July 19, 2021</span>
                <span className="text-gray-200 text-sm">-</span>
                <span className="text-gray-200 text-sm">July 20, 2021</span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">北海道旅行</h2>

                <span className="text-indigo-300 font-semibold">Read more</span>
              </div>
            </Link>
          </motion.div>
          {/* <!-- article - end --> */}

          {/* <!-- article - start --> */}
          <motion.div layout variants={item} transition={{ type: "spring", damping: 15, stiffness: 100, bounce: 0.2 }}>
            <Link
              to={`/room/:id`}
              className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/thumbnail-sample2.jpg`}
                loading="lazy"
                alt="content"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-700 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

              <div className="relative p-4 mt-auto">
                <span className="block text-gray-200 text-sm">April 07, 2021</span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">九州観光</h2>

                <span className="text-indigo-300 font-semibold">Read more</span>
              </div>
            </Link>
          </motion.div>

          {/* <!-- article - end --> */}

          {/* <!-- article - start --> */}
          <motion.div layout variants={item} transition={{ type: "spring", damping: 15, stiffness: 100, bounce: 0.2 }}>
            <Link
              to={`/room/:id`}
              className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/thumbnail-sample3.jpg`}
                loading="lazy"
                alt="content"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-700 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

              <div className="relative p-4 mt-auto">
                <span className="block text-gray-200 text-sm">March 15, 2021</span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">日光</h2>

                <span className="text-indigo-300 font-semibold">Read more</span>
              </div>
            </Link>
          </motion.div>
          {/* <!-- article - end --> */}

          {/* <!-- article - start --> */}
          <motion.div layout variants={item} transition={{ type: "spring", damping: 15, stiffness: 100, bounce: 0.2 }}>
            <Link
              to={`/room/:id`}
              className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/thumbnail-sample4.jpg`}
                loading="lazy"
                alt="content"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-700 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

              <div className="relative p-4 mt-auto">
                <span className="text-gray-200 text-sm">January 27, 2021</span>
                <span className="text-gray-200 text-sm">-</span>
                <span className="text-gray-200 text-sm">January 29, 2021</span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">大阪旅行</h2>

                <span className="text-indigo-300 font-semibold">Read more</span>
              </div>
            </Link>
          </motion.div>
          {/* <!-- article - end --> */}
        </motion.div>
      </div>
      <ThemeProvider theme={theme}>
        <Fab color="primary" aria-label="add" sx={fabStyle}>
          <AddIcon />
        </Fab>
      </ThemeProvider>
    </div>
  );
};

export default DashboardPage;
