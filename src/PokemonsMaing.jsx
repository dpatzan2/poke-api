import React from 'react'
import { PokemonList } from './components/PokemonList'
import { Routes, Route, Navigate } from "react-router-dom";
import { PokemonById } from './components/PokemonById';
import { Navbar } from './components/Navbar';
import { SearchPokemon } from './components/SearchPokemon';

export const PokemonsMaing = () => {

    

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/poke-api" />} />
          <Route path="/poke-api" element={<PokemonList />} />
          <Route path="about/:id" element={<PokemonById />} />
          <Route path="search" element={<SearchPokemon />} />
        </Routes>
      </>
    );
}
