/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SectionDescription, SectionTitle } from "./Holder";
interface HackthonHypeProps {}

/**
 * `HackthonHype` is a functional component that renders a section promoting the Vedas Hackathon event.
 * It includes a title, description, and a link to learn more about the event.
 * The component also displays two background images for visual enhancement.
 *
 * @component
 * @param {HackthonHypeProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const HackthonHype: FC<HackthonHypeProps> = ({}) => {
  return (
    <div className="md:h-[22rem] h-[16rem] bg-primary md:p-16 p-8 relative overflow-hidden">
      <MaxWidthWrapper className="text-center flex justify-evenly items-center flex-col h-full z-20">
        <SectionTitle variants="secondary">vedas hackathon</SectionTitle>
        <SectionDescription className="capitalize lg:text-[60px] md:text-[40px] text-2xl font-medium leading-normal">
          The biggest hashtag event of the year
        </SectionDescription>
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Learn More <ArrowRight className="inline" />
        </Link>
      </MaxWidthWrapper>
      <div className=" md:h-[20rem] h-[12rem] bottom-[1rem] md:left-0 left-[-5rem] aspect-square flex justify-center items-center absolute z-0 opacity-60 ">
        <Image
          src="/Torus Half-standing.png"
          alt="Square Matrix"
          width={500}
          height={500}
          className=" object-contain "
        />
      </div>
      <div className=" md:h-[20rem] h-[12rem] bottom-[0rem] left-[70%] aspect-square flex justify-center items-center absolute z-0 opacity-60 ">
        <Image
          src="/Torus Standing.png"
          alt="Square Matrix"
          width={500}
          height={500}
          className=" object-contain "
        />
      </div>
    </div>
  );
};

export default HackthonHype;
