import { useEffect, useState } from "react";
import { GetPokemons } from "../helpers/GetPokemons";

export const useFetch = ({url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'}) => {

  console.log( 'usefETCH' , url)

    const [pokemons, setPokemons] = useState([]);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonURL, setPokemonURL] = useState([])

    const getPokemons = async () => {
      const {pokemon, data} = await GetPokemons(url);
      setPokemons(pokemon);
      setData(data);
      setIsLoading(false);
    };

    useEffect(() => {
      setIsLoading(true);
      getPokemons();
    }, [url]);

    return {
        pokemons,
        data,
        isLoading,
    }
}