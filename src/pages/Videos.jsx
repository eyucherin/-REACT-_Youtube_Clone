import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/videos/${text}`);
        setText("");
    }
  return (
    <div>
      Videos
      <form>
        <input type = "text" placeholder="video id: " value = {text} onChange = {handleChange}></input>
        <button type = "submit" onClick = {handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
