import MotionEffect from "@/components/motion/MotionEffect";
import PageMotion from "@/components/motion/PageMotion";
import HeroSection from "@/components/services/HeroSection";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceSection from "@/components/services/ServiceSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import { servicesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <PageHeroSection
        image={
          "bg-[url('/assets/hero-img/services.jpg')] bg-cover bg-center"
        }
        title={"Services"}
      />
      <SectionLayout bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-between">
          {servicesData?.map((el, index) => (
            <Link href={`/services/${el?.slug}`}>
              <MotionEffect effect={"fade-up"} duration={"2000"}>
                <ServiceCard serversData={el} />
              </MotionEffect>
            </Link>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default page;
