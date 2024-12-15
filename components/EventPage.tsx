"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useState } from "react";
import { events } from "@/app/data/events";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EventPage = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>();

  const toggleView = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <section className="min-w-screen mb-10">
      <MaxWidthWrapper className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((val, index) => (
          <div
            className="aspect-[3/4] w-full relative overflow-hidden hover:ring-2 rounded-sm ring-primary cursor-pointer mt-2"
            key={index}
          >
            {/* Background Image */}
            <Image
              src={val.image || "/logo.png"}
              alt={val.title}
              height={200}
              width={200}
              quality={50}
              className="h-full w-full object-cover object-center brightness-[20%] bg-black/50 absolute inset-0"
            />

            {/* Front Content */}
            <div
              className={cn(
                "top-[70%] left-0 relative text-3xl text-center font-bold text-white w-4/5 mx-auto py-4 transition-all duration-500",
                {
                  "scale-y-0 opacity-0": clickedIndex === index,
                  "scale-y-100 opacity-100": clickedIndex !== index,
                }
              )}
            >
              <h1 className="line-clamp-1">{val.title}</h1>
              <p className="text-lg font-normal line-clamp-2">
                {val.description}
              </p>
              <Button
                variant="ghost"
                onClick={() => toggleView(index)}
                aria-label="View More"
              >
                View More...
              </Button>
            </div>

            {/* Expanded View */}
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-evenly items-center space-y-4 backdrop-blur-sm py-12 text-white transition-all duration-500",
                {
                  "translate-y-0 opacity-100": clickedIndex === index,
                  "translate-y-full opacity-0": clickedIndex !== index,
                }
              )}
            >
              <h1 className="text-3xl font-bold">{val.title}</h1>
              <p className="text-lg font-normal">{val.description}</p>
              <Button variant="ghost" onClick={() => toggleView(index)}>
                Close
              </Button>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default EventPage;
