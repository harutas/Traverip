import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import NoMatch from "./pages/Nomatch";

import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/room/:id" element={<RoomPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
      {/* <!-- hero - end --> */}
    </BrowserRouter>
  );
}

export default App;
