import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import { navLinks } from "@/app/data/links";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <HiMenu className="text-4xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            {/* Navigation links list */}
            <ul className="flex items-center gap-4 font-medium text-accent-background flex-col">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* Link component for navigation */}
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "scroll-smooth"
                    )}
                    onClick={handleClose} // Close the sheet on click
                    title={link.name}
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
