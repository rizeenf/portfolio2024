"use client";
import WidthWrapper from "@/components/WidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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
      <WidthWrapper className="h-full w-full flex flex-col md:flex-row">
        <motion.div
          initial={{
            opacity: 0,
            x: "-20%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
          }}
          className="relative h-1/2 md:w-1/2 md:h-full max-w-[28rem] max-h-[32rem] flex items-center justify-center"
        >
          <Image
            fill
            src={"/me.jpeg"}
            alt="Image Profil"
            loading="eager"
            className="object-cover imageBlob"
          />
        </motion.div>

        <div className="h-1/2 md:w-1/2 md:h-full flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              x: "20%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
            }}
          >
            <h1 className="flex flex-row flex-wrap justify-center gap-3 text-4xl font-extrabold text-center">
              Hi there! I&apos;m{" "}
              <span className="flex flex-row gap-3 tracking-wide text-orange-600">
                Rizki
                <motion.div
                  initial={{
                    rotate: "-10deg",
                  }}
                  animate={{
                    rotate: "10deg",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  👋
                </motion.div>
              </span>
            </h1>
            <h1 className="mt-1 text-lg text-center">
              I&apos;m a Frontend Web developer based in Bekasi, Indonesia
            </h1>
            <div className="flex items-center justify-center gap-5 mt-5 text-center">
              <button className="p-2 rounded-md ring-1 ring-black bg-black text-white">
                Projects
              </button>
              <button className="p-2 rounded-md ring-1 ring-black ">
                Resume
              </button>
            </div>
          </motion.div>
        </div>
      </WidthWrapper>
    </motion.div>
  );
}
