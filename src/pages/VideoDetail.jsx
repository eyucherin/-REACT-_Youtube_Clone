import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    state: { videoInfo },
  } = useLocation();

  console.log(videoInfo)


  return (
    <div className="mt-6">
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${videoInfo.id}`}
        frameBorder = "0"

      ></iframe>
    </div>
  );
}
