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
      <nav className="navbar navbar-light bg-warning mb-3">
        <Link to="/">
          <img id="navlogob" src={navlogo} />
        </Link>
        <div className="ml-auto m-4">
          <div className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Favorites <i class="bi bi-star-fill"></i>
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {store.favorites.map((item, index) => (
                <li key={index} className="mx-2 mb-3">
                  {item.name}
                  <i
                    class="bi bi-trash3"
                    onClick={() => actions.filterFavorites.map(item)}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
