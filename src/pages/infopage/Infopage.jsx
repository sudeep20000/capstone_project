import React from "react";
import { useNavigate } from "react-router-dom";
import Time from "../../components/timersection/Time";
import News from "../../components/newssection/News";

export default function Infopage() {
  const navigate = useNavigate();

  function goNext(e) {
    e.preventDefault();
    navigate("/movies");
  }

  return (
    <div className="info">
      <div className="info-container">
        <Time />
        <News />
      </div>
      <button className="browse" onClick={goNext}>
        Browse
      </button>
    </div>
  );
}
