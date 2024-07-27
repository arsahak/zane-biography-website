"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SideServicesCard = ({ serversData }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.95 }}
      href="#"
      class="flex max-w-md p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 items-center gap-6 mb-2"
    >
      <Image
        src={serversData.icon}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <div>
        <h5 class="mb-2 text-lg font-bold tracking-wide text-gray-900 dark:text-white">
          {serversData.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology
        </p>
      </div>
    </motion.div>
  );
};

export default SideServicesCard;
