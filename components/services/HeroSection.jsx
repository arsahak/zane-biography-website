import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import PageHeroSection from "../shared/PageHeroSection";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={"bg-[url('/assets/hero-img/services.jpg')] bg-cover bg-center"}
      title={"Services"}
    />
  );
};

export default HeroSection;
