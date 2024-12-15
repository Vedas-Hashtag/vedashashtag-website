"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { events } from "@/app/data/events";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface EventSliderProps {}

const EventSlider: FC<EventSliderProps> = ({}) => {
  const width = useWidth();
  const [activeSlide, setActiveSlide] = useState<number | null>(null); // Active slide state

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
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
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
            <Button
              onClick={() =>
                setActiveSlide((prev) => (prev === index ? null : index))
              }
              className="text-white flex items-center justify-center uppercase font-bold text-sm group bg-primary hover:bg-primary-foreground transition-colors"
              variant={"ghost"}
            >
              Explore
              <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
            </Button>
          </div>
          {/* Description with Transition */}
          <div
            className={`absolute inset-x-0 bottom-0 z-20 bg-black bg-opacity-75 p-6 text-center text-white transition-all duration-700 ease-in-out space-y-2 backdrop-blur-md min-h-60 ${
              activeSlide === index
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <p className="text-lg font-medium">{val.description}</p>
            <Button
              onClick={() =>
                setActiveSlide((prev) => (prev === index ? null : index))
              }
              //   className="text-primary-foreground flex items-center justify-center uppercase font-bold text-sm group mx-auto bg-secondary hover:bg-secondary-foreground transition-colors"
              variant={"ghost"}
            >
              Show Less...
            </Button>
          </div>
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
