import React from "react";
import "./Time.css";
import Leftup from "../left-up/Leftup";
import Leftdown from "../left-down/Leftdown";

export default function Time() {
  return (
    <div className="time-sec">
      <Leftup />
      <Leftdown />
    </div>
  );
}
