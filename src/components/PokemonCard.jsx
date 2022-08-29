import React from 'react'

export const PokemonCard = ({pokemons}) => {
  console.log(pokemons)
    return (
      <>
      <div className="row rows-cols-1 row-cols-md-3 g-3" >
        {pokemons.pokemon.map((poke, index) => (
                <div className="col animate__animated animate__bounce" key={index}>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 ">
                            <img src={poke.sprites?.front_default} alt={poke.name} className="card-img"/>
                        </div>
                        <div className="col-8">
                            <div className="car-body">
                                <h5 className="card-title">{poke.name}</h5>
                                <p className="card-text">asdasd</p>
                                <p  className="card-text"><small className="text-muted">asdasd</small></p>

                                {/* <Link to={`/hero/${id}`}>
                                    More
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
        </div>
      </>
    );
}
  