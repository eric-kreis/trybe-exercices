import Pokemon from "./Pokemon";
import pokemons from "../data";

function PokeDex() {
  return pokemons.map((pokemon) => 
    <Pokemon key={ pokemon.id } pokemon={ pokemon }/>);
}

export default PokeDex;