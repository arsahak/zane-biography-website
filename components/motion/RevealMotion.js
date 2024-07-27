"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealMotion = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={
        {
          // position: "relative",
          // width,
          // overflow: "hidden",
        }
      }
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, Idelay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealMotion;



// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const CardMotion = ({ children, initial, whileInView }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref,{ once: true });
//   const mainControls = useAnimation();

//   const [scrollDirection, setScrollDirection] = useState(null);
//   const [prevScrollY, setPrevScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > prevScrollY) {
//       setScrollDirection("down");
//     } else if (currentScrollY < prevScrollY) {
//       setScrollDirection("up");
//     }
//     setPrevScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollY]);

//   useEffect(() => {
//     if (isInView && scrollDirection === "down") {
//       mainControls.start("visible");
//     } else if (isInView && scrollDirection === "up") {
//       mainControls.stop();
//     }
//   }, [isInView, scrollDirection, mainControls]);

//   return (
//     <div ref={ref}>
//       <motion.div
//         initial={initial}
//         whileInView={whileInView}
//         animate={{once: true}}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default CardMotion;