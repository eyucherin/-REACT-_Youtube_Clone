import React, { useEffect, useState } from "react";
import { calculateDays } from "../functions";
import { useNavigate } from "react-router-dom";

export default function VideoSlice(videoInfo) {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTime(calculateDays(videoInfo.time));
  }, []);

  let clickCard = (e) =>{
    navigate(`/videos/watch/${videoInfo.eTag}`,{state:{videoInfo}})
  }

  return (
    <div className = "flex justify-center h-1/4 cursor-pointer" onClick ={clickCard}>
    <div className="flex w-[1280px] sm:min-w-[600px] my-2 sm:my-4">
      <img
        src={videoInfo.thumbnails}
        alt="img"
        className="object-cover rounded-xl w-1/3 sm:w-1/2 md:w-1/4"
      />
      <div className = "mx-4">
        <div>
          <div className = "font-bold text-[2.2vw] sm:text-lg">{videoInfo.title}</div>
        </div>

        <div className = "flex text-[1.8vw] sm:text-base">
          <div>{videoInfo.channel}</div>
          <div className = "mx-2">|</div>
          <div>{time}</div>
        </div>

        <div className = "text-[1.5vw] sm:text-base">{videoInfo.description}</div>
      </div>
    </div>
    </div>
  );
}
