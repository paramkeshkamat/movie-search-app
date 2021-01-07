import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const Error = () => {
  return (
    <div className="error">
      <ErrorOutlineIcon />
      <h1>No results found</h1>
      <p>Sorry, we couldn't find any results</p>
    </div>
  );
};

export default Error;
