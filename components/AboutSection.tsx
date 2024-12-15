/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
interface AboutUsProps {}

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <section
      id="about"
      className="grid place-items-center min-h-[15rem] relative -top-10"
    >
      <MaxWidthWrapper className="px-4 mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center space-y-6 z-20 relative">
          <h1 className="text-lg font-normal mb-4 uppercase text-muted-foreground">
            Who are we
          </h1>
          <p className="font-semibold text-accent-background text-3xl text-center">
            Hashtag is a student community made by students, for students, to
            invoke a sense of coding culture and networking within us!
          </p>
          <Link
            href="/about"
            className={`bg-primary text-white px-4 py-2 rounded-md mt-4 w-[fit-content] flex items-center gap-2 group ${buttonVariants(
              { variant: "default" }
            )}`}
          >
            Become a Member{" "}
            <ArrowRight className="group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
        <div className="grid inset-0 absolute h-full z-0 overflow-hidden">
          <Image
            src="/Oval1.png"
            alt="ring-background"
            width={500}
            height={500}
            className="h-[14rem] object-contain left-0 top-0 absolute opacity-50"
          />
          <Image
            src="/Oval2.png"
            alt="ring-background"
            width={500}
            height={500}
            className="h-[7rem] object-contain left-[30%] top-[50%] absolute opacity-70 "
          />
          <Image
            src="/Oval3.png"
            alt="ring-background"
            width={500}
            height={500}
            className="h-[17rem] object-contain right-[0%] top-[50%] absolute opacity-70 "
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;