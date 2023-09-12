import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header
      className={`
      fixed flex justify-center flex-col
      w-full h-16
      px-2 md:px-6
      text-white 
    `}
    >
      <div className="flex flex-row justify-between items-center">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
};
