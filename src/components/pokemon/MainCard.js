import Card from "../ui/card/Card.js";
import * as config from "../../config";

import classes from "./MainCard.module.css";
import Type from "./Type.js";
import Stats from "./stats/Stats.js";
const MainCard = (props) => {
  const flavor = config.flavor.flavor_text_entries[0];
  console.log(flavor);
  const pokemon = props.main;
  //   const desc
  let pokeId = String(pokemon.id);
  if (pokeId.length == 1) {
    pokeId = `00${pokeId}`;
  } else if (pokeId.length == 2) {
    pokeId = `0${pokeId}`;
  }
  return (
    <div className={classes.mainCard}>
      <div className={classes.title}>
        <Type types={pokemon.types} />
        <h1>{`#${pokeId} ${pokemon.name}`}</h1>
      </div>
      <img
        className={classes.mainImage}
        src={pokemon.sprites.other.home.front_default}
        alt={pokemon.name}
      />
      <br></br>
      <Stats></Stats>
      <h4 className={classes.description}>{flavor["flavor_text"]}</h4>
    </div>
  );
};
export default MainCard;
