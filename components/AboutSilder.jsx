"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function AboutSilder({ silderData }) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {silderData?.map((el, index) => (
          <SwiperSlide>
            <div className="max-w-[700px] h-[480px]">
              <Image
                src={el?.imgUrl}
                alt={"slider"}
                layout="fill"
                objectFit="cover"
                priority
                className=""
                rel="preload"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
