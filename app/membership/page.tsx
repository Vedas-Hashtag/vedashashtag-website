import { Membership } from "@/components/Membership";

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership | Vedas Hashtag",
  description: "This is the membership page of Vedas Hashtag.",
};

const page = () => {
  return (
    <>
      <section className=" min-w-screen">
        <Membership />
      </section>
    </>
  );
};

export default page;
