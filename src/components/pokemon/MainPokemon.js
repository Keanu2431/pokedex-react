import MainCard from "./MainCard";
import classes from "./MainPokemon.module.css";
const MainPokemon = (props) => {
  const pokemon = props.main;

  return (
    <div>
      <MainCard stats={props.stats} main={pokemon} />
    </div>
  );
};
export default MainPokemon;
