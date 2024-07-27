"use client";
import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { motion } from "framer-motion";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "../shared/BlackButton";
import RevealMotion from "../motion/RevealMotion";
import ScondayButton from "../shared/ScondayButton";
import { Suspense } from "react";
import VideoPlayer from "../shared/Video/VideoPlayer";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="space-y-14">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <MotionEffect effect="fade-right" duration="2000">
            <div className="">
              <h2 className="text-stone-950 font-bold text-base">About</h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                About Us
              </h2>

              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Accumsan volutpat ocurreret id nam, solet numquam accommodare
                quo et. Et vidit choro aliquid pro, ad inani eirmod vituperata
                duo. Ut ludus vulputate qui, movartem accom modare eos no, vix
                error percipitur.
              </p>
              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec
                tellus nulla erisque ultricies massa sagittis dictum malesuada.
                Urna id velit, quis morbi nibh duis massa odio. Iaculis massa
                duis sit tellus adipiscing. Cursus amet
              </p>
              <div className="flex justify-center mt-8 md:justify-start">
                <ScondayButton
                  title={"READ MORE"}
                  link={"/about-us"}
                  style={"bg-[#1B2639] text-white"}
                  radius={"sm"}
                />
              </div>
            </div>
          </MotionEffect>
          <div className="w-[100%]">
            <MotionEffect effect="fade-left" duration="2000">
              <div className="flex justify-center items-center">
                <Suspense fallback={<p>Loading video...</p>}>
                  <VideoPlayer src={"/assets/video/trip-law.mp4"} />
                </Suspense>
              </div>
            </MotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
