import React from "react";
import "./Moviecard.css";

export default function Moviecard({ movieObj }) {
  return (
    <li className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
        alt={movieObj.title}
      />
    </li>
  );
}
