import React, { useState } from "react";

// router
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import NoMatch from "./pages/Nomatch";

import Header from "./components/Header";
import "./App.css";

import AddIcon from "@mui/icons-material/Add";
import { Modal } from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import { createTheme, ThemeProvider, Fab } from "@mui/material";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  console.log(location);

  const close = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };
  const open = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
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
    <>
      <Header />
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/room/:id" element={<RoomPage />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
            {location.pathname !== "/" && !modalOpen && (
              <Fab color="primary" aria-label="add" sx={fabStyle} onClick={() => (modalOpen ? close() : open())}>
                <AddIcon />
              </Fab>
            )}
          </ThemeProvider>
          <AnimatePresence>{modalOpen && <Modal handleClose={close} text={"hello"} />}</AnimatePresence>
        </div>
      </div>
      {/* <!-- hero - end --> */}
    </>
  );
}

export default App;
