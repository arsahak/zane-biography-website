import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import required modules

export default function HomeSilderBg() {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
        <SwiperSlide>
          <div className="w-[1920px] h-[720px]">
            <Image
              src="/assets/horo-banner1.png"
              alt="home-banner"
              layout="fill"
              objectFit="cover"
              priority
              className=""
              rel="preload"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[1920px] h-[720px]">
            <Image
              src="/assets/horo-banner2.png"
              alt="home-banner"
              layout="fill"
              objectFit="cover"
              priority
              className=""
              rel="preload"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[1920px] h-[720px]">
            <Image
              src="/assets/horo-banner1.png"
              alt="home-banner"
              layout="fill"
              objectFit="cover"
              priority
              className=""
              rel="preload"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[1920px] h-[720px]">
            <Image
              src="/assets/horo-banner2.png"
              alt="home-banner"
              layout="fill"
              objectFit="cover"
              priority
              className=""
              rel="preload"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
