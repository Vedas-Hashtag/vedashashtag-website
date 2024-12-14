/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="relative bg-primary text-primary-foreground text-center w-full md:my-0 py-10 md:py-0">
      {/* Background Ring */}
      <div className="absolute z-0 h-[22rem] md:top-[20rem] md:left-10 left-0 top-[12rem] blur-lg opacity-30">
        <Image
          src="/ring-background.png"
          alt="Ring background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Arrow */}
      <div className="absolute z-0 h-[10rem] lg:top-[25rem] lg:left-[30%] md:left-[25%] left-0 top-[12rem] md:top-[27rem] opacity-30 hidden md:flex">
        <Image
          src="/arrow.png"
          alt="Arrow background"
          width={500}
          height={500}
          className="aspect-square h-full object-contain rotate-180 invert"
          style={{ transform: "rotateY(180deg)" }}
        />
      </div>

      <MaxWidthWrapper className="flex items-center flex-col justify-center h-fit">
        <div className="relative z-10 mx-auto flex md:flex-row flex-col items-center md:justify-between justify-center min-h-[44em] w-full space-y-6 md:space-y-0">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <h1 className="text-5xl font-bold lg:text-7xl drop-shadow-lg">
              Dive into the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-destructive">
                Vedas Experience
              </span>
            </h1>
            <p className="text-lg md:text-2xl mt-4 font-medium text-muted">
              Bootcamps, Workshops, Events and More!
            </p>
            <Link
              href="#membership"
              className={cn(buttonVariants({ variant: "secondary" }), "mt-4")}
            >
              Join Now
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex relative justify-center md:w-1/2 w-full">
            <div className="z-10 relative lg:w-[21rem] w-[14rem] aspect-square border-4 border-accent rounded-full grid place-items-center">
              <div className="rounded-full border-4 border-accent aspect-square flex justify-center items-center bg-background lg:h-[17rem] h-[10rem] my-8">
                <Image
                  src="/logo.png"
                  alt="Vedas Hashtag"
                  width={500}
                  height={500}
                  className="z-10 relative"
                  priority
                />
                <Image
                  src="/abstract line.png"
                  alt="Abstract Line"
                  width={500}
                  height={500}
                  className="z-0 absolute brightness-50 opacity-30 blur-sm rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
