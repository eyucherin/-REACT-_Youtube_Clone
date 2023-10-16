import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`data/popular.json`);
      let data = await response.json();
      await setInfo(data.items);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-6">
      <div className="flex flex-wrap">
        {info.map((item) => {
          if (item?.id) {
            return (
              <VideoCard key={item?.id}
                title={item?.snippet?.title}
                thumbnails={item?.snippet?.thumbnails?.medium?.url}
                channel={item?.snippet?.channelTitle}
                time={item?.snippet?.publishedAt}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
