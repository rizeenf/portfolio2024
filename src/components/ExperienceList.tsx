
import {
  fadingChildrenMotion
} from "@/lib/motions";
import { motion } from "framer-motion";

type JobType = {
  title: string,
  description: string,
  date: string,
  company: string
}


const ExperienceList = ({ jobs }: { jobs: JobType[] }) => {
  return (
    jobs.map((job, index) => (
      <motion.div
        key={index}
        variants={fadingChildrenMotion}
        className={`items flex ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}  justify-between h-48`}
      >
        <div className="left flex-[2]">
          <h2 className="bg-white w-fit p-3 font-semibold rounded-lg">
            {job.title}
          </h2>
          <h3 className="text-sm italic p-3">
            {job.description}
          </h3>
          <h4 className="p-3 text-sm text-red-400 font-semibold">
            {job.date}
          </h4>
          <h4 className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {job.company}
          </h4>
        </div>
        <div className="center flex-[1] flex justify-center">
          <div className="line w-px h-full bg-gray-700 rounded relative">
            <div className="h-6 w-6 bg-white ring-4 ring-red-300 absolute top-0 -left-3 rounded-full" />
          </div>
        </div>
        <div className="right flex-[2] "></div>
      </motion.div>
    ))
  )
}

export default ExperienceList