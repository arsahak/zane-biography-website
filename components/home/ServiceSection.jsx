"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Mulish, Bitter } from "next/font/google";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { articlesInfo } from "@/config/data";
import WhiteButton from "../shared/WhiteButton";
import MotionEffect from "../motion/MotionEffect";
import CardMotion from "../motion/CardMotion";
import ScondayButton from "../shared/ScondayButton";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const ServiceSection = () => {
  const serviceData = [
    {
      icon: "/assets/home/icon/waivers.png",
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: "Waivers",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
    {
      icon: "/assets/home/icon/e2-treaty-visas.png",
      bg: "bg-[url('/assets/home/e2-employees.png')]",
      title: "E2 Treaty Visas",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
    {
      icon: "/assets/home/icon/citizenship.png",
      bg: "bg-[url('/assets/home/waviersone.png')]",
      title: "Citizenship",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
    {
      icon: "/assets/home/icon/naturalization-citizenship.png",
      bg: "bg-[url('/assets/home/citizenshipbg.png')]",
      title: "Naturalization & Citizenship",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
    {
      icon: "/assets/home/icon/asylum.png",
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: "Asylum",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
    {
      icon: "/assets/home/icon/green-card.png",
      bg: "bg-[url('/assets/home/e2-tready-visas.png')]",
      title: "Green Card",
      dec: "Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.",
    },
  ];
  return (
    <SectionLayout bg="bg-[#1B2639]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              y: 100,
            }}
          >
            <div className="">
              <h2 className="text-stone-50 font-bold text-base">Services</h2>
              <hr class="h-[2px] my-0 bg-stone-50 border-0 w-4"></hr>
              <h2
                className={`text-stone-50 font-bold text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                Additional Services
              </h2>
            </div>
          </CardMotion>
          <CardMotion
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
              },
            }}
            initial={{
              opacity: 0,
              y: 100,
            }}
          >
            <div className="flex justify-end invisible md:visible ">
              <ScondayButton
                title={"View All"}
                link={"/services"}
                style={"bg-slate-50 text-black"}
                radius={"none"}
              />
            </div>
          </CardMotion>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-[-20px] md:mt-12">
          {serviceData.map((item, index) => (
            <CardMotion
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.1,
                },
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              <div
                className={`flex text-center bg-cover h-[300px] items-center ${item.bg}`}
              >
                <div class="p-6">
                  <div className="bg-[#1B2639] p-3 rounded-full bg-opacity-25 flex justify-center items-center mx-auto w-[60px] h-[60px]">
                    <Image
                      width={45}
                      height={45}
                      src={item.icon}
                      alt="about img"
                      className="flex justify-center mx-auto"
                    />
                  </div>
                  <h2
                    className={`text-stone-50 font-semibold text-xl mt-5 mb-4 text-center ${bitter.className}`}
                  >
                    {item.title}
                  </h2>
                  <p className="font-thin text-[1rem] text-white text-center">
                    {item.dec}
                  </p>
                </div>
              </div>
            </CardMotion>
          ))}
        </div>

        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="flex justify-center visible md:invisible mt-12 md:mt-[-60px]">
            <ScondayButton
              title={"View All"}
              link={"/services"}
              style={"bg-slate-50 text-black"}
              radius={"none"}
            />
          </div>
        </CardMotion>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
