import { motion, useAnimation, useInView } from "framer-motion";
import React, { FunctionComponent, ReactNode, useRef } from "react";

const variants = {
  visible: (direction: string) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 70,
      delay: 0.3,
    },
  }),
  hidden: (direction: string) => {
    let x = "0%";
    let y = "0%";
    if (direction === "left") x = "30%";
    if (direction === "bottom") y = "-30%";

    return {
      x,
      y,
      opacity: 0,
    };
  },
};

interface Props {
  direction?: "left" | "right" | "bottom";
  isVisible?: boolean;
  children: ReactNode;
  delay?: number;
}

export const SlideIn: FunctionComponent<Props> = ({
  direction = "left",
  isVisible = true,
  children,
  delay = 0,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      variants={variants}
      custom={direction}
    >
      {children}
    </motion.div>
  );
};
