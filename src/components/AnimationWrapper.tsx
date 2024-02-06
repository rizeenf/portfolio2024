"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <main
        key={pathname}
        className="h-screen w-screen bg-gradient-to-b from-orange-50 to-blue-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-full z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "200vh" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="h-fit w-fit  m-auto inset-0 fixed text-white text-8xl capitalize z-50"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
            transition: {
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
          exit={{
            opacity: 0,
          }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-full bottom-0 z-30"
          initial={{
            height: "200vh",
          }}
          animate={{
            height: "0vh",
            transition: {
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        />
        <Navbar />
        {children}
      </main>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
