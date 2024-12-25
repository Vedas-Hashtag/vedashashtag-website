/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { efforts } from "@/app/data/effortSection";
import React from "react";
import { SectionDescription, SectionTitle } from "./Holder";

// Define the props interface for the EffortSection component
interface EffortSectionProps {}

// EffortSection component definition
const EffortSection: FC<EffortSectionProps> = ({}) => {
  return (
    <section
      id="efforts"
      className="h-[500px] flex justify-center items-center bg-foreground text-accent-foreground relative"
    >
      {/* Wrapper to constrain the maximum width of the content */}
      <MaxWidthWrapper className="mx-auto text-center relative z-10 space-y-12  md:mt-0">
        {/* Section title */}
        <SectionTitle variants="secondary">our effort</SectionTitle>
        {/* Section description */}
        <SectionDescription variants="secondary">
          What we&apos;ve managed to achieve
        </SectionDescription>
        {/* Grid to display effort items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:place-items-start md:w-full place-items-center mx-auto">
          {efforts.map((val, _) => {
            return (
              <p
                className="lg:text-[40px] md:text-xl text-lg uppercase font-medium text-background text-center w-full"
                key={_}
              >
                <span className="text-primary font-semibold">{val.count}</span>{" "}
                {val.title}
              </p>
            );
          })}
        </div>
      </MaxWidthWrapper>
      {/* Background logo image */}
      <div className="bg-white rounded-full h-4/5 aspect-square  top-90 left-50 flex justify-center items-center absolute z-0 opacity-20">
        <Image
          src="/logo.png"
          alt="Vedas Hashtag Logo"
          width={500}
          height={500}
          className=" object-contain "
        />
      </div>
      {/* Background sphere image */}
      <div className="rounded-full h-60 top-[30%] left-[0] aspect-square flex justify-center items-center absolute z-0 opacity-90">
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
