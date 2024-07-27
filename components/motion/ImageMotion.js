"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ImageMotion = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, Idelay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ImageMotion;
