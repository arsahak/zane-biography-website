import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { DoubleTabSection } from "../shared/DoubleTabSection";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const EmploymentBasedImmigration = () => {
  const tabsData = {
    top: [
      {
        value: "1",
        label: "H1B Visa",
      },
      {
        value: "2",
        label: "L-1 Visa",
      },
      {
        value: "3",
        label: "O-1 Visa",
      },
    ],
    bottom: [
      {
        value: "4",
        label: "EB-1 Visa",
      },
      {
        value: "5",
        label: "EB-2 Visa",
      },
      {
        value: "6",
        label: "EB-3 Visa",
      },
    ],
    details: [
      {
        value: "1",
        content:
          "You're hoping to get that great job in the United States, where your specialist skills are in high demand, right? Well, the H-1B visa program is your ladder to making it happen! But let's be real – the whole application process and all those legal hoops you gotta jump through can be pretty overwhelming. We're here to make it simple, guiding you through every step and making sure you've got everything you need to snag that H-1B visa and start your American adventure.",
        img: `/assets/home/Employment-Based-Immigration/H1B-Visa.png`,
        slug: "h1b-visa",
      },
      {
        value: "2",
        content:
          "Are you a key employee within a multinational company, eager to contribute your valuable skills and experience to the U.S. branch? The L-1 visa program facilitates the intracompany transfer of executives, managers, and specialized knowledge workers, allowing you to seamlessly transition and continue your impactful work in the United States. Our legal guidance will make sure your journey to getting that L-1 visa is a breeze, so you can hit the ground running in the U.S. and make a real impact.",
        img: `/assets/home/Employment-Based-Immigration/L-1-Visa.png`,
        slug: "l1-visa",
      },
      {
        value: "3",
        content: `Are you an individual of "extraordinary ability" in the sciences, arts, education, business, or athletics, yearning to showcase your talents and contribute to the dynamic landscape of the United States? The O-1 visa program recognizes and welcomes individuals like you, paving the way for temporary residency and fostering innovation across diverse fields. We supply legal guidance and unwavering support to ensure your O-1 visa journey is a resounding success`,
        img: `/assets/home/Employment-Based-Immigration/O-1-Visa.png`,
        slug: "o1-visa",
      },
      {
        value: "4",
        content:
          "Got real standout skills in your field, Just itching to bring your exceptional skills and talent to the U.S.? Well, good news – the EB-1 visa program is all about recognizing and welcoming folks like you who are at the top of their game. It's an elite pass to permanent residency in the States. And guess what? We're here to make that journey a piece of cake. We will be with you every step of the way, ensuring your EB-1 visa journey is smooth sailing and ends in success.",
        img: `/assets/home/Employment-Based-Immigration/EB-1-Visa.png`,
        slug: "eb1-visa",
      },
      {
        value: "5",
        content:
          "If you're aiming to bring your expertise and skills to the American workforce permanently, the EB-2 visa program is your avenue. It offers professionals with advanced degrees or exceptional ability a route to securing green cards and leaving a lasting impact in the United States. Here, we're offering comprehensive legal guidance and steadfast support, ensuring your EB-2 visa journey is both successful and hassle-free.",
        img: `/assets/home/Employment-Based-Immigration/EB-2-Visa.png`,
        slug: "eb2-visa",
      },
      {
        value: "6",
        content:
          "Want to build a solid future in the US, leveraging your skills and hard work? The EB-3 visa program is your ticket. It's made for skilled workers, professionals, and experienced individuals like you, offering a path to permanent residency. We'll guide you through the entire application process, ensuring your journey to a green card is as smooth as it is stress-free.",
        img: `/assets/home/Employment-Based-Immigration/EB-3-Visa.png`,
        slug: "eb3-visa",
      },
    ],
  };

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-0 mb-3 text-center ${bitter.className}`}
      >
        Employment Based Immigration
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <DoubleTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default EmploymentBasedImmigration;
