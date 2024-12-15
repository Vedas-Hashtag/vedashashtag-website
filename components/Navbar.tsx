/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { links } from "@/app/data/links";
import MobileNavbar from "./MobileNavbar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  // State to track scroll position
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`border-gray-200 min-w-screen   top-0 z-50 relative w-full ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md sticky border-b"
          : "bg-white "
      }`}
      id="navbar"
    >
      {/* {!scrolled && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      )} */}
      <MaxWidthWrapper className="py-3 z-2 relative">
        <div className="flex items-center justify-between">
          <div className="w-[90px]">
            <Link href="/" title="Home" aria-label="Home">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={100}
                height={100}
                className=" "
              />
            </Link>
          </div>
          <div className="aspect-square h-full lg:hidden flex">
            <MobileNavbar />
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-4 font-medium text-accent-background">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "scroll-smooth"
                    )}
                    title={link.name}
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
