/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { formLinks } from "@/app/data/links";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="relative bg-primary text-primary-foreground text-center w-full md:my-0 py-10 md:py-0 h-[861px]">
      {/* Background Ring */}
      <div className="absolute z-0 h-[658px] md:top-[20rem] md:left-10 lg:left-[-17rem] left-0 top-[12rem] blur- opacity-30">
        <Image
          src="/ring-background.png"
          alt="Ring background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Arrow */}
      <div className="absolute z-0 h-[155.5px] w-[237.25px] lg:top-[25rem] lg:left-[30%] md:left-[25%] left-0 top-[12rem] md:top-[27rem] opacity-70 hidden md:flex">
        <Image
          src="/Shape.png"
          alt="Arrow background"
          width={500}
          height={500}
          className="aspect-square h-full object-contain "
        />
      </div>

      <MaxWidthWrapper className="flex items-center flex-col justify-center h-fit">
        <div className="relative z-10 mx-auto flex md:flex-row flex-col items-center md:justify-between justify-center min-h-[44em] w-full space-y-6 md:space-y-0">
          {/* Left Content */}
          <div className="flex flex-col md:items-start md:justify-start justify-center items-center w-full md:w-1/2 text-foreground space-y-8">
            <h1 className="text-5xl font-medium lg:text-[81px]  md:text-start text-center">
              Dive into the Vedas Experience
            </h1>
            <p className="text-[30px] md:text-2xl mt-4 font-medium md:text-start text-center">
              Bootcamps, Workshops, Events and More!
            </p>
            <Link
              href={formLinks.membership}
              target="_blank"
              referrerPolicy="no-referrer"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mt-4 uppercase"
              )}
            >
              Apply to become a member <ArrowRight />
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex relative justify-center md:w-1/2 w-full ">
            {/* <div className="z-10 relative lg:w-[21rem] w-[14rem] aspect-square border-4 border-white rounded-full grid place-items-center">*/}
            <div className="rounded-full border-4 border-white aspect-square flex justify-center items-center bg-white lg:h-[164px] h-[100px] md:h-[128px] md:top-[40px] md:left-[25px]  my-8 relative lg:top-[85px] top-[70px] left-[20px] lg:left-[30px] z-10">
              <Image
                src="/logo.png"
                alt="Vedas Hashtag"
                width={500}
                height={500}
                className="z-10 absolute "
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
            <div className="absolute lg:top-[-50px] md:top-[-40px] w-[300px] md:w-[350px] lg:w-[506px]  ">
              <Image
                src={"/ImageHolder.png"}
                alt="Vedas Hashtag"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
