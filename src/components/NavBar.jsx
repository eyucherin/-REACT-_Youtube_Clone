import React from "react";
import logo from "../assets/youtube_logo.svg";
import menu from "../assets/white_menu_bar.svg";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";

export default function NavBar() {
  const { keyword } = useParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => setSearch(keyword || ''), [keyword]);

  let handleChange = (e) => {
    setSearch(e.target.value);
  };

  let submitForm = (e) => {
    e.preventDefault();
    navigate(`/videos/${search}`);
  };

  let handleMenuClick = (e) => {
    e.preventDefault();
    navigate(`/`);
  };

  return (
    <div className="h-[6vh] flex items-center justify-between">
      <div className="h-[6vh] flex items-center">
        <img src={menu} alt="menu" className="h-[80%] mx-3" />
        <button onClick={handleMenuClick} className="h-[6vh] flex items-center">
          <img src={logo} alt="logo" className="h-[80%]" />
          <div className="text-white font-bold">Youtube</div>
        </button>
      </div>

      <form
        className="w-[40%] flex border border-gray-500 rounded-lg"
        onSubmit={submitForm}
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-900  rounded-l-lg w-[100%] h-[50%] p-2 text-white"
          onChange={handleChange}
          value = {search}
        />
        <button type="submit" className="bg-gray-900 rounded-r-lg">
          <FiSearch
            className="bg-gray-500 p-1 rounded-r-lg text-white"
            size={37}
          />
        </button>
      </form>

      <div className></div>
    </div>
  );
}
