"use client";
import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{
        y: "-200vh",
      }}
      animate={{
        y: "0",
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-[calc(100vh-5rem)]"
    >
      Portfolio
    </motion.div>
  );
};

export default Portfolio;
