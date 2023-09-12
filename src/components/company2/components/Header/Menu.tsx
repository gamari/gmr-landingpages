import React, { FunctionComponent } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { MenuLinks } from "./MenuLinks";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const variants = {
    open: { x: "0" },
    closed: { x: "100%" },
  };

  return (
    <motion.div
      initial="closed"
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "just",
      }}
      className={`
        md:hidden
        flex flex-col gap-2
        fixed top-0 right-0 
        h-full md:w-1/4 w-full
        text-black
        bg-white z-10
    `}
    >
      <div className="relative">
        <AiOutlineClose
          onClick={() => {
            onClose();
          }}
          size={24}
          className="absolute right-2 top-2"
        />

        <MenuLinks />
      </div>
    </motion.div>
  );
};
