import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center z-40 backdrop-blur-sm absolute inset-0">
      <div className="border-t-2 border-t-primary  animate-spin rounded-full h-12 w-12"></div>
    </div>
  );
};

export default Loading;
