import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`data/mock_data1.json`);
      let data = await response.json();
      await setInfo(data.items);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  return (
    <div>
      Videos
      <form>
        <input
          type="text"
          placeholder="video id: "
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <ul>
          {info.map((item) => {
            console.log(item?.id?.videoId)
            if (item?.id?.videoId){
              return <li key={item?.id?.videoId}>{item?.snippet?.title}</li>;
            }
            return <li key={item?.id?.channelId}>{item?.snippet?.title}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}
