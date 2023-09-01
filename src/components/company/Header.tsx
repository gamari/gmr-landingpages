import React, { useState, FunctionComponent } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Sidebar } from "./Sidebar"; // Sidebarコンポーネントをインポート
import { useModal } from "../base/hooks/useModal";

export const Header: FunctionComponent = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <header className="border-b shadow">
      <div className="flex flex-row items-center justify-between p-4 container mx-auto text-primary">
        <div className="text-xl font-semibold">Name</div>
        <div>
          {isOpen ? (
            <AiOutlineClose
              className="text-3xl inline-block lg:hidden"
              onClick={toggleModal}
            />
          ) : (
            <AiOutlineMenu
              className="text-3xl inline-block lg:hidden"
              onClick={toggleModal}
            />
          )}

          <nav className="hidden lg:inline-block">
            <div>menu1</div>
            <div>menu2</div>
          </nav>
        </div>
      </div>

      <Sidebar onClose={() => toggleModal()} isOpen={isOpen} />
    </header>
  );
};
