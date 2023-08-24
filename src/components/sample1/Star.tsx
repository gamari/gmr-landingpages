import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

interface Props {
  color?: "black" | "white";
}

export const Star: FunctionComponent<Props> = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="48px"
      viewBox="0 0 24 24"
      width="48px"
      fill="none"
      stroke={color}
      className="w-[10vw]"
    >
      <g>
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
        />
      </g>
    </svg>
  );
};
