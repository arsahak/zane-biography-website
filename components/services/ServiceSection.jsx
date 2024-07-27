"use client";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import SectionLayout from "../shared/SectionLayout";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/config/data";
import MotionEffect from "../motion/MotionEffect";

const css = `
  h1{
    font-size: 40px;
  }
  h2{
    font-size: 32px;
    font-weight: bold;
  }
  p{
    font-size: 18px;
  }

}

`;

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

const ServiceSection = () => {
  const [selected, setSelected] = useState(servicesData[0].title);

  useEffect(() => {
    const storedData = localStorage.getItem("select-service-catagory");
    if (storedData) {
      setSelected(storedData);
    } else {
      setSelected(servicesData[0].title);
    }
  }, []);

  return (
    <>
      <style>{css}</style>
      <SectionLayout bg="bg-white">
        <MotionEffect effect={"fade-up"} duration={"2000"}>
          <div className="grid grid-cols-1 md:grid-cols-4 item-center justify-center gap-y-6 md:gap-6">
            <div className="col-span-1">
              <div className="h-[1000px] px-3 py-4 overflow-y-auto bg-[#1B2639]">
                <ul className="space-y-2 font-medium">
                  {servicesData?.map((el, index) => (
                    <motion.li
                      variants={variants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      key={index}
                      onClick={() => {
                        setSelected(el.title);
                      }}
                    >
                      <a
                        href="#"
                        className={`flex items-center p-2 text-stone-50 rounded-sm hover:bg-gray-100 hover:text-gray-800 group ${selected === el.title ? "bg-gray-100 !text-gray-800" : ""}`}
                      >
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          {el.title}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-5 h-5 ${selected === el.title ? "rotate-90" : ""}`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="col-span-3 text-center md:text-left"
              >
                {servicesData
                  ?.filter((item) => item.title === selected)
                  ?.map((el, index) => parse(el.dece))}
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionEffect>
      </SectionLayout>
    </>
  );
};

export default ServiceSection;
