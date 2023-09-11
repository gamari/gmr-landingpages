import { motion, useAnimation, useInView } from "framer-motion";
import React, { FunctionComponent, ReactNode, useRef } from "react";

const variants = {
  visible: (direction: string) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 70,
    },
  }),
  hidden: (direction: string) => ({
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0,
  }),
};

interface Props {
  direction?: "left" | "right";
  isVisible?: boolean;
  children: ReactNode;
}

export const SlideIn: FunctionComponent<Props> = ({
  direction = "left",
  isVisible = true,
  children,
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
