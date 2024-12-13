import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

import Image from "next/image";
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section
      className="relative bg-cover bg-center  text-center text-white  top-0 w-full bg-primary md:my-0 py-10 md:py-0"
      //   style={{ backgroundImage: "url('/background.webp')" }}
    >
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src="/background.png"
          alt="vedashashtag"
          width={500}
          height={500}
          className="w-full h-full object-cover blur-md"
        />
      </div>

      <div className="absolute z-0 h-[22rem] md:top-[20rem] md:left-10 left-0top-[12rem] blur-sm opacity-40">
        <Image
          src="/ring-background.png"
          alt="Ring background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-0 h-[10rem] md:top-[25rem] md:left-[30%] left-0 top-[12rem]  opacity-40 md:flex hidden">
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
        <div className="relative z-10  mx-auto flex md:flex-row flex-col items-center md:justify-between justify-center min-h-[44em] w-full space-y-6 md:space-y-0">
          <div className=" flex flex-col items-center justify-center w-full md:w-1/2 ">
            <h1 className="text-5xl font-bold md:text-7xl drop-shadow-lg">
              Dive into the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">
                Vedas Experience
              </span>
            </h1>
            <p className="text-2xl mt-4 font-medium">
              Bootcamps, Workshops, Events and More!
            </p>
            <Link
              href="#membership"
              className="mt-6 bg-accent px-6 py-3 text-lg rounded-full hover:bg-accent-hover"
            >
              Join Now
            </Link>
          </div>
          <div className="flex relative justify-center md:w-1/2 w-full ">
            <div className="z-10 relative w-[21rem] aspect-square  border-4 border-accent-primary rounded-full grid place-items-center">
              <div className="rounded-full border-4 border-accent-primary aspect-square object-contain relative flex justify-center items-center bg-accent-foreground h-[17rem] my-8 ">
                <Image
                  src="/logo.png"
                  alt="vedashashtag"
                  width={500}
                  height={500}
                  className="z-10 relative "
                  priority
                />
                <Image
                  src="/abstract line.png"
                  alt="vedashashtag"
                  width={500}
                  height={500}
                  className="z-0 absolute brightness-50 opacity-25 blur-sm rounded-full "
                />
                {/* <Image
                src="/grid-background.png"
                alt="vedashashtag"
                width={500}
                height={500}
                className="z-0 absolute brightness-50 opacity-75 blur-[4px] rounded-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
