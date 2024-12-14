/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { FC } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { galleryImages } from "@/app/data/galleryImages";
import Link from "next/link";
interface GallerySectionProps {}

const GallerySection: FC<GallerySectionProps> = ({}) => {
  return (
    <section className="min-h-[20rem] py-10 bg-background">
      <MaxWidthWrapper className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-muted-foreground text-lg font-normal uppercase">
          Our Gallery
        </h1>
        <p className="font-semibold text-accent-background text-3xl text-center">
          Here are some of our photos. Visit{" "}
          <Link
            href="/gallery"
            className="text-primary hover:text-primary/90 hover:underline transition-all "
          >
            Gallery
          </Link>{" "}
          to see more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={400}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-10">
          <Gallery
            widths={[500, 1000, 1600]}
            ratios={[2.2, 4, 6, 8]}
            images={galleryImages}
            lastRowBehavior="match-previous"
            // overlay={(i) => <div style={overlayStyle}>{overlays[i]}</div>}
          />
        </div> */}
      </MaxWidthWrapper>
    </section>
  );
};

export default GallerySection;
