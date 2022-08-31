import { useEffect, useState } from "react";
import { getPokemonBydId, GetPokemons } from "../helpers/GetPokemons";

export const useFetch = ({url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'}) => {

    const [pokemons, setPokemons] = useState([]);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [poke, setPoke] = useState([]);

    const getPokemons = async () => {
      const {pokemon, data} = await GetPokemons(url);
      setPokemons(pokemon);
      setData(data);
      setIsLoading(false);
    };

    const getPokemonsById = async (id) => {
      const pokemon = await getPokemonBydId(id);
      setPoke(pokemon);
    }

    useEffect(() => {
      setIsLoading(true);
      getPokemons();
    }, [url]);

    return {
        pokemons,
        data,
        isLoading,
        poke
    }
}