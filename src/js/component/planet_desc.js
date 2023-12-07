import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/demo.css";
import swlogodes from "../../img/starwar-logo-white.png";

export const Planet = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(id);
    actions.getPlanet(`https://swapi.dev/api/planets/${id}/`);
  }, []);

  return (
    <div className="container">
      <div className="card" id="card-desc">
        <div className="card-header text-center">
          <h1> {!!store.planet && store.planet.name} </h1>
        </div>
        <img src={swlogodes} className="card-img-top-des" id="swlogodes" />
        <div className="card-body text-center">
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <ul className="card-text text-primary text-uppercase">
            <li>Climate: {!!store.planet && store.planet.climate}</li>
            <li>Terrain: {!!store.planet && store.planet.terrain} </li>
            <li>Population:{!!store.planet && store.planet.population}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
