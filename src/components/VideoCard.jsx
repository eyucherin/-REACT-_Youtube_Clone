import React, { useEffect, useState } from "react";
import { calculateDays } from "../functions";
import { useNavigate } from "react-router-dom";

export default function VideoCard(videoInfo) {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTime(calculateDays(videoInfo.time));
  }, []);

  let clickCard = (e) =>{
    navigate(`videos/watch/${videoInfo.eTag}`,{state:{videoInfo}})
    
  }
  return (
    <div className="w-[100vw] sm:w-[50vw] sm:h-[35vw] lg:w-[25vw] lg:h-[20vw] flex flex-col p-3 cursor-pointer" onClick ={clickCard}>
      <img
        src={videoInfo.thumbnails}
        alt="img"
        className="object-contain rounded-3xl"
      ></img>
      <div className="flex">
        <h1 className="font-bold text-sm">{videoInfo.title}</h1>
      </div>
      <div className="text-sm font-light">
        {videoInfo.channel} | {time}
      </div>
    </div>
  );
}
