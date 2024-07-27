import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import MotionEffect from "../motion/MotionEffect";

const serviceContent = [
  {
    icon: "/assets/services/politics.svg",
    title: "Diverse Service Range",
    desc: `From tax planning and compliance to business advisory and
    technological integration, our services cover the entire spectrum of
    your business needs.our services cover the entire spectrum of your
    business needs. compliance to business advisory and technological
    integration,`,
  },
  {
    icon: "/assets/services/solution.svg",
    title: "Customized Solutions",
    desc: `Recognizing that one size doesn't fit all, we offer customized
    solutions. Whether it’s expanding your service offerings or refining
    your operational model, we’re here to create a solution that
    fits.we’re here to create a solution that fits. we’re here to create
    a solution that fits.`,
  },
  {
    icon: "/assets/services/focus.svg",
    title: "Focus on Value Addition",
    desc: `Our services are designed not just to meet but to exceed your
    expectations. We focus on adding value to every aspect .We focus on
    adding value to every aspectof your business, ensuring that every
    step you take is a step towards greater success.`,
  },
];

const ServiceOfferings = () => {
  return (
    <SectionLayout bg="bg-[#D5AD45]">
      <MotionEffect effect="fade-up" duration="2000">
        <h2 className="mb-4 text-4xl tracking-normal font-bold text-white text-center leading-snug">
          Comprehensive Service Offerings:
          <br /> A Full Spectrum of Solutions
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center font-light text-white md:mb-12 sm:text-normal mt-4">
          Your journey towards scaling your tax business doesn’t have to be a
          solitary one. At 10X Tax Pro, we’re more than a service provider;
          we’re a partner in your success.
        </p>
      </MotionEffect>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {serviceContent.map((con, index) => (
          <MotionEffect effect="fade-up" duration="2000">
            <div className="p-6 " key={index}>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Image
                  width={50}
                  height={50}
                  src={con.icon}
                  alt="about img"
                  className="rounded-tr-[100px]"
                />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 text-center md:text-left">
                {con.title}
              </h2>
              <p className="text-white text-center md:text-left ">{con.desc}</p>
            </div>
          </MotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ServiceOfferings;
