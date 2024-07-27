"use client";
import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Avatar } from "@nextui-org/react";
import { Mulish, Bitter } from "next/font/google";
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

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const TripLawObligation = () => {
  return (
    <SectionLayout bg="bg-[#F1F5FA]">
      <div className="">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h2
            className={`text-stone-950 font-bold text-6xl mt-0 mb-5 text-center ${bitter.className}`}
          >
            TRIP LAW OBLIGATION TO YOU
          </h2>

          <p className="text-base text-stone-950 text-center">
            Our firm is focused on the client's demands for an exceptional legal
            service <br />
            model that provides value, quality, and exemplary client service.
          </p>
        </CardMotion>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-16">
            <div className="">
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B2639] p-6 rounded-xl w-[120px] mx-auto"
              >
                <Image
                  width={100}
                  height={50}
                  src={"/assets/home/one.png"}
                  alt="about img"
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center ${bitter.className}`}
              >
                FREE NO-OBLIGATION <br />
                CONSULTATION
              </h2>
            </div>
            <div>
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B2639] p-6 rounded-xl w-[120px] mx-auto"
              >
                <Image
                  width={100}
                  height={50}
                  src={"/assets/home/two.png"}
                  alt="about img"
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center ${bitter.className}`}
              >
                SUPERIOR <br />
                CONSULTATION
              </h2>
            </div>
            <div className="">
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B2639] p-6 rounded-xl w-[120px] mx-auto"
              >
                <Image
                  width={100}
                  height={50}
                  src={"/assets/home/three.png"}
                  alt="about img"
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center ${bitter.className}`}
              >
                AGGRESSIVE
                <br />
                ADVOCACY
              </h2>
            </div>
            <div className="">
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B2639] p-6 rounded-xl w-[120px] mx-auto"
              >
                <Image
                  width={100}
                  height={50}
                  src={"/assets/home/four.png"}
                  alt="about img"
                />
              </motion.div>
              <h2
                className={`text-stone-950 font-bold text-xl mt-5 mb-0 text-center ${bitter.className}`}
              >
                PAYMENT PLAN <br />
                OPTIONS
              </h2>
            </div>
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default TripLawObligation;
