import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const API_ENDPOINT = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchMovie, setSearchMovie] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}s=${searchMovie}`);
        setMovies(response.data.Search);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchMovie]);

  return (
    <AppContext.Provider value={{ movies, setSearchMovie, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};
