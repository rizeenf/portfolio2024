"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import WidthWrapper from "./WidthWrapper";
import Link from "next/link";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TerminalSquareIcon,
  TwitterIcon,
} from "lucide-react";
import NavbarLink from "./NavbarLink";
import { botVar, cenVar, linkVar, listVariants, topVar } from "@/lib/motions";

const LIST_MENU = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "Github", href: "https://github.com/rizeenf", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rizki-nurpadilah/",
    icon: LinkedinIcon,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/rizeenf/",
    icon: TerminalSquareIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rizenf",
    icon: FacebookIcon,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <WidthWrapper>
      <div className="h-20 flex items-center justify-between">
        {/* LIST MENU */}
        <div className="hidden md:flex flex-row items-center gap-3 flex-1">
          {LIST_MENU.map((list) => (
            <NavbarLink list={list} key={list.href} />
          ))}
        </div>

        {/* LOGO */}
        <div className="flex-1 flex md:hidden lg:flex sm:justify-center items-center ">
          <Link
            href={"/"}
            className="flex items-center justify-center"
            aria-label="RizkiNrp"
          >
            <span className="font-semibold text-lg italic">RizkiNrp</span>
          </Link>
        </div>

        {/* SOCIAL */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4 flex-1">
          {SOCIAL.map((list) => (
            <Link
              href={list.href}
              target="_blank"
              aria-label={list.label}
              key={list.href}
              className="items-center flex"
            >
              <list.icon size={22} className="text-orange-800" />
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <button
          className="w-8 h-4 flex flex-col items-center justify-between z-50 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVar}
            animate={isMenuOpen ? "open" : "close"}
            className="w-6 h-px bg-black origin-right"
          />
          <motion.div
            variants={cenVar}
            animate={isMenuOpen ? "open" : "close"}
            className="w-6 h-px bg-black origin-right"
          />
          <motion.div
            variants={botVar}
            animate={isMenuOpen ? "open" : "close"}
            className="w-6 h-px bg-black origin-right"
          />
        </button>
      </div>

      {/* LIST MENU */}
      {isMenuOpen ? (
        <motion.div
          variants={listVariants}
          initial="close"
          animate="open"
          className="h-screen w-screen bg-black absolute top-0 left-0 text-white flex items-center justify-center flex-col gap-5 text-3xl z-50"
        >
          {LIST_MENU.map((list) => (
            <motion.div variants={linkVar} key={list.href}>
              <Link href={list.href} className="hover:text-gray-800 ">
                {list.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : null}
    </WidthWrapper>
  );
};

export default Navbar;
