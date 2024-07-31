import React from "react";
// import { Image } from "@nextui-org/react";
import MotionEffect from "@/components/motion/MotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import HeroSection from "@/components/HeroSection";
import { SITECONFIG } from "@/config/siteData";
import Image from "next/image";

const page = ({ params }) => {
  const listOfImage = SITECONFIG?.galleryImageInfo?.filter(
    (el, index) => parseInt(el.id) === parseInt(params.id)
  );

  console.log("check data value 2", listOfImage[0]?.imageList[0]?.imgUrl);

  return (
    <>
      <HeroSection />
      <SectionLayout bg="bg-white">
        <div className="grid grid-cols-3 gap-7 items-start justify-between">
          {listOfImage[0]?.imageList?.map((el, index) => (
            <div key={index} className="max-w-[700px] h-[300px]">
              <Image
                isZoomed
                width={500}
                height={200}
                alt="NextUI Fruit Image with Zoom"
                src={el?.imgUrl}
                className="max-w-[700px] h-[300px]"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
