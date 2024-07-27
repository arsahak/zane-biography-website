import SectionLayout from "../shared/SectionLayout";
import { Button } from "@nextui-org/react";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { SingleTabSection } from "../shared/SingleTabSection";
import { DoubleTabSection } from "../shared/DoubleTabSection";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const FamilyBasedImmigration = () => {
  let tabsData = [
    {
      value: "1",
      label: `<p>Green Card </br>Through Marriage</p>`,
      slug: "green-card-through-marriage",
      content:
        "Are you married to a U.S. citizen or lawful permanent resident and dreaming of building a life together in the United States? Obtaining a green card through marriage can be a complex and emotionally charged process. We understand the challenges you face and are dedicated to providing comprehensive legal guidance throughout your journey",
      img: `/assets/home/Family-Based-Immigration/green-card-through-marriage.png`,
    },
    {
      value: "2",
      label: `<p>Green Card Through</br>Immediate Relative</p>`,
      slug: "green-card-through-immediate-relative",
      content:
        "If you're eager to reunite with your loved ones who are already U.S. citizens, getting a green card through a close family member can be quite tricky due to all the rules and challenges involved. But don't sweat it – we've got your back. We'll walk you through the whole process, making sure you've got everything you need to make your dream of permanent residency in the U.S. a reality",
      img: `/assets/home/Family-Based-Immigration/Green-Card-Immediate-Relative's.png`,
    },
    {
      value: "3",
      label: `<p>Green Card Through </br>Consular Processing</p>`,
      slug: "green-card-through-consular-processing",
      content:
        "Are you all set to start the process for getting your permanent residency in the U.S., but you're currently living outside the country? Going through Consular Processing for a Green Card can be your ticket to making that dream a reality. It can be a bit tricky to figure out all the ins and outs, but don't worry! We're here to give you expert advice and full support to make sure everything goes smoothly and you can make that transition successfully.",
      img: `/assets/home/Family-Based-Immigration/Green-Card-Through-Consular-Processing.png`,
    },
  ];

  return (
    <SectionLayout bg="bg-white">
      <h2
        className={`text-stone-950 font-bold text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Family-Based Immigration:
      </h2>
      <div className="flex justify-center">
        <div className="flex w-full flex-col mt-10">
          <SingleTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default FamilyBasedImmigration;
