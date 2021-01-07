import React, { useContext } from "react";
import { AppContext } from "../context";
import Loading from "./Loading";
import Movies from "./Movies";
import Error from "./Error";

const Home = React.memo(() => {
  const { movies, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }
  if (!movies) {
    return <Error />;
  }
  return (
    <div className="Home">
      {movies.map((movie) => {
        return <Movies key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
});

export default Home;
