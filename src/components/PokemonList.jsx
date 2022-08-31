import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import LoadingPokemon from './LoadingPokemon';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const [url, setURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20offset=0`);
    const [pokemons2, setpokemons2] = useState([])

    
    const { pokemons, data, isLoading } = useFetch({ url });

    console.log(data)

    //console.log(pokemons)

   

    // console.log(pokemons.data?.next)

    const nextPage = (urlNext) => {
        setURL(urlNext);
    }

    const previousPage = (urlPrevious) => {
        setURL(urlPrevious);
    }


    return (
        <>
        
        <div className="center">
            {
            data.previous
            ?<button onClick={() => previousPage(data.previous)}>previous page</button>
            : ''
        }
        {
            data.next
            ? <button onClick={() => nextPage(data.next)}>Next page</button>
            : ''
        }
        </div>
        

        <hr />

        {
            isLoading
            ? <LoadingPokemon />
            : <PokemonCard pokemons={pokemons}/>
        }
        <hr />
        
        <div className="center">
            {
            data.previous
            ?<button onClick={() => previousPage(data.previous)}>previous page</button>
            : ''
        }
        {
            data.next
            ? <button onClick={() => nextPage(data.next)}>Next page</button>
            : ''
        }
        </div>

        
        </>
    )
}
