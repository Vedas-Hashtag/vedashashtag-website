"use client";
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import EventSlider from "./EventSlider";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
interface EventsProps {}

const Events: FC<EventsProps> = ({}) => {
  return (
    <section id="events" className="min-h-fit py-4 relative overflow-hidden">
      <MaxWidthWrapper className="flex min-h-[30rem] max-h-[35rem] md:flex-row justify-center flex-col md:items-center z-10 md:my-16 my-4">
        <div className="lg:w-1/3 md:w-1/2 space-y-4 w-4/5 mx-auto text-center md:text-start">
          <h1 className="lg:text-[81px] md:text-[60px] font-medium text-2xl  leading-none text-foreground">
            Upcoming <br className="hidden md:flex" />
            Events &gt;
          </h1>
          <Link
            className={`${buttonVariants({
              variant: "ghost",
            })} flex md:justify-start justify-center items-center group cursor-pointer`}
            href={"/"}
          >
            Stay on the lookout{" "}
            <span>
              <ArrowRight className="inline group-hover:translate-x-4 transition-all" />
            </span>
          </Link>
        </div>
        <div className="lg:w-2/3 md:w-1/2 md:h-[44rem] h-[35rem]  w-full mx-auto cursor-grab md:py-8">
          <EventSlider />
        </div>
      </MaxWidthWrapper>
      <div className=" h-[512px] bottom-[-10rem] left-[-12rem] aspect-square  justify-center items-center absolute z-0 opacity-90 md:flex hidden ">
        <Image
          src="/Square Matrix.png"
          alt="Square Matrix"
          width={500}
          height={500}
          className=" object-contain dark:invert "
        />
      </div>
    </section>
  );
};

export default Events;
