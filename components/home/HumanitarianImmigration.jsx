import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { DoubleOneTabSection } from "../shared/DoubleOneTabSection";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const HumanitarianImmigration = () => {
  const tabsData = {
    top: [
      {
        value: "1",
        label: "Vawa",
      },
      {
        value: "2",
        label: "U Visa",
      },
      {
        value: "3",
        label: "Asylum",
      },
    ],
    bottom: [
      {
        value: "4",
        label: "T Visa",
      },
    ],
    details: [
      {
        value: "1",
        content:
          "Have you experienced domestic violence, dating violence, sexual assault, or stalking, either in the United States or abroad? The Violence Against Women Act (VAWA) offers legal protections and pathways to safety and justice for individuals like you. We're here to offer caring and skilled legal help to guide you through the ins and outs of VAWA and make sure you get the protection you need.",
        img: `/assets/home/Humanitarian-Based-Immigration/vawa.png`,
        slug: "vawa",
      },
      {
        value: "2",
        content:
          "Have you been a victim of a serious crime in the United States, such as human trafficking, violent assault, or domestic violence? Did you cooperate with law enforcement in investigating or prosecuting the crime? The U visa program offers a unique pathway to lawful status for victims who meet certain criteria. We're here to give you all the legal advice and support you need to navigate the U visa process and make sure you get the safety and justice you deserve.",
        img: `/assets/home/Humanitarian-Based-Immigration/u-visa.png`,
        slug: "u-visa",
      },
      {
        value: "3",
        content:
          "Did you flee from your home country due to a well-founded fear of persecution based on your race, religion, nationality, political opinion, or membership in a particular social group? The asylum process offers a pathway to protection and safety in the United States for individuals like you. We're here to lend a hand and offer all the support you need to navigate through the sometimes confusing asylum process. Our goal is to ensure you find the safety and sanctuary you're seeking.",
        img: `/assets/home/Humanitarian-Based-Immigration/asylum.png`,
        slug: "asylum",
      },

      {
        value: "4",
        content:
          "Have you experienced severe forms of human trafficking—forced labor, debt bondage, sex trafficking, or domestic servitude—in the United States or abroad? Are you unsure where to turn for help and how to build a secure future? The T visa program offers a beacon of hope, providing temporary residency and protection to victims like you. We walk alongside you every step of the T visa journey, ensuring your voice is heard and your rights are protected.",
        img: `/assets/home/Humanitarian-Based-Immigration/t-visa.png`,
        slug: "t-visa",
      },
    ],
  };
  
  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Humanitarian Immigration
      </h2>

      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <DoubleOneTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default HumanitarianImmigration;
