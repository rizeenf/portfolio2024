"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLink = ({ list }: { list: { href: string; label: string } }) => {
  const pathname = usePathname();

  return (
    <Link
      href={list.href}
      key={list.href}
      aria-label={list.label}
      className={cn(
        "rounded-md py-1 px-2",
        pathname === list.href && "bg-black text-white "
      )}
    >
      {list.label}
    </Link>
  );
};

export default NavbarLink;
