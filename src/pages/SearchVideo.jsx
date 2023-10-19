import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoSlice from "../components/VideoSlice";

export default function SearchVideo() {
  let { keyword } = useParams();
  let [search, setSearch] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(
        `/data/${keyword ? "search" : "popular"}.json`
      );
      let data = await response.json();
      setSearch(data?.items);
    };
    fetchData();
  }, [keyword]);

  return (
    <div>
      SearchVideo {keyword}
      {search.map((item) => {
        if (item?.id) {
          return (
            <VideoSlice
              id={item?.id?.videoId}
              title={item?.snippet?.title}
              thumbnails={item?.snippet?.thumbnails?.medium?.url}
              channel={item?.snippet?.channelTitle}
              time={item?.snippet?.publishedAt}
              description = {item?.snippet?.description}
              eTag = {item?.etag}
            />
          );
        }
      })}
    </div>
  );
}
