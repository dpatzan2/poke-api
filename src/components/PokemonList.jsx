import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import LoadingPokemon from './LoadingPokemon';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon");


    const { pokemons, isLoading } = useFetch(url);

    console.log(pokemons.data?.next)

    const nextPage = (urlNext) => {
        console.log(urlNext)
        setURL(urlNext);
        console.log(url)
    }


    return (
        <>

        {
            isLoading
            ? <LoadingPokemon />
            : <PokemonCard pokemons={pokemons}/>
        }
        <button onClick={() => nextPage(pokemons.data?.next)}>Go next</button>
        </>
    )
}
