import { useState } from "react";
import "./App.css";
import MainPokemon from "./components/pokemon/MainPokemon";
import Logo from "./components/ui/logo/Logo";
import Navbar from "./components/ui/navbar/Navbar";
import config from "./config";
// import SearchBar from "./components/ui/searchbar/SearchBar";

function App() {
  const [mainPokemon, setMainPokemon] = useState(config);

  return (
    <>
      <Navbar />
      <MainPokemon main={mainPokemon} />
    </>
  );
}

export default App;
