import Image from "next/image";
import React from "react";
import { SITECONFIG } from "@/config/siteData";
import { motion } from "framer-motion";
import { Suspense } from "react";
import MotionEffect from "./motion/MotionEffect";
import ScondayButton from "./shared/ScondayButton";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { Mulish, Bitter } from "next/font/google";
import SectionLayout from "./shared/SectionLayout";
import AboutSilder from "./AboutSilder";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <section id="about-me">
      <SectionLayout bg="bg-slate-50 ">
        <div className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            <div className="col-span-1">
              <MotionEffect effect="fade-right" duration="2000">
                <div className="flex justify-center items-start">
                  <div className="">
                    <Image
                      src={SITECONFIG?.aboutMeInfo?.aboutImg}
                      alt="About Image"
                      width={450}
                      height={400}
                      className=""
                      rel="preload"
                    />
                  </div>
                </div>
              </MotionEffect>
            </div>
            <div className="col-span-1  md:col-span-2">
              <MotionEffect effect="fade-left" duration="2000">
                <div className="">
                  <h2
                    className={`text-stone-950 font-bold text-4xl mb-4 text-center md:text-left ${bitter.className}`}
                  >
                    About Me
                  </h2>

                  <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                    {SITECONFIG?.aboutMeInfo?.aboutMe}
                  </p>

                  <div className="flex flex-col md:flex-row gap-x-16 gap-y-5 justify-center md:justify-start">
                    <ul class="max-w-md space-y-6 text-gray-500 list-inside ">
                      {SITECONFIG?.aboutMeInfo?.personalInfoLeft?.map(
                        (el, index) => (
                          <li class="flex md:justify-start justify-center items-center">
                            <IoMdCheckmarkCircleOutline className="text-slate-900 w-5 h-5 mr-2" />
                            <span class="font-bold text-gray-900 mr-1">
                              {el?.title}
                            </span>
                            {el?.details}
                          </li>
                        )
                      )}
                    </ul>
                    <ul class="max-w-md space-y-6 text-gray-500 list-inside ">
                      {SITECONFIG?.aboutMeInfo?.personalInfoRight?.map(
                        (el, index) => (
                          <li class="flex md:justify-start justify-center items-center">
                            <IoMdCheckmarkCircleOutline className="text-slate-900 w-5 h-5 mr-2" />
                            <span class="font-bold text-gray-900 mr-1">
                              {el?.title}
                            </span>
                            {el?.details}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </MotionEffect>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-6">
          <AboutSilder silderData={SITECONFIG?.aboutSilderImageList} />
        </div>
      </SectionLayout>
    </section>
  );
};

export default AboutSection;
