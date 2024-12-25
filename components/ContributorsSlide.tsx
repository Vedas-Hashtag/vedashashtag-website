"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  FreeMode,
  Autoplay,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import React from "react";
import { Contributor, ContributorCard } from "./Contributors";

// Define the props for the ContributorSlider component
interface ContributorSliderProps {
  contributor?: Contributor[];
}

// Main component to render the contributor slider
const ContributorSlider: FC<ContributorSliderProps> = ({ contributor }) => {
  // Get the current width of the window
  const width = useWidth();
  // Determine the number of slides to show based on the window width
  const numbersOfSlides = width <= 768 ? 1 : width <= 1028 ? 3 : 5;

  // Function to render the Swiper component
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
      freeMode={isMobile ? false : true}
      navigation={true}
      scrollbar={isMobile ? undefined : { draggable: true, hide: true }}
      modules={[Pagination, FreeMode, Autoplay, Navigation, Scrollbar]}
      className={`w-full h-full mySlider transition-all mx-auto ${
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

  // Render the Swiper component for mobile and desktop views
  return (
    <>
      <div className="flex lg:hidden w-full h-full">{renderSwiper(true)}</div>
      <div className="hidden lg:flex w-full h-full">{renderSwiper(false)}</div>
    </>
  );
};

export default ContributorSlider;

// Custom hook to get the current window width
const useWidth = () => {
  const [width, setWidth] = useState(0);

  // Function to handle window resize and update the width state
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
