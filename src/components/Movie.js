import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import "../styles/Movie.css";
import errorImage from "../errorImage.png";
import { API_ENDPOINT } from "../context";

const Movie = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      const response = await axios.get(`${API_ENDPOINT}i=${id}`);
      setMovieDetails(response.data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const {
    Poster,
    Title,
    imdbRating,
    Runtime,
    Year,
    Plot,
    Genre,
    Actors,
    Director,
    Production,
    Country,
  } = movieDetails;

  return (
    <div className="Movie">
      <div className="movie-poster">
        <img
          src={Poster === "N/A" ? errorImage : Poster}
          alt={Title}
          className={Poster === "N/A" ? "error-img" : null}
        />
      </div>
      <div className="movie-text">
        <h1>{Title}</h1>
        <p className="rating">
          {imdbRating} IMDB • {Runtime} • {Year}
        </p>
        <p className="plot">{Plot}</p>
        <p>
          <span>Genres: </span>
          {Genre}
        </p>
        <p>
          <span>Actors: </span>
          {Actors}
        </p>
        <p>
          <span>Director: </span>
          {Director}
        </p>
        <p>
          <span>Production: </span>
          {Production}
        </p>
        <p>
          <span>Countries: </span>
          {Country}
        </p>
      </div>
    </div>
  );
};

export default Movie;
