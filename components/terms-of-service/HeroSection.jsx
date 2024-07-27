import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import PageHeroSection from "../shared/PageHeroSection";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={
        "bg-[url('/assets/about/about-us-hero-banner.png')] bg-cover bg-center"
      }
      title={"Terms of Service"}
    />
  );
};

export default HeroSection;
