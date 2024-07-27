import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import PageHeroSection from "../shared/PageHeroSection";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={
        "bg-[url('/assets/hero-img/contact.jpg')] bg-cover bg-center"
      }
      title={"Contact Us"}
    />
  );
};

export default HeroSection;
