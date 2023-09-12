import React, { useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { useScrollPosition } from "@/components/base/hooks/useScrollPosition";

export const Header = () => {
  const { scrollY } = useScrollPosition();

  const isBeyond100vh = scrollY > window.innerHeight;

  return (
    <header
      className={`
        fixed flex justify-center flex-col
        w-full h-16
        px-4 md:px-6
        ${
          isBeyond100vh
            ? "z-20 border-b shadow bg-white text-black"
            : "text-white"
        }
      `}
    >
      <div className="flex flex-row justify-between items-center">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
};
