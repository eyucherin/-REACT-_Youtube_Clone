import React, { useEffect, useState } from "react";

export default function VideoCard(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const originalTimestamp = props.time;
    const timestampDate = new Date(originalTimestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - timestampDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const daysAgoString = `${daysDifference} days ago`;
    setTime(daysAgoString);
  }, []);
  return (
    <div className="w-[100vw] sm:w-[50vw] sm:h-[35vw] lg:w-[25vw] lg:h-[20vw] flex flex-col p-3">
      <img
        src={props.thumbnails}
        alt="img"
        className="object-contain rounded-3xl"
      ></img>
      <div className="flex">
        <h1 className="font-bold text-sm">{props.title}</h1>
      </div>
      <div className="text-sm font-light">
        {props.channel} | {time}
      </div>
    </div>
  );
}
