import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../img/starwar-logo-black.png";
import "../../styles/demo.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {}, []);

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img id="navlogob" src={navlogo} />
        </Link>
        <div className="ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link
              dropdown-toggle"
              href="/"
              id="favnavbtn"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Favorites
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};
