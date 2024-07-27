"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "../shared/BlackButton";
import ScondayButton from "../shared/ScondayButton";
import VideoPlayer from "../shared/Video/VideoPlayer";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const ScheduleSection = () => {
  return (
    <SectionLayout bg="bg-[#F1F5FA] ">
      <div className="space-y-14">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <CardMotion
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              x: -100,
            }}
          >
            <div className="">
              <h2
                className={`text-stone-950 font-bold text-4xl mt-5 mb-0.5 text-center md:text-left ${bitter.className}`}
              >
                You Can Get A Free Consultation <br /> From Hardam Tripathi ESQ
              </h2>
              <div className="flex justify-center items-center md:justify-start">
                <hr className="h-[2px] my-0 bg-stone-950 border-0 w-28 mt-2 mb-4 "></hr>
              </div>

              <p className="mb-4 text-lg text-stone-950 text-center md:text-left">
                Using our interactive simulator, you can find out your options
                of moving abroad. We offer a diverse database of mentorship
                programs that will prepare you to be able to succeed in your
                journey abroad.
              </p>
              <div className="flex justify-center mt-8 md:justify-start">
                <ScondayButton
                  title={"Schedule Free Consultation"}
                  link={"/appointment"}
                  style={"bg-[#1B2639] text-white"}
                  radius={"sm"}
                />
              </div>
            </div>
          </CardMotion>
          <div className="w-[100%]">
            <CardMotion
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.1,
                },
              }}
              initial={{
                opacity: 0,
                x: 100,
              }}
            >
              <div className="flex justify-center items-center">
                <div>
                  <Suspense fallback={<p>Loading video...</p>}>
                    <VideoPlayer src={"/assets/video/trip-law.mp4"} />
                  </Suspense>
                </div>
              </div>
            </CardMotion>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ScheduleSection;
