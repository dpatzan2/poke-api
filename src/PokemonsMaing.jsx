import React, { useEffect, useState } from 'react'
import { PokemonCard } from './components/PokemonCard';
import { useFetch } from './hooks/useFetch';

export const PokemonsMaing = () => {

    const [pokemnos, setPokemnos] = useState([]);

    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon`);

    console.log(data)

    useEffect(() => {
        setPokemnos(...pokemnos, data)
        console.log(data)
    }, [])
    

    return (
        <>
            <h1>Pokemons</h1>
            <hr />
            {
                pokemnos.map((pokemon, index) => {
                    <PokemonCard />;
                })
            }
        </>
    )
}
