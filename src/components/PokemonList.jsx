import React, {  useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import LoadingPokemon from './LoadingPokemon';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    
    
    const { pokemons, data, isLoading, setPage} = useFetch();


    //console.log(pokemons)



    // console.log(pokemons.data?.next)

    const nextPage = (urlNext) => {
      setPage(urlNext)
    }

    const previousPage = (urlPrevious) => {
      setPage(urlPrevious);
    }


    return (
      <>
        <br />

        <h1 className="center letra-title">Pokemons list</h1>

        <div className="center">
          {data.previous ? (
            <button
              className="botones"
              onClick={() => previousPage(data.previous)}
            >
              &#8249;
            </button>
          ) : (
            ""
          )}
          {data.next ? (
            <button className="botones" onClick={() => nextPage(data.next)}>
              &#8250;
            </button>
          ) : (
            ""
          )}
        </div>

   

        {isLoading ? <LoadingPokemon /> : <PokemonCard pokemons={pokemons} />}
  

        <div className="center">
          {data.previous ? (
            <button
              className="botones"
              onClick={() => previousPage(data.previous)}
            >
              &#8249;
            </button>
          ) : (
            ""
          )}
          {data.next ? (
            <button className="botones" onClick={() => nextPage(data.next)}>
              &#8250;
            </button>
          ) : (
            ""
          )}
        </div>
      </>
    );
}
