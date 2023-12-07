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
                <h3 className="card-title text-center p-1">
                  {" "}
                  {character.name}{" "}
                </h3>
                <div className="card-body">
                  <ul className="card-text">
                    <li>Gender: {character.gender}</li>
                    <li>Hair Color: {character.hair_color} </li>
                    <li>Eye Color:{character.eye_color}</li>
                    <li>Height: {character.height} cm</li>
                  </ul>
                </div>
                <div className="card-btns text-center p-2 m-3">
                  <Link to={"/characters/" + character.url.match(/\d+/)[0]}>
                    <a href="#" className="btn btn-warning btn-lg">
                      Learn More
                    </a>
                  </Link>{" "}
                  <span />
                  <a
                    href="#"
                    className="btn btn-danger btn-lg"
                    onClick={() => actions.addFavorite(character)}
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
