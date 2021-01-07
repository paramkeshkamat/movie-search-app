import React from "react";
import Form from "./Form";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/">
          <h1>Movie Search App</h1>
        </Link>
        {location.pathname === "/" ? (
          <Form />
        ) : (
          <Link to="/" className="go-home">
            <KeyboardBackspaceIcon /> Home Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
