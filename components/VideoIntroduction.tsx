"use client";
import { FC } from "react";
import ReactPlayer from "react-player";

interface VideoIntroductionProps {}

const VideoIntroduction: FC<VideoIntroductionProps> = ({}) => {
  return (
    <div>
      {" "}
      <div className="w-4/5 aspect-video mx-auto relative -top-10 md:-top-20 md:w-4/5">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=WlfXDBu6AOg&list=RDWlfXDBu6AOg&start_radio=1"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
};

export default VideoIntroduction;
