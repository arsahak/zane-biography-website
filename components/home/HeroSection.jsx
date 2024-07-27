"use client";
import MotionEffect from "../motion/MotionEffect";
import HeadingText from "../shared/HeadingText";
import SectionLayout from "../shared/SectionLayout";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Mulish, Bitter } from "next/font/google";
import { Link } from "@nextui-org/react";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const HeroSection = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  const text = "Foundation of Justice is Good Faith".split(" ");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="bg-[url('/assets/home/trip-low-hero-bg.jpg')] bg-cover bg-center bg-fixed">
        <SectionLayout>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center my-4 md:my-28">
            <div className="col-span-2">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible,
                }}
                className="text-red-700 font-black text-2xl md:text-3xl"
              >
                Giving You Advices That Matters
              </motion.h2>
              <motion.hr
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible,
                }}
                class="h-[2px] my-2 bg-red-700 border-0 w-20"
              ></motion.hr>
              <h1
                className={`text-[50px] md:text-[100px] font-[800] text-white md:text-left leading-tight tracking-normal ${bitter.className}`}
              >
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-white text-sm md:text-base max-w-[450px]"
              >
                Malesuada felis facilisis diam sed volutpat sociis nibh enim
                arcu Ac diam eget faucibus pulvinar nunc porttitor sit. Quam.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center md:justify-start"
              >
                <a
                  type="button"
                  class="text-white bg-red-700 hover:bg-red-800 font-medium text-base md:text-lg px-3 md:px-8 py-2.5 me-3 md:me-6 mb-2 uppercase"
                  href="/appointment"
                >
                  Consultation
                </a>
                <button
                  type="button"
                  class="text-white bg-none hover:bg-red-800 font-medium text-base md:text-lg px-3 md:px-8 py-2.5 me-0 md:me-6 mb-2 border border-white "
                >
                  (863)-599-6735
                </button>
              </motion.div>
            </div>
            <div></div>
          </div>
        </SectionLayout>
      </div>
    </motion.div>
  );
};

export default HeroSection;
