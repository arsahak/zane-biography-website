import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import { Mulish, Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const AppointmentSection = () => {
  return (
    <SectionLayout bg="bg-white">
      <MotionEffect effect={"fade-right"} duration={"2000"}>
        <h2
          className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center ${bitter.className}`}
        >
          Appointment
        </h2>
      </MotionEffect>
      <MotionEffect effect={"fade-left"} duration={"2000"}>
        <p className="text-lg text-stone-950 text-center">
          Demo Digital Xperience Group (DXG), a pioneering division of WLJ
          Consulting, is a premier partner in transforming events into
          unforgettable experiences. With our roots firmly planted in the event
          hospitality industry. We pride ourselves on elevating the digital and
          production quality of in-person, virtual, and hybrid events.
        </p>
      </MotionEffect>
    </SectionLayout>
  );
};

export default AppointmentSection;
