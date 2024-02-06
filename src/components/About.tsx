"use client";
import { fadingMotion, fromLeftMotion } from "@/lib/motions";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="bio flex flex-col justify-center gap-12">
      <motion.h2
        variants={fromLeftMotion}
        initial="initial"
        whileInView={"whileInView"}
        className="font-bold text-2xl justify-center"
      >
        ABOUT
      </motion.h2>
      <motion.div
        variants={fadingMotion}
        initial="initial"
        whileInView={"whileInView"}
        className="text-lg"
      >
        <p>
          I&apos;ve been working with some frontend technologies such as
          React.js, Next.js, Tailwind and others.
        </p>
        <p>
          My educational background as an Information Technology college student
        </p>
        <p>
          I&apos;m reliable person, motivated and able to adapt quickly to new
          technologies and exploring new things.
        </p>
      </motion.div>
      <motion.span
        variants={fadingMotion}
        initial="initial"
        whileInView={"whileInView"}
        className="italic"
      >
        As long as you live keep learning how to live
      </motion.span>
      <motion.div
        variants={fadingMotion}
        initial="initial"
        whileInView={"whileInView"}
        className="self-end"
      >
        <svg
          width="155"
          height="54"
          viewBox="0 0 755 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 184C8.89947 176.172 5.27895 168.811 3.72223 159.944C1.49483 147.258 2.29409 134.282 4.22223 121.611C6.672 105.513 13.9589 95.8637 27.0556 86.0556C46.4451 71.5348 67.2258 66.3491 90.8333 63.2222C108.059 60.9407 127.022 57.5096 144.389 60.5C166.63 64.3297 168.323 84.753 167.556 103.833C166.557 128.673 157.577 152.745 150.778 176.444C148.961 182.776 146.81 189.405 151.611 194.944C157.205 201.399 166.11 204.629 174.222 206.222C221.629 215.534 276.944 204.053 319.944 183.778C367.64 161.289 415.395 122.155 441.944 75.8889C450.736 60.5691 463.641 34.7182 457.556 16.2222C453.786 4.76487 442.719 1.03299 431.556 2.44445C418.571 4.08614 408.928 15.2124 411.778 28.6667C414.104 39.6467 423.115 48.1791 431.667 54.6667C449.543 68.2283 470.38 78.3291 490.667 87.6667C510.672 96.8751 531.908 103.604 551.556 113.556C558.331 116.987 567.342 121.612 568.778 130C570.411 139.539 565.969 145.016 574.333 153C585.768 163.915 602.058 171.09 616.222 177.333C646.191 190.544 677.437 199.982 708.889 208.889C723.367 212.989 738.235 219.047 753 222"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default About;
