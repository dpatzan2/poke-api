import { useEffect, useState } from "react";
import { getPokemonBydId, GetPokemons } from "../helpers/GetPokemons";

export const useFetch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [poke, setPoke] = useState([]);

    const [url, setURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=30offset=0`);

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

    const setPage = async (url) => {
      await setURL(url);
    }

    useEffect(() => {
      setIsLoading(true);
      getPokemons();
    }, [url]);

    return {
        pokemons,
        data,
        isLoading,
        poke,
        setPage
    }
}