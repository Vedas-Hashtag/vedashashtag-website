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
      <MaxWidthWrapper className="flex min-h-[30rem] max-h-[40rem] md:flex-row justify-center flex-col md:items-center z-10">
        <div className="md:w-1/2 space-y-4 w-4/5 mx-auto text-center md:text-start">
          <h1 className="md:text-5xl font-medium text-2xl  leading-relaxed text-muted-foreground">
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
        <div className="md:w-1/2 md:h-[30rem] h-[35rem] p-4 w-full mx-auto ">
          <EventSlider />
        </div>
      </MaxWidthWrapper>
      <div className=" h-[20rem] bottom-[-8rem] left-[0] aspect-square flex justify-center items-center absolute z-0 opacity-90 md:flex hidden">
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
