import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/home.css";
import swlogo from "../../img/starwar-logo-white.png";

export const Person = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(id);
    actions.getPerson(`https://swapi.dev/api/people/${id}/`);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1> {!!store.person && store.person.name} </h1>
        </div>
        <img src={swlogo} className="card-img-top" />
        <div className="card-body text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="card-text text-primary">
            <li>Gender: {!!store.person && store.person.gender}</li>
            <li>Hair Color: {!!store.person && store.person.hair_color} </li>
            <li>Eye Color:{!!store.person && store.person.eye_color}</li>
            <li>Height: {!!store.person && store.person.height}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
