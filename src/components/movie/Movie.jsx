import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movie.css";
import Moviecard from "../moviecard/Moviecard";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const api_key = "be433bf2a716a7a300f256b120491805";
  const categories = JSON.parse(localStorage.getItem("categoryDetails"));
  const numMoviesToFetch = 4;

  useEffect(() => {
    const fetchMoviesByCategory = async (category) => {
      let moviesToFetch = numMoviesToFetch;
      let fetchedMovies = [];

      while (moviesToFetch > 0) {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${category}`;
        try {
          const response = await axios.get(url);
          const data = response.data;
          // console.log(data);

          fetchedMovies = fetchedMovies.concat(data.results);
          moviesToFetch -= data.results.length;

          if (data.results.length === 0) {
            break;
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
          break;
        }
      }

      return fetchedMovies.slice(0, numMoviesToFetch);
    };

    const fetchAllMovies = async () => {
      const allMovies = [];
      for (const category of categories) {
        const moviesInCategory = await fetchMoviesByCategory(category);
        allMovies.push(...moviesInCategory);
      }
      setMovies(allMovies);
    };

    fetchAllMovies();
  }, [api_key, categories, numMoviesToFetch]);

  function gotoPrevious() {
    navigate("/info");
  }

  return (
    <div className="movie-container">
      <div className="image-container">
        <img src="img/title.png" alt="title" className="title-img" />
        <img
          src="img/circulerProfile.png"
          alt="profile"
          className="profile-img"
          onClick={gotoPrevious}
        />
      </div>
      <p className="msg">Entertainment according to your choice</p>
      <ul className="card-container">
        {movies.map((movie) => (
          <Moviecard key={movie.title} movieObj={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
