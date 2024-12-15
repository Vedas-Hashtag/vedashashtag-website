import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-[15rem] w-[14rem]" />
      ))}
    </div>
  );
};

export default GallerySkeleton;
