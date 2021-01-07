import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Movies.css";
import errorImage from "../errorImage.png";

const Movies = ({ movie }) => {
  const history = useHistory();
  const { imdbID, Poster, Title, Year } = movie;
  return (
    <div className="Movies" onClick={() => history.push(`/movies/${imdbID}`)}>
      <img src={Poster === "N/A" ? errorImage : Poster} alt={Title} />
      <p>{Title}</p>
      <p>{Year}</p>
    </div>
  );
};

export default Movies;
