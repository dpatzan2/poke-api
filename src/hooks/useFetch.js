import { useEffect, useState } from "react";
import { GetPokemons } from "../helpers/GetPokemons";

export const useFetch = ({url = 'https://pokeapi.co/api/v2/pokemon'}) => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonURL, setPokemonURL] = useState([])

    const getPokemons = async () => {
      const newPokemon = await GetPokemons(url);
      setPokemons(newPokemon);
      //    console.log(newPokemon);
      setIsLoading(false);
    };

    useEffect(() => {
      getPokemons();
    }, []);

    return {
        pokemons,
        isLoading,
    }
}