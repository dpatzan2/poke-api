import { useEffect, useState } from "react";
import { getPokemonBydId, GetPokemons } from "../helpers/GetPokemons";

export const useFetch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [poke, setPoke] = useState([]);


    if(!localStorage.getItem('url')){
      localStorage.setItem('url', `https://pokeapi.co/api/v2/pokemon?limit=30offset=0`);
    }

    const [url, setURL] = useState(localStorage.getItem('url'));

    const getPokemons = async (urlPage) => {
      const {pokemon, data} = await GetPokemons(urlPage);
      setPokemons(pokemon);
      setData(data);
      setIsLoading(false);
    };

    const getPokemonsById = async (id) => {
      const pokemon = await getPokemonBydId(id);
      setPoke(pokemon);
    }

    const setPage = async (url) => {
      console.log('asd')
       localStorage.setItem('url', url);
      setIsLoading(true);
      getPokemons(url);
    }

    useEffect(() => {
      setIsLoading(true);
      getPokemons(url);
    }, [url]);

    return {
        pokemons,
        data,
        isLoading,
        poke,
        setPage
    }
}