import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "../shared/BlackButton";
import ScondayButton from "../shared/ScondayButton";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout
      bg="bg-white"
      //   img={"bg-[url('/assets/about/bg.png')] bg-right-top"}
    >
      <div className="space-y-14">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <MotionEffect effect="fade-right" duration="2000">
            <div className="">
              <h2 className="text-stone-950 font-bold text-base">About</h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                Trip Law
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
              <h2
                className={`text-stone-950 font-bold text-3xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                “ Accumsan volutpat ocurreret id nam numquam accommodare quo et
                vidit choro “
              </h2>
              <div className="flex justify-center md:justify-start">
                <ScondayButton
                  title={"Our Services"}
                  link={"/"}
                  style={"bg-[#1B2639] text-white"}
                  radius={"sm"}
                />
              </div>
            </div>
          </MotionEffect>
          <div className="w-[100%]">
            <MotionEffect effect="fade-left" duration="2000">
              <div className="flex justify-center items-center">
                <Image
                  width={1200}
                  height={500}
                  src={"/assets/about/aboutone.png"}
                  alt="about img"
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </div>
      <div className="my-16 md:my-24"></div>
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="">
            <MotionEffect effect="fade-right" duration="2000">
              <div className="flex justify-center items-center">
                <Image
                  width={1200}
                  height={500}
                  src={"/assets/about/abouttwo.png"}
                  alt="about img"
                />
              </div>
            </MotionEffect>
          </div>
          <MotionEffect effect="fade-left" duration="2000">
            <div className="">
              <h2 className="text-stone-950 font-bold text-base">About</h2>
              <hr class="h-[2px] my-0 bg-stone-950 border-0 w-4"></hr>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                Mukta Patel
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
              <h2
                className={`text-stone-950 font-bold text-3xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                “ Accumsan volutpat ocurreret id nam numquam accommodare quo et
                vidit choro “
              </h2>
              <div className="flex justify-center md:justify-start">
                <ScondayButton
                  title={"Our Services"}
                  link={"/"}
                  style={"bg-[#1B2639] text-white"}
                  radius={"sm"}
                />
              </div>
            </div>
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
