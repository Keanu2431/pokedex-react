import Card from "../ui/card/Card.js";
import * as config from "../../config";

import classes from "./MainCard.module.css";
import Type from "./Type.js";
import Stats from "./stats/Stats.js";
import { useEffect, useState } from "react";
import TypesList from "./TypesList.js";
const MainCard = (props) => {
  // const flavor = config.flavor.flavor_text_entries[0];
  const pokemon = props.main;
  let type = pokemon.types[0]["type"]["name"];
  let background = "water";

  const [flavor, setFlavor] = useState(config.flavor.flavor_text_entries[0]);
  const newFlavor = async (pokemon) => {
    const flavorData = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`
    )
      .then((i) => i.json())
      .then((i) => setFlavor(i.flavor_text_entries[0]));
  };
  useEffect(() => {
    newFlavor(pokemon);
  }, [pokemon]);
  // newFlavor(pokemon);
  //   const desc
  let pokeId = String(pokemon.id);
  if (pokeId.length == 1) {
    pokeId = `00${pokeId}`;
  } else if (pokeId.length == 2) {
    pokeId = `0${pokeId}`;
  }
  if (type === "water") background = type;
  else if (type === "fire") background = type;
  else if (type === "grass") background = type;
  else if (type === "electric") background = type;
  else if (type === "steel") background = type;
  else if (type === "ghost") background = type;
  else if (type === "dragon") background = type;
  else if (type === "dark") background = type;
  else if (type === "rock") background = type;
  else if (type === "psychic") background = type;
  else if (type === "fairy") background = type;
  else if (type === "bug") background = type;
  else if (type === "flying") background = type;
  else if (type === "poison") background = type;
  else if (type === "ground") background = type;
  else if (type === "fighting") background = type;
  else if (type === "ice") background = type;
  else if (type === "normal") background = type;

  return (
    <div className={classes[background]}>
      <div className={classes.mainCard}>
        <div className={classes.title}>
          <TypesList main={pokemon} types={pokemon.types} />
          {/* <Type main={pokemon} types={pokemon.types} /> */}
          <h1>{`#${pokeId} ${pokemon.name}`}</h1>
        </div>
        <img
          className={classes.mainImage}
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
        <br></br>
        <Stats stats={props.stats} />
        <h4 className={classes.description}>{flavor["flavor_text"]}</h4>
      </div>
    </div>
  );
};
export default MainCard;
