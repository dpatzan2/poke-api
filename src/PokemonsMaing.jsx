import React, { useEffect, useState } from 'react'
import { PokemonList } from './components/PokemonList'
import { useFetch } from './hooks/useFetch'

export const PokemonsMaing = () => {

    

    return (
        <>
            <h1>Pokemons</h1>
            <hr />
            <PokemonList />
        </>
    )
}
