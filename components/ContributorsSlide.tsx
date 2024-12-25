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
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import React from "react";
import { Contributor, ContributorCard } from "./Contributors";

interface ContributorSliderProps {
  contributor?: Contributor[];
}

const ContributorSlider: FC<ContributorSliderProps> = ({ contributor }) => {
  const width = useWidth();
  const numbersOfSlides = width <= 1028 ? 1 : 3;

  const renderSwiper = (isMobile: boolean) => (
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
      mousewheel={true}
      navigation={true}
      scrollbar={isMobile ? undefined : { draggable: true, hide: true }}
      modules={[
        Pagination,
        FreeMode,
        Autoplay,
        Mousewheel,
        Navigation,
        Scrollbar,
      ]}
      className={`w-full h-full mySlider transition-all ${
        isMobile ? "lg:hidden" : "hidden lg:flex"
      }`}
    >
      {contributor?.map((contributor, index) => (
        <SwiperSlide key={index} className="relative">
          <ContributorCard key={contributor.login} contributor={contributor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
      <div className="flex lg:hidden w-full h-full">{renderSwiper(true)}</div>
      <div className="hidden lg:flex w-full h-full">{renderSwiper(false)}</div>
    </>
  );
};

export default ContributorSlider;

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
