"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { Mulish, Bitter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

import "@/style/custom.css";
import Image from "next/image";

import { TESTIMONIAL_DATA } from "@/config/data";
import { useState } from "react";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export default function TestimonialSlider() {
  const [bgImage, setBgImage] = useState(`/testimonial/client-2.png`);

  const totalSlides = TESTIMONIAL_DATA.length;

  const updateBgImage = (index) => {
    if (index === totalSlides - 1) {
      setBgImage(`/testimonial/client-1.png`);
    } else {
      setBgImage(`/testimonial/client-${index + 2}.png`);
    }
  };

  return (
    <div className="relative mt-2 sm:mt-6 mb-2 sm:mb-6">
      <div className="relative mx-auto lg:max-w-8xl ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className=""
          onSlideChange={(swiper) => {
            updateBgImage(swiper.activeIndex);
          }}
        >
          {TESTIMONIAL_DATA.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 mx-0 md:mx-24 items-center">
                  <div className="p-5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={357}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 leading-6 space-y-4 mb-28">
                    <div className="flex justify-center sm:justify-start">
                      <FaQuoteRight className="text-[#223555] text-3xl" />
                    </div>
                    <p className="text-slate-900 text-center md:text-left">
                      I am a person who is positive about every aspect of life.
                      There are many things I like to do, to see, and to
                      experience. I like to read, I like to write; I like to
                      think, I like to dream; I like to talk, I like to listen.
                    </p>
                    <h1
                      className={`my-1 text-2xl font-semibold text-slate-900 text-center sm:text-left ${bitter.className}`}
                    >
                      {item.name}
                    </h1>
                    <h2 className="font-normal text-slate-900 text-center sm:text-left">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="swiper-button-next ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-slate-900 border border-slate-900 rounded-full p-3 hover:bg-slate-900 rotate-180 sm:rotate-0 hover:text-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="swiper-button-prev ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-slate-900 border border-slate-900 rounded-full p-3 sm:rotate-180 hover:bg-slate-900 hover:text-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
