import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="h-16 border-b flex justify-center flex-col px-2 md:px-6">
      <div className="flex flex-row justify-between items-center">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
};
