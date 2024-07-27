"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import parse from "html-react-parser";
import Image from "next/image";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "./BlackButton";
import MotionEffect from "../motion/MotionEffect";
import CardMotion from "../motion/CardMotion";
import ScondayButton from "./ScondayButton";
import ServicesButton from "./ServicesButton";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export function SingleTabSection({ tabsData }) {
  const [activeTab, setActiveTab] = React.useState("2");

  return (
    <Tabs value="2">
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
        <TabsHeader
          className={`p-1 rounded-full bg-[#F4F4F4] md:p-1 flex items-center justify-center `}
          indicatorProps={{
            className: "bg-[#1B2639] shadow-none rounded-full",
          }}
        >
          {tabsData?.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="md:p-2 p-2 !text-center "
              onClick={() => setActiveTab(value)}
            >
              <div className="flex items-center gap-x-6 gap-y-2 md:flex-col md:justify-center 2xl:flex-row">
                <div
                  className={`py-2 sm:text-lg text-xs text-gray-750 ${bitter.className} ${activeTab === value ? "text-gray-50 duration-1000" : ""}`}
                >
                  {parse(label)}
                </div>
              </div>
            </Tab>
          ))}
        </TabsHeader>
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
        <TabsBody className="p-0 m-0">
          {tabsData?.map(({ label, content, value, slug, img }) => (
            <TabPanel key={value} value={value} className="p-0 m-0">
              <div className="flex flex-col-reverse md:flex-row gap-5 items-center mt-0 md:mt-14">
                <div className="w-[100%] md:w-[75%]">
                  <p
                    className={`mb-4 text-lg text-stone-950 text-center md:text-left ${mulish.className}`}
                  >
                    {content}
                  </p>
                  <div className="flex justify-center mt-8 md:justify-start">
                    <ServicesButton
                      title={"Learn more"}
                      link={slug}
                      style={"bg-[#1B2639] text-white"}
                      radius={"sm"}
                    />
                  </div>
                </div>

                <div className="w-[100%]">
                  <div className="flex justify-center items-center mt-8 md:mt-0">
                    <Image
                      width={1000}
                      height={400}
                      src={img}
                      alt="about img"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </CardMotion>
    </Tabs>
  );
}
