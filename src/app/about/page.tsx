"use client";
import React, { RefObject, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import WidthWrapper from "@/components/WidthWrapper";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import AboutSvg from "@/components/AboutSvg";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  console.log({ scrollYProgress });

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1.5 }}
      className="h-[calc(100vh-5rem)]"
    >
      {/* CONTAINER */}
      <div ref={containerRef} className="h-full overflow-y-scroll lg:flex">
        <WidthWrapper className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:64 lg:w-2/3 lg:pr-2 xl:w-1/2">
          <About />
          <Skills />
          <Experiences />
        </WidthWrapper>

        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0">
          <AboutSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
