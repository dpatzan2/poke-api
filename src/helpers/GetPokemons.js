
export const GetPokemons = async (url) => {
   let pokemon= [{}];
  const response = await fetch(url);
  const data  = await response.json();
  for (let i = 0; i < data.results.length; i++) {
    const dataPokemon= await fetch(data.results[i].url);
    const pokemonURL = await dataPokemon.json();
    //pokemon.shift()
    pokemon.push(pokemonURL);
    //console.log(pokemon);
  } 

  return {
    pokemon,
    data
};
};
