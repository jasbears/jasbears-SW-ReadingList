import React from "react";
import "../../styles/demo.css";
import { Character_Cards } from "../component/person_cards";
import { Planet_Cards } from "../component/planet_cards";

export const Home = () => (
  <div className="container">
    <h1 className="text-danger text-center">Characters</h1>
    <Character_Cards />
    <br />
    <br />
    <h1 className="text-danger text-center">Planets</h1>
    <Planet_Cards />
  </div>
);
