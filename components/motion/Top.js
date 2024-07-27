"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollMotionComponent = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const threshold = 50; // Adjust the threshold value based on your preference

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > threshold && scrollDirection === "down") {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      setScrollDirection("up");
    } else if (currentScrollY <= threshold && scrollDirection === "up") {
      controls.start({ opacity: 0, y: -50, transition: { duration: 0.5 } });
      setScrollDirection("down");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <motion.div animate={controls}>
      {/* Your content goes here */}
      <div style={{ height: "100vh", background: "lightblue" }}>
        Scroll down and up to see the motion effect.
      </div>
    </motion.div>
  );
};

export default ScrollMotionComponent;
