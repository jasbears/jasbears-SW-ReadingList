import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/home.css";

export const Person = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(id);
    actions.getPerson("https://swapi.dev/api/people/${:id}/");
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1> {!!store.person && store.person.name} </h1>
        </div>
        <div className="card-body text-center">
          <ul className="card-text">
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
