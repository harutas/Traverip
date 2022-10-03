import React from "react";
import { motion } from "framer-motion";
import { Backdrop } from "./modals/Backdrop";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "./DatePicker";

type Props = {
  handleClose: () => void;
  text: string;
};

const aboveup = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      stiffness: 300,
    },
  },
};

export const Modal: React.FC<Props> = ({ handleClose, text }) => {
  const navigate = useNavigate();
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal bg-slate-100 flex flex-col justify-center"
        variants={aboveup}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* <label className="block text-gray-700 text-sm font-bold mb-2">Title</label> */}
        <input
          className="shadow appearance-none border rounded py-4 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Trip title"
        />
        <DatePicker />
        <div className="flex justify-between w-full">
          <button
            className="btn bg-teal-500 hover:bg-teal-600 w-full text-white font-bold py-2 px-4 rounded mx-3"
            onClick={() => {
              handleClose();
              navigate("/room/s");
            }}
          >
            Create
          </button>
          <button
            className="btn bg-red-500 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded mx-3"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};
