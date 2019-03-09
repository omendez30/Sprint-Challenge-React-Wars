import React from "react";
import "./StarWars.css";
const Character = props => {
  return (
    <div className="character">
      <div className="character-name">{props.character.name}</div>
      <hr />
      <div className="character-data">Gender: {props.character.gender}</div>
      <div className="character-data">
        Birth Year: {props.character.birth_year}
      </div>
    </div>
  );
};
export default Character;
