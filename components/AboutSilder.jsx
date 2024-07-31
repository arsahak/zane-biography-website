"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function AboutSilder({ silderData }) {
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
