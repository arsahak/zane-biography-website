import React from "react";
import TestimonialSlider from "../shared/TestimonialSlider";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";

function TestimonialSection() {
  return (
    <SectionLayout bg="bg-white">
      <div className="flex flex-col items-center justify-center">
        <MotionEffect effect="fade-right" duration={2000}>
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-normal font-bold text-slate-900 text-center text-wrap w-80 sm:w-[700px]">
            What our Clients Have to Say
          </h2>
        </MotionEffect>

        <div className="relative w-full">
          <MotionEffect effect="fade-left" duration={2000}>
            <TestimonialSlider />
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
}

export default TestimonialSection;
