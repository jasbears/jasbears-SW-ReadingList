import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../../img/starwar-logo-black.png";
import "../../styles/demo.css";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img id="navlogob" src={navlogo} />
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button id="navbtn" className="btn btn-primary">
              Favorite
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
