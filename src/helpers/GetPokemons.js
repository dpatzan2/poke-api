import axios from "axios";

export const GetPokemons = async (url) => {
   let pokemon= [];
  const response = await fetch(url);
  const data  = await response.json();
  for (let i = 0; i < data.results.length; i++) {
    const dataPokemon= await fetch(data.results[i].url);
    const pokemonURL = await dataPokemon.json();
    pokemon.push(pokemonURL);
  } 

  return {
    pokemon,
    data
};
};

export const getPokemonBydId = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const getPokemonByName = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

  return axios.get(url)
}
