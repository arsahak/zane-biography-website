"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Mulish, Bitter } from "next/font/google";
import { Suspense } from "react";
import SectionLayout from "./shared/SectionLayout";
import VideoPlayer from "./shared/Video/VideoPlayer";
import MotionEffect from "./motion/MotionEffect";
import ScondayButton from "./shared/ScondayButton";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          <div className="col-span-1">
            <MotionEffect effect="fade-right" duration="2000">
              <div className="flex justify-center items-start">
                <div className="">
                  <Image
                    src="/assets/horo-banner1.png"
                    alt="home-banner"
                    width={300}
                    height={400}
                    className=""
                    rel="preload"
                  />
                </div>
              </div>
            </MotionEffect>
          </div>
          <div className="col-span-2">
            <MotionEffect effect="fade-left" duration="2000">
              <div className="">
                <h2
                  className={`text-stone-950 font-bold text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                >
                  About Me
                </h2>

                <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                  Accumsan volutpat ocurreret id nam, solet numquam accommodare
                  quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata
                  duo. Ut ludus vulputate qui, movartem accom modare eos no, vix
                  error percipitur.
                </p>
                <div className="">
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside ">
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>
                      10 characters
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      At least one lowercase character
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      At least one special character, e.g., ! @ # ?
                    </li>
                  </ul>
                </div>
              </div>
            </MotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
