import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomeSilderBg({ silderData }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
            <div className="w-[1920px] h-[480px] md:h-[880px]">
              <Image
                src={el?.url}
                alt={el?.alt}
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
