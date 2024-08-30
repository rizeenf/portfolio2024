import {
  fadingChildrenMotion,
  fadingExpStaggerMotion,
  fromLeftMotion,
} from "@/lib/motions";
import { motion } from "framer-motion";
import ExperienceList from "./ExperienceList";
import { EXPERIENCES } from "@/lib/constants";

const Experiences = () => {
  return (
    <div className="bio flex flex-col justify-center gap-12 pb-48">
      <motion.h2
        variants={fromLeftMotion}
        initial="initial"
        whileInView="whileInView"
        className="font-bold text-2xl justify-center"
      >
        EXPERIENCES
      </motion.h2>
      <motion.div
        variants={fadingExpStaggerMotion}
        initial="initial"
        whileInView="whileInView"
        className="itemlists"
      >
        <ExperienceList jobs={EXPERIENCES} />
      </motion.div>
    </div>
  );
};

export default Experiences;
