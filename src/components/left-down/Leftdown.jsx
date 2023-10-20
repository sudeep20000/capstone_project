import React, { useState } from "react";
import "./Leftdown.css";

export default function Leftdown() {
  const [hours, setHours] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  function addHour() {
    let temp = Number(hours) + 1;
    let num = String(temp);
    setHours(num.padStart(2, "0"));
  }

  function removeHour() {
    if (Number(hours) <= 0) return;
    let temp = Number(hours) - 1;
    let num = String(temp);
    setHours(num.padStart(2, "0"));
  }

  function addMinute() {
    let temp = Number(minute) + 1;
    let num = String(temp);
    setMinute(num.padStart(2, "0"));
  }

  function removeMinute() {
    if (Number(minute) <= 0) return;
    let temp = Number(minute) - 1;
    let num = String(temp);
    setMinute(num.padStart(2, "0"));
  }

  function addSecond() {
    if (Number(second) >= 60) return;
    let temp = Number(second) + 1;
    let num = String(temp);
    setSecond(num.padStart(2, "0"));
  }

  function removeSecond() {
    if (Number(second) <= 0) return;
    let temp = Number(second) - 1;
    let num = String(temp);
    setSecond(num.padStart(2, "0"));
  }

  return (
    <div className="left-down">
      <div className="watch">
        <div className="outer-circle"></div>
      </div>
      <div className="timer">
        <div className="title">Hours</div>
        <div></div>
        <div className="title">Minutes</div>
        <div></div>
        <div className="title">Seconds</div>
        <div className="uparrow" onClick={addHour}>
          <img src="img/uparrow.png" alt="uparrow" />
        </div>
        <div></div>
        <div className="uparrow" onClick={addMinute}>
          <img src="img/uparrow.png" alt="uparrow" />
        </div>
        <div></div>
        <div className="uparrow" onClick={addSecond}>
          <img src="img/uparrow.png" alt="uparrow" />
        </div>
        <div className="hours">{hours}</div>
        <div className="colon">
          <img src="img/colon.png" alt="colon" />
        </div>
        <div className="minute">{minute}</div>
        <div className="colon">
          <img src="img/colon.png" alt="colon" />
        </div>
        <div className="second">{second}</div>
        <div className="downarrow" onClick={removeHour}>
          <img src="img/downarrow.png" alt="downarrow" />
        </div>
        <div></div>
        <div className="downarrow" onClick={removeMinute}>
          <img src="img/downarrow.png" alt="downarrow" />
        </div>
        <div></div>
        <div className="downarrow" onClick={removeSecond}>
          <img src="img/downarrow.png" alt="downarrow" />
        </div>
        <div className="btn-container">
          <button className="btn">Start</button>
        </div>
      </div>
    </div>
  );
}
