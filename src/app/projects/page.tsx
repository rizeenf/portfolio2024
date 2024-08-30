"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/lib/constants";


const Portfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

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
    >
      <div className="h-[600vh] relative " ref={ref}>
        <div className="h-[calc(100vh-5rem)] w-screen flex items-center text-7xl justify-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-blue-50 from-blue-100" />
            {PROJECTS.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 ">
                  <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
                    {item.name}
                  </h1>
                  <div className="relative w-80 md:w-96 lg:w-[500px] xl:w-[600px] aspect-video">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        <CarouselItem className="relative w-80 md:w-96 lg:w-[500px] xl:w-[600px] aspect-video ">
                          <Image src={item.img} alt={item.name} fill />
                        </CarouselItem>
                        <CarouselItem className="w-80 relative md:w-96 lg:w-[500px] xl:w-[600px] aspect-video ">
                          <Image src={item.img2} alt={item.name} fill />
                        </CarouselItem>
                        <CarouselItem className="w-80 relative md:w-96 lg:w-[500px] xl:w-[600px] aspect-video ">
                          <Image src={item.img3} alt={item.name} fill />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] text-center">
                    {item.desc}
                  </p>
                  <div className="flex justify-between">
                    <Link
                      href={item.src}
                      target="_blank"
                      aria-label={item.name}
                      className="self-end"
                    >
                      <Button variant={"outline"} size={"lg"}>
                        <GithubIcon size={18} /> Source code
                      </Button>
                    </Link>
                    <Link
                      href={item.demo}
                      target="_blank"
                      aria-label={item.name}
                      className="self-end"
                    >
                      <Button variant={"outline"} size={"lg"}>
                        See Demo &rarr;
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen flex gap-20 flex-col items-center justify-center bg-gradient-to-b to-blue-100 from-orange-50">
        <h1 className="text-4xl mb-5 text-center">Do you have any project?</h1>
        <Link
          href={"/contact"}
          className="relative -ml-16"
          aria-label="Contact me"
        >
          <Loader2 className="h-36 w-36 absolute animate-spin -top-6 -left-6" />
          <div className="h-24 w-24 absolute z-10 top-0 left-0 bottom-0 right-0 rounded-full bg-black text-white flex items-center justify-center text-sm hover:opacity-70 cursor-pointer">
            Contact me
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Portfolio;
