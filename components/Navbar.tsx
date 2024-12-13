"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
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

  const links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Become a member",
      href: "/membership",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

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
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={100}
                height={100}
                className=" "
              />
            </Link>
          </div>
          <div className="aspect-square h-full md:hidden flex">
            <HiMenu className="text-4xl" />
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center gap-4 font-medium text-accent-background">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={buttonVariants({ variant: "ghost" })}
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
