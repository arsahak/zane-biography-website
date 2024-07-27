import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { Mulish, Bitter } from "next/font/google";
import MotionEffect from "../motion/MotionEffect";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
// img="bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
const PageHeroSection = ({ image, title }) => {
  return (
    <SectionLayout img={image} bg=" bg-black bg-opacity-85">
      <MotionEffect effect={"fade-up"} duration={"2000"}>
        <div className="py-20 gap-10 items-center md:flex">
          <h2 className={`text-white font-bold text-4xl text-center`}>
            {title}
          </h2>

          <nav
            className="flex justify-center mt-4 md:mt-0"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-stone-200 hover:text-red-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-stone-50 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="#"
                    className="ms-1 text-sm font-medium text-white md:ms-2"
                  >
                    {title}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </MotionEffect>
    </SectionLayout>
  );
};

export default PageHeroSection;
