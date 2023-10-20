import React from "react";
import "./Leftup.css";
import { useState } from "react";

function Profile() {
  const data = localStorage.getItem("formData");
  const info = localStorage.getItem("categoryDetails");
  const parseData = JSON.parse(data);
  const parseInfo = JSON.parse(info);

  return (
    <div className="profile">
      <img src="img/profile.png" alt="profile" />
      <div className="user-details">
        <p className="name">{parseData[0].name}</p>
        <p className="email">{parseData[0].email}</p>
        <p className="user-name">{parseData[0].userName}</p>
        <div className="all-categories">
          <ul>
            {parseInfo.map((info) => (
              <Info category={info} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Info({ category }) {
  return <li className="list">{category}</li>;
}

function Note() {
  const [note, setNote] = useState(
    localStorage.getItem("note") ||
      localStorage.setItem(
        "note",
        "This is how i am going to learn MERN Stack in next 3 months."
      )
  );
  function addNote(e) {
    setNote(e.target.value);
    localStorage.setItem("note", note);
  }

  return (
    <div className="note">
      <p>All notes</p>
      <div className="note-container">
        <textarea
          cols={32}
          rows={13}
          value={note}
          onChange={addNote}
        ></textarea>
      </div>
    </div>
  );
}

function Weather() {
  const [icon, setIcon] = useState("img/cloud.png");

  let date = new Date().toLocaleDateString().replaceAll("/", "-");

  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let api_key = "8dba33a0f2bb8366a65e60aeeb1501b9";
  let city = "Kalyani";
  const fetchData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const type = document.getElementsByClassName("type");
    const unit = document.getElementsByClassName("unit");
    const press = document.getElementsByClassName("press");
    const speed = document.getElementsByClassName("speed");
    const humidity = document.getElementsByClassName("humidity");

    type[0].innerHTML = data.weather[0].description;
    unit[0].innerHTML = Math.floor(data.main.temp) + "℃";
    press[0].innerHTML = data.main.pressure + " mbar";
    speed[0].innerHTML = data.wind.speed + " km/h";
    humidity[0].innerHTML = data.main.humidity + "%";

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
      setIcon("img/clear.png");
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
      setIcon("img/cloud.png");
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
      setIcon("img/drizzle.png");
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
      setIcon("img/drizzle.png");
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
      setIcon("img/rain.png");
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
      setIcon("img/rain.png");
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
      setIcon("img/snow.png");
    else setIcon("img/clear.png");
  };
  fetchData();

  return (
    <div className="weather">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="weather-info">
        <div className="weather-type">
          <img src={icon} alt={icon} />
          <div className="type"></div>
        </div>
        <div className="temparature">
          <div className="unit"></div>
          <div className="p-sec">
            <img src="img/pressure.png" alt="pressure" />
            <div className="p-container">
              <p className="press"></p>
              <p>pressure</p>
            </div>
          </div>
        </div>
        <div className="wind-speed">
          <div className="speed-sec">
            <img src="img/wind.png" alt="wind" />
            <div className="w-container">
              <p className="speed"></p>
              <p>Wind</p>
            </div>
          </div>
          <div className="humidity-sec">
            <img src="img/humidity.png" alt="humidity" />
            <div className="h-container">
              <p className="humidity"></p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Leftup() {
  return (
    <div className="left-up">
      <div className="left-up-left">
        <Profile />
        <Weather />
      </div>
      <div className="left-up-right">
        <Note />
      </div>
    </div>
  );
}
