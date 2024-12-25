"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { events } from "@/app/data/events";
import Image from "next/image";
import React from "react";

interface EventSliderProps {}

const EventSlider: FC<EventSliderProps> = () => {
  const width = useWidth();

  const numbersOfSlides = width <= 1028 ? 1 : 3;

  const renderSlides = () =>
    events.map((val, index) => (
      <SwiperSlide key={index} className="relative">
        <Image
          src={val.image || "/logo.png"}
          alt={val.title}
          height={300}
          width={400}
          className="object-cover absolute inset-0 brightness-50 object-center z-0 bg-black"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-white font-bold drop-shadow-3xl">{val.title}</h1>
        </div>
      </SwiperSlide>
    ));

  return (
    <>
      <div className="flex lg:hidden w-full h-full">
        <Swiper
          slidesPerView={numbersOfSlides}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full h-full mySlider transition-all hidden lg:flex"
        >
          {renderSlides()}
        </Swiper>
      </div>
      <div className="hidden lg:flex w-full h-full">
        <Swiper
          slidesPerView={numbersOfSlides}
          spaceBetween={10}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, FreeMode, Autoplay, Navigation]}
          className="w-full h-full mySlider transition-all lg:hidden"
        >
          {renderSlides()}
        </Swiper>
      </div>
    </>
  );
};

export default EventSlider;

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};
