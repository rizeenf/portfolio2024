import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const WidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl sm:px-12 md:px-16 px-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WidthWrapper;
