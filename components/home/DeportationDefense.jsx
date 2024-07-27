import React from "react";
import SectionLayout from "../shared/SectionLayout";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { DoubleOneTabSection } from "../shared/DoubleOneTabSection";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const DeportationDefense = () => {
  const tabsData = {
    top: [
      {
        value: "1",
        label: "Bond Hearing",
      },
      {
        value: "2",
        label: "Master Calendar Hearing",
      },
      {
        value: "3",
        label: "Individual Hearing",
      },
    ],
    bottom: [
      {
        value: "4",
        label: "Waivers",
      },
    ],
    details: [
      {
        value: "1",
        content:
          "Being arrested can be a frightening and confusing experience. One of the first hurdles you might face is a bond hearing, where a judge decides whether you can be released while awaiting trial. Having strong legal representation at this crucial stage is vital. Our experienced attorneys navigate the bond hearing process with you, maximizing your chances of release and ensuring your rights are protected.",
        img: `/assets/home/Deportation-Defense/Bond-Hearing.png`,
        slug: "bond-hearing",
      },
      {
        value: "2",
        content:
          "Being served with a Notice to Appear (NTA) can be daunting, marking the beginning of your immigration journey through the U.S. legal system. The first hurdle on this path is often the Master Calendar Hearing (MCH), where the stage is set for your case. We are dedicated to supporting you through each stage of the MCH process with clarity and expertise. Our aim is to ensure that you comprehend your options fully and can make well-informed decisions regarding your future.",
          img: `/assets/home/Deportation-Defense/Master-Calendar-Hearing.png`,
          slug: "bond-hearing",
      },
      {
        value: "3",
        content:
          "Facing removal proceedings can be stressful, and the Individual Hearing is where your case stands on trial. Whether you're seeking asylum, battling inadmissibility, or pursuing another form of relief, having experienced legal representation is crucial. We equip you with the knowledge, confidence, and advocacy you need to present your best case before the immigration judge.",
          img: `/assets/home/Deportation-Defense/Individual-Hearing.png`,
          slug: "indiviadual-hearing",
      },

      {
        value: "4",
        content:
          "Immigration pathways can be complex, and sometimes unforeseen circumstances or past decisions may create hurdles. However, with the right legal guidance, you can overcome these obstacles and achieve your immigration goals. Our experienced attorneys specialize in navigating the intricacies of immigration waivers, helping you clear the path towards a secure future in the United States.",
          img: `/assets/home/Deportation-Defense/Waiver.png`,
          slug: "waiver",
      },
    ],
  };

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mb-3 text-center ${bitter.className}`}
      >
        Deportation Defense
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <DoubleOneTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DeportationDefense;
