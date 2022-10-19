import { useState } from "react";
import "./App.css";
import Evolutions from "./components/pokemon/evolutions/Evolutions";
import MainPokemon from "./components/pokemon/MainPokemon";
import Logo from "./components/ui/logo/Logo";
import Navbar from "./components/ui/navbar/Navbar";
import * as config from "./config";
// import SearchBar from "./components/ui/searchbar/SearchBar";

function App() {
  const [mainPokemon, setMainPokemon] = useState(config.initPoke);
  // const set
  const updatePoke = async (searchedName) => {
    console.log(searchedName);
    const fetchedPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchedName.toLowerCase()}`
    )
      .then((i) => i.json())
      .then((i) => {
        console.log(i);
        setMainPokemon(i);
      });
  };
  return (
    <>
      <Navbar main={mainPokemon} queryPoke={updatePoke} />
      <MainPokemon stats={mainPokemon.stats} main={mainPokemon} />
      {/* <Evolutions evolveOne={config.evolveFromOne} /> */}
    </>
  );
}

export default App;
