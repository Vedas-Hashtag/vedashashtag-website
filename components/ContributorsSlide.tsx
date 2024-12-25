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

  let numbersOfSlides = 3;
  if (width) {
    if (width <= 1028) {
      numbersOfSlides = 1;
    } else {
      numbersOfSlides = 3;
    }
  }

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
          mousewheel={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full h-full mySlider transition-all hidden lg:flex"
        >
          {contributor?.map((contributor, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Slide Image */}

              <ContributorCard
                key={contributor.login}
                contributor={contributor}
              />
            </SwiperSlide>
          ))}
          {/* Description with Transition */}
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
          mousewheel={true}
          navigation={true}
          scrollbar={{ draggable: true, hide: true }}
          modules={[
            Pagination,
            FreeMode,
            Autoplay,
            Mousewheel,
            Navigation,
            Scrollbar,
          ]}
          className="w-full h-full mySlider transition-all  lg:hidden"
        >
          {contributor?.map((contributor, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Slide Image */}

              <ContributorCard
                key={contributor.login}
                contributor={contributor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};
