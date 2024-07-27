"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../motion/AnimatedText";

const HeadingText = ({ placeholderText, textStyle, textColor }) => {
  const [replay, setReplay] = useState(true);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return (
            <AnimatedText
              {...item}
              key={index}
              textStyle={textStyle}
              textColor={textColor}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeadingText;
