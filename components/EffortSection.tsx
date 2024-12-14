/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { efforts } from "@/app/data/effortSection";
import React from "react";
interface EffortSectionProps {}

const EffortSection: FC<EffortSectionProps> = ({}) => {
  return (
    <section
      id="efforts"
      className="h-[20rem] flex justify-center items-center bg-foreground text-accent-foreground relative"
    >
      <MaxWidthWrapper className="my-auto mx-auto text-center relative z-10 space-y-4">
        <h1 className=" font-normal mb-4 uppercase text-lg text-muted">
          our effort
        </h1>
        <p className="font-semibold text-secondary text-3xl text-center">
          What we&apos;ve managed to achieve
        </p>
        <div className="grid grid-cols-2 gap-4 md:place-items-start md:w-1/2 place-items-center mx-auto">
          {efforts.map((val, _) => {
            return (
              <p
                className="lg:text-2xl md:text-xl text-lg uppercase font-medium text-background"
                key={_}
              >
                <span className="text-primary font-semibold">{val.count}</span>{" "}
                {val.title}
              </p>
            );
          })}
        </div>
      </MaxWidthWrapper>
      <div className="bg-white rounded-full h-4/5 aspect-square  top-90 left-50 flex justify-center items-center absolute z-0 opacity-20">
        <Image
          src="/logo.png"
          alt="Vedas Hashtag Logo"
          width={500}
          height={500}
          className=" object-contain "
        />
      </div>
      <div className="rounded-full h-40 top-[30%] left-[0] aspect-square flex justify-center items-center absolute z-0 opacity-90">
        <Image
          src="/Sphere.png"
          alt="Vedas Hashtag Logo"
          width={500}
          height={500}
          className=" object-contain "
        />
      </div>
    </section>
  );
};

export default EffortSection;
