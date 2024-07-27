"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Suspense } from "react";
import SectionLayout from "./shared/SectionLayout";
import VideoPlayer from "./shared/Video/VideoPlayer";
import MotionEffect from "./motion/MotionEffect";
import ScondayButton from "./shared/ScondayButton";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiFlag } from "react-icons/hi2";
import { Mulish, Bitter } from "next/font/google";
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
                  className={`text-stone-950 font-bold text-4xl mb-4 text-center md:text-left ${bitter.className}`}
                >
                  About Me
                </h2>

                <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                  Accumsan volutpat ocurreret id nam, solet numquam accommodare
                  quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata
                  duo. Ut ludus vulputate qui, movartem accom modare eos no, vix
                  error percipitur.
                </p>
                <div className="flex gap-x-10">
                  <ul class="max-w-md space-y-3 text-gray-500 list-inside ">
                    <li class="flex items-center">
                      <FaMapLocationDot className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Location: {"  "}
                      </span>
                      Victoria, BC
                    </li>
                    <li class="flex items-center">
                      <HiFlag className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Nationality:
                        {"  "}
                      </span>
                      Canadian / Irish
                    </li>
                    <li class="flex items-center">
                      <HiFlag className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Study:
                        {"  "}
                      </span>
                      University of Victoria
                    </li>
                  </ul>
                  <ul class="max-w-md space-y-3 text-gray-500 list-inside ">
                    <li class="flex items-center">
                      <FaMapLocationDot className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Age:
                        {"  "}
                      </span>
                      29
                    </li>
                    <li class="flex items-center">
                      <HiFlag className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Interests:
                        {"  "}
                      </span>
                      Motorcycles, Muay Thai, Banjos
                    </li>
                    <li class="flex items-center">
                      <HiFlag className="text-slate-900 w-5 h-5 mr-2" />
                      <span class="font-bold text-gray-900 mr-1">
                        Employment:
                        {"  "}
                      </span>
                      Instant Domains, inc.
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
