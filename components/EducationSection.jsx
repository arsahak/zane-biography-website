import React from "react";
import SectionLayout from "./shared/SectionLayout";
import { SITECONFIG } from "@/config/siteData";
import { Mulish, Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const EducationSection = () => {
  return (
    <section id="education-me">
      <SectionLayout>
        <div className="flex flex-col md:flex-row item-start gap-10 mx-10">
          <div className="w-[100%] md:w-[25%]">
            <h2
              className={`text-stone-950 font-bold text-3xl mb-4 text-center md:text-left ${bitter.className}`}
            >
              EDUCATION
            </h2>
          </div>
          <div className="w-[100%] md:w-[75%]">
            {SITECONFIG?.educationInfo?.map((el, index) => (
              <div
                key={index}
                className={`pb-5 border-b-2 ${index === 0 ? "pt-0" : "pt-5"}`}
              >
                <h2
                  className={`text-stone-950 font-bold text-3xl mb-2 text-center md:text-left ${bitter.className}`}
                >
                  {el?.mainTitle}
                </h2>
                <p className="mb-3 text-md text-stone-950 text-center md:text-left italic">
                  {el?.subTitle}
                </p>
                <p className="mb-3 text-xl text-stone-950 text-center md:text-left">
                  {el?.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default EducationSection;
