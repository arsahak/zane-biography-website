import React from "react";
import TestimonialSlider from "../shared/TestimonialSlider";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import CardMotion from "../motion/CardMotion";

function TestimonialSection() {
  return (
    <SectionLayout bg="bg-white">
      <div className="flex flex-col items-center justify-center">
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
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-normal font-bold text-slate-900 text-center text-wrap w-80 sm:w-[700px]">
            What our Clients Have to Say
          </h2>
        </CardMotion>
        <div className="relative w-full">
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
            <TestimonialSlider />
          </CardMotion>
        </div>
      </div>
    </SectionLayout>
  );
}

export default TestimonialSection;
