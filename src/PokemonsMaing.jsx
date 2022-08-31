import React from 'react'
import { PokemonList } from './components/PokemonList'
import { Routes, Route, Link } from "react-router-dom";
import { PokemonById } from './components/PokemonById';
import { Navbar } from './components/Navbar';

export const PokemonsMaing = () => {

    

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="about/:id" element={<PokemonById />} />
        </Routes>
      </>
    );
}
