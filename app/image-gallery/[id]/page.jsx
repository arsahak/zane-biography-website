import React from "react";
// import { Image } from "@nextui-org/react";
import MotionEffect from "@/components/motion/MotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import HeroSection from "@/components/HeroSection";
import { SITECONFIG } from "@/config/siteData";
import Image from "next/image";

const page = async ({ params }) => {
  const listOfImage = await SITECONFIG?.galleryImageInfo?.filter(
    (el, index) => parseInt(el.id) === parseInt(params.id)
  );

  return (
    <>
      <HeroSection />
      <SectionLayout bg="bg-white">
        <div className="grid grid-cols-4 gap-4 items-start justify-between">
          {listOfImage?.imageList?.map((el, index) => (
            <div key={index} className="w-[400px] h-[500px]">
              {/* <Image
                isZoomed
                width={400}
                alt="NextUI Fruit Image with Zoom"
                src={el}
              /> */}
              <Image
                src={"/assets/horo-banner2.png"}
                alt="About Image"
                width={450}
                height={400}
                className=""
                rel="preload"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
