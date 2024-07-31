"use client";
import { motion } from "framer-motion";
import { Bitter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SectionLayout from "./shared/SectionLayout";
import HomeSilderBg from "./HomeSilderBg";
import { SITECONFIG } from "@/config/siteData";

const bitter = Bitter({ subsets: ["latin"] });

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = SITECONFIG?.heroBannerInfo?.mainTitle?.split(" ");

  const primaryColor = SITECONFIG?.sitePrimaryColor;
  const secondaryColor = `text-${SITECONFIG?.siteSecondaryColor}`;
  const textColor = SITECONFIG?.siteTextColor;

  return (
    <section id="home-me">
      <div className="relative md:overflow-hidden">
        <div className="relative h-[480px] md:h-[880px] ">
          <div className="z-10 ">
            <HomeSilderBg
              silderData={SITECONFIG?.heroBannerInfo?.heroBgSilderImg}
            />
          </div>

          <motion.div
            className="absolute inset-0 z-20 my-0 flex items-center bg-[#0215269c]"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <SectionLayout>
              <div className="flex justify-center items-center">
                <div className="col-span-2">
                  <motion.h2
                    variants={variants}
                    className={`font-black text-xl md:text-3xl text-center text-red-700`}
                  >
                    {SITECONFIG?.heroBannerInfo?.topTitle}
                  </motion.h2>
                  <div className="flex justify-center">
                    <motion.hr
                      variants={variants}
                      className="h-[2px] my-2 bg-red-700 border-0 w-20"
                    />
                  </div>
                  <h1
                    className={`text-[50px] md:text-[90px] font-[800] text-white text-center leading-tight tracking-normal ${bitter.className}`}
                  >
                    {text.map((word, index) => (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: index / 10 }}
                        key={index}
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                  </h1>
                  <motion.p
                    variants={variants}
                    className="text-white text-md md:text-lg mt-4 md:mt-5 text-center"
                  >
                    {SITECONFIG?.heroBannerInfo?.subTitle}
                  </motion.p>

                  {/* <motion.div
                variants={variants}
                className="mt-5 md:mt-8 flex justify-center"
              >
                <Link
                  className="text-white bg-red-700 hover:bg-red-800 font-medium text-sm md:text-lg px-2 md:px-8 py-2 me-3 md:me-6 mb-2 uppercase items-center justify-center flex"
                  href="/appointment"
                >
                  Consultation
                </Link>
                <Link
                  href={"tel:(863)-599-6735"}
                  className="text-white bg-none hover:bg-red-800 font-medium text-sm md:text-lg px-2 md:px-8 py-2 me-0 md:me-6 mb-2 border border-white items-center justify-center flex"
                >
                  (863)-599-6735
                </Link>
              </motion.div> */}
                </div>
              </div>
            </SectionLayout>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
