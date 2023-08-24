import { motion } from "framer-motion";
import React from "react";
import { Star } from "./Star";

export const Loader = () => {
  return (
    <motion.div
      className={`
        absolute top-0 right-0 bottom-0 left-0
        touch-none
        overflow-hidden
        z-30
        flex flex-col justify-center items-center

        bg-black

        w-full
      `}
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Star color="white" />

      {/* TODO テキストを表示する */}
      <motion.span>GMR</motion.span>
    </motion.div>
  );
};
