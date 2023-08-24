import React from "react";
import { Qwitcher_Grypen } from "next/font/google";

import { Overlay } from "./Overlay";
import { motion } from "framer-motion";
import { DelayText } from "./DelayText";

const qwitcherGrypen = Qwitcher_Grypen({ weight: ["400"], subsets: ["latin"] });

const centerTextVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

export const CoverHeroImage = () => {
  return (
    <div
      className={`
        relative
        w-full h-screen bg-[url('/images/work.jpg')]
        bg-cover
      `}
    >
      {/* Center テキスト */}
      <motion.div
        variants={centerTextVariants}
        className={`
          absolute text-white
          flex flex-row items-center justify-center
          top-0 right-0 bottom-0 left-0
          z-[6]
          ${qwitcherGrypen.className}
        `}
        initial="hidden"
        animate="show"
      >
        <DelayText text={"W"} className="text-7xl" />
        <DelayText text={"e"} className="text-7xl" />
        <DelayText text={"l"} className="text-7xl" />
        <DelayText text={"l"} className="text-7xl" />
        <DelayText text={"c"} className="text-7xl" />
        <DelayText text={"o"} className="text-7xl" />
        <DelayText text={"m"} className="text-7xl" />
        <DelayText text={"e"} className="text-7xl" />
      </motion.div>

      <Overlay />
    </div>
  );
};
