
export const GetPokemons = async (url) => {
  console.log('getPokemons', url)
   let pokemon= [];
  const response = await fetch(url);
  const data  = await response.json();
  console.log(data)
  for (let i = 0; i < data.results.length; i++) {
    const dataPokemon= await fetch(data.results[i].url);
    const pokemonURL = await dataPokemon.json();
    //console.log('POKEMONURL', pokemonURL)
    //pokemon.shift()
    pokemon.push(pokemonURL);
    console.log(pokemon);
    //console.log(data)
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

  console.log(data)

  return data;
}
