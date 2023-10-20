import React, { useEffect, useState } from "react";
import "./News.css";

export default function News() {
  const [user, setUser] = useState({});

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=652b42e465834c3ab415c09ab95379d1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let allData = data.articles;
        setUser(allData[1]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let date = new Date().toLocaleDateString().replaceAll("/", "-");

  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // let news_Data = user.content;
  // let clean_data = news_Data.replaceAll("[+2940 chars]", "");

  return (
    <div className="news-sec">
      <div className="news-img">
        <img src={user.urlToImage} alt="data" />
        <div className="news-title">
          {user.title}
          <p className="cur-time">
            {date}
            <span>|</span>
            {time}
          </p>
        </div>
      </div>
      <div className="news">{user.content}</div>
    </div>
  );
}
