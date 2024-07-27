"use client";
import { motion } from "framer-motion";

function BlackButton({ title, link, style }) {
  return (
    <motion.a
      // href={link}
      whileTap={{ scale: 0.85 }}
      // whileHover={{
      //   scale: 1.1,
      //   backgroundColor: "#162030",
      // }}
      // transition={{ duration: 0.5 }}
      type="button"
      className={`text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-lg px-8 py-2.5 mb-2 cursor-pointer ${style}`}
    >
      {title}
    </motion.a>
  );
}

export default BlackButton;
