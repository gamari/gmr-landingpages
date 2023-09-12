import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "./Menu";
import { MenuLinks } from "./MenuLinks";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center gap-3 font-bold relative">
      <div className="md:hidden cursor-pointer">
        <AiOutlineMenu
          onClick={() => {
            setIsOpen(true);
          }}
          size={24}
        />
      </div>

      <MenuLinks className="hidden md:flex" />

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};
