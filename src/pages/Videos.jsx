import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import { useParams } from 'react-router-dom';

export default function Videos() {
  const [info, setInfo] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(
        `/data/${keyword ? "search" : "popular"}.json`
      );
      let data = await response.json();
      await setInfo(data.items);
    };
    fetchData();
  }, [keyword]);

  return (
    <div className="mt-6">
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      <div className="flex flex-wrap">
        {info.map((item) => {
          if (item?.id) {
            return (
              <VideoCard key={item?.id}
                id={item?.id}
                title={item?.snippet?.title}
                thumbnails={item?.snippet?.thumbnails?.medium?.url}
                channel={item?.snippet?.channelTitle}
                time={item?.snippet?.publishedAt}
                eTag = {item?.etag}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
