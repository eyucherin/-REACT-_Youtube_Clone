import React from "react";
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const {
    state: { videoInfo },
  } = useLocation();

  console.log(videoInfo);

  return (
    <div className="mt-6">
      <div className="mx-[5vw] w-[60%]">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="500"
          src={`http://www.youtube.com/embed/${videoInfo.id}`}
          frameBorder="0"
        ></iframe>
        <div className = "text-xl font-bold mt-3">
          {videoInfo.title}
        </div>
        <div className = "text-sm font-bold mt-3">
          {videoInfo.channel}
        </div>
      </div>
    </div>
  );
}
