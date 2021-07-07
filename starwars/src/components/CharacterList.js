import React from "react";
import "./StarWars.css";
import Character from "./Character";

function CharacterList(props) {
  return (
    <div className="characterList">
      {props.characters.map(character => (
        <Character character={character} key={character.created} />
      ))}
    </div>
  );
}
export default CharacterList;
