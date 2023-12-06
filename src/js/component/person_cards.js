import React, { useContext, useEffect } from "react";
import swlogo from "../../img/starwar-logo-white.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/demo.css";
import { Context } from "../store/appContext";

export const Character_Cards = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="container">
      <div className="row flex-row flex-nowrap">
        {store.characters.map((character, index) => (
          <div key={index} className="col">
            <div className="card">
              <div>
                <img src={swlogo} className="card-img-top" />
                <h3 className="card-title text-center p-3">
                  {" "}
                  {character.name}{" "}
                </h3>
                <div className="card-body">
                  <p className="card-text m-1">
                    Gender: {character.gender} <br />
                    Hair Color: {character.hair_color} <br />
                    Eye Color:{character.eye_color} <br />
                    Height: {character.height}
                  </p>
                </div>
                <div className="card-btns text-center p-2 m-3">
                  <a href="#" className="btn btn-primary btn-lg">
                    Learn More
                  </a>{" "}
                  <span />
                  <a href="#" className="btn btn-danger btn-lg">
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
