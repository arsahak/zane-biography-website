import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import PageHeroSection from "../shared/PageHeroSection";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={
        "bg-[url('/assets/hero-img/about-us.jpg')] bg-cover bg-center"
      }
      title={"About Us"}
    />
  );
};

export default HeroSection;
