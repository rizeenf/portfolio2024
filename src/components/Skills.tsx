"use client";
import { SKILLS } from "@/lib/constants";
import {
  fadingChildrenMotion,
  fadingStaggerMotion,
  fromLeftMotion,
} from "@/lib/motions";
import { motion } from "framer-motion";


const Skills = () => {
  return (
    <div className="skill flex flex-col justify-center gap-12">
      <motion.h2
        variants={fromLeftMotion}
        initial="initial"
        whileInView="whileInView"
        className="font-bold text-2xl justify-center"
      >
        SKILLS
      </motion.h2>
      <motion.div
        variants={fadingStaggerMotion}
        initial="initial"
        whileInView="whileInView"
        className="flex flex-wrap gap-4"
      >
        {SKILLS.map((item) => (
          <motion.span
            variants={fadingChildrenMotion}
            key={item}
            className="rounded p-3 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
