import MainCard from "./MainCard";
import classes from "./MainPokemon.module.css";
const MainPokemon = (props) => {
  const pokemon = props.main;
  console.log(pokemon.name);
  return (
    <div>
      <MainCard main={pokemon} />
    </div>
  );
};
export default MainPokemon;
