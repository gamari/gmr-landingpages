import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

interface Props {
  text?: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const DelayText: FunctionComponent<Props> = ({
  text,
  delay = 0,
  speed = 4,
  className = "",
}) => {
  return (
    <motion.span
      variants={variants}
      data-scroll
      data-scroll-delay={delay}
      data-scroll-speed={speed}
      className={className}
    >
      {text}
    </motion.span>
  );
};
