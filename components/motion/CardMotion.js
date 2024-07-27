"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CardMotion = ({ children, initial, whileInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);


  return (
    <div ref={ref}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CardMotion;
