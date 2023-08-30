import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  // TODO メニュー作る

  return (
    <header className="border-b shadow">
      <div className="flex flex-row items-center justify-between p-4 container mx-auto  text-primary">
        <div className="text-xl font-semibold">Name</div>

        <div>
          <AiOutlineMenu className="text-3xl inline-block lg:hidden" />

          <nav className="hidden lg:inline-block">
            <div>menu1</div>
            <div>menu2</div>
          </nav>
        </div>
      </div>
    </header>
  );
};
