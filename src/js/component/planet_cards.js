import React, { useContext, useEffect } from "react";
import swlogo from "../../img/starwar-logo-white.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/demo.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planet_Cards = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container">
      <div className="row flex-row flex-nowrap">
        {store.planets.map((planet, index) => (
          <div key={index} className="col">
            <div className="card">
              <div>
                <img src={swlogo} className="card-img-top" />
                <h3 className="card-title text-center p-3"> {planet.name} </h3>
                <div className="card-body">
                  <p className="card-text m-1">
                    Climate: {planet.climate} <br />
                    Terrain: {planet.terrain} <br />
                    Population: {planet.population} <br />
                  </p>
                </div>
                <div className="card-btns text-center p-2 m-3">
                  <Link to={"/planets/" + planet.url.match(/\d+/)[0]}>
                    <a href="#" className="btn btn-warning btn-lg">
                      Learn More
                    </a>
                  </Link>{" "}
                  <span />
                  <a
                    href="#"
                    className="btn btn-danger btn-lg"
                    onClick={() => actions.addFavorite(planet)}
                  >
                    <i class="bi bi-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
