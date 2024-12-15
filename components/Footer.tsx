/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

import { ids, socialLinks, specialEvents } from "@/app/data/links";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <section
      id="footer"
      className="bg-primary py-10 relative   bottom-0 left-0"
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-accent-foreground">
          {/* Logo and Social Media */}
          <div className="flex flex-col  mr-auto space-y-4 md:space-y-0 w-full md:items-start items-center lg:justify-start ">
            <div className="relative h-[10rem] aspect-square grid place-items-center">
              <Image
                src="/logo.png"
                height={500}
                width={500}
                alt="Vedas Hashtag"
                className="object-cover object-center"
              />
            </div>
            <div className="flex space-x-4 w-full items-center justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {typeof social.Icon === "function" ? (
                    <social.Icon size={24} />
                  ) : (
                    social.Icon
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-bold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {ids.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h3 className="font-bold text-lg">Discord Servers!</h3>
              <ul className="space-y-2">
                {specialEvents.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p>Vedas Hashtag</p>
            <p>Jawalakhel, Lalitpur</p>
            <p>
              Email:{" "}
              <a href="mailto:hashtag@vedascollege.edu.np">
                hashtag@vedascollege.edu.np
              </a>
            </p>
            {/* <p>Phone: +977-1234567890</p> */}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white opacity-75">
          &copy; {new Date().getFullYear()} Vedas Hashtag. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
