/* eslint-disable @typescript-eslint/no-empty-object-type */

"use client";
import { FC, Suspense } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Loading from "./Loading";

interface VideoIntroductionProps {}

const VideoIntroduction: FC<VideoIntroductionProps> = ({}) => {
  return (
    <div className="w-4/5 aspect-video mx-auto relative">
      <div className="absolute -top-10 md:-top-60 w-full aspect-video">
        <Suspense fallback={<Loading />}>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=UvqdUkqK5g0"
            width="100%"
            height="100%"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default VideoIntroduction;
