import React from "react";
import PageHeroSection from "../shared/PageHeroSection";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={
        "bg-[url('/assets/about/about-us-hero-banner.png')] bg-cover bg-center"
      }
      title={"Leagal Information"}
    />
  );
};

export default HeroSection;
