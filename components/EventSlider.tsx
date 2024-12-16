"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  FreeMode,
  Autoplay,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { events } from "@/app/data/events";
import Image from "next/image";

interface EventSliderProps {}

const EventSlider: FC<EventSliderProps> = ({}) => {
  const width = useWidth();

  let numbersOfSlides = 3;
  if (width) {
    if (width <= 1028) {
      numbersOfSlides = 1;
    } else {
      numbersOfSlides = 3;
    }
  }

  return (
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
      mousewheel={true}
      navigation={true}
      modules={[Pagination, FreeMode, Autoplay, Mousewheel, Navigation]}
      className="w-full h-full mySlider transition-all"
    >
      {events.map((val, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Slide Image */}
          <Image
            src={val.image || "/logo.png"}
            alt={val.title}
            height={300}
            width={400}
            className="object-cover absolute inset-0 brightness-50 object-center z-0 blur-[2px] bg-black"
          />
          {/* Explore Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="text-white font-bold drop-shadow-3xl">
              {val.title}
            </h1>
          </div>
          {/* Description with Transition */}
        </SwiperSlide>
      ))}
    </Swiper>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};
