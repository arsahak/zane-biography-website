"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const MotionEffect = ({ children, effect, duration }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div data-aos={effect} data-aos-duration={duration}>
        {children}
      </div>
    </div>
  );
};

export default MotionEffect;
