import React, { useContext, useRef } from "react";
import { AppContext } from "../context";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Form.css";

const Form = () => {
  const { setSearchMovie } = useContext(AppContext);
  const inputRef = useRef();

  const handleSubmit = (e) => e.preventDefault();

  const searchItems = () => setSearchMovie(inputRef.current.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search movies"
        ref={inputRef}
        onChange={searchItems}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Form;
