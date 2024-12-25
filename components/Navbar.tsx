/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/app/data/links";
import MobileNavbar from "./MobileNavbar";

// Define the props for the Navbar component
interface NavbarProps {}

// Navbar component
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

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`border-border min-w-screen top-0 z-50 relative w-full ${
        scrolled
          ? "bg-background/70 backdrop-blur-lg shadow-md sticky border-b"
          : "bg-background"
      }`}
      id="navbar"
    >
      {/* Optional overlay when not scrolled */}
      {/* {!scrolled && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      )} */}
      <MaxWidthWrapper className="py-3 z-2 relative">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="w-[200px]">
            <Link href="/" title="Home" aria-label="Home">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={100}
                height={100}
                className="bg-white rounded-full"
              />
            </Link>
          </div>
          {/* Navigation links and mobile menu */}
          <div className="flex justify-end w-full items-end">
            {/* Mobile Navbar */}
            <div className="aspect-square h-full lg:hidden flex">
              <MobileNavbar />
            </div>
            {/* Desktop Navbar */}
            <div className="hidden lg:flex">
              <ul className="flex items-center gap-4 font-medium text-accent-background flex-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "scroll-smooth uppercase"
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
          {/* Optional notification component */}
          {/* <div className="flex flex-row h-full w-fit ml-2 items-center justify-center">
            <Separator
              className="text-4xl text-primary h-[2rem] mr-2"
              orientation="vertical"
            />
            <NotificationComponent />
          </div> */}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
