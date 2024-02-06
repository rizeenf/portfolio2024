"use client";
import React, { FormEvent, RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import WidthWrapper from "@/components/WidthWrapper";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const text = "CONTACT ME ";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current as any,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSuccess(true);
        },
        (error) => {
          setIsError(true);
        }
      );
    e.currentTarget.reset();
  };

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
      <WidthWrapper className="h-full flex flex-col lg:flex-row">
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl">
          <motion.div>
            {text.split("").map((item, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {item}
              </motion.span>
            ))}
            👋
          </motion.div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-3 justify-center p-24 max-w-2xl bg-orange-50"
        >
          <span>Hi Rizki Nur</span>
          <textarea
            rows={5}
            placeholder="Type something for me .."
            className="p-2 bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            minLength={10}
          />
          <span>My email address is</span>
          <input
            type="email"
            name="user_email"
            className="p-2 bg-transparent border-b-2 border-b-black outline-none resize-none"
            placeholder="yourmail@example.com"
          />
          <span>Best Regards</span>
          <Button type="submit" className="w-full" variant={"outline"}>
            Send
          </Button>
          {isSuccess ? (
            <span className="text-green-600 font-semibold text-sm">
              Your message has been sent successfully.
            </span>
          ) : null}
          {isError ? (
            <span className="text-rose-600 font-semibold text-sm">
              Something went wrong, please try again.
            </span>
          ) : null}
        </form>
      </WidthWrapper>
    </motion.div>
  );
};

export default Contact;
