import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div
      // onClick={onClick}

      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
