"use client";
import { motion } from "framer-motion";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const PageMotion = ({ children }) => {
  return (
    <motion.div
      // variants={animationConfiguration}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      // transition={{ duration: 3 }}
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.9 } }}
      transition={{ delay: 0, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
export default PageMotion;
