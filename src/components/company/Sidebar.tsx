import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

export const Sidebar: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}>
      <motion.nav
        className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-4 lg:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div>menu1</div>
        <div>menu2</div>
      </motion.nav>

      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
};
