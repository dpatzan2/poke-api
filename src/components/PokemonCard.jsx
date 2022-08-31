import React from 'react'

export const PokemonCard = ({pokemons}) => {
    return (
      <>
      <div className="row rows-cols-1 row-cols-md-3 g-3" >
        {pokemons.map((poke, index) => (
                <div className="col animate__animated animate__bounce" key={index}>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 ">
                            <img src={poke.sprites?.front_default} alt={poke.name} className="card-img"/>
                        </div>
                        <div className="col-8">
                            <div className="car-body">
                                <h5 className="card-title">{poke.name}</h5>
                                <p  className="card-text"><small className="text-muted"><b>Habilidades:</b></small></p>
                                {
                                  poke.abilities?.map((abilities, index2) =>(
                                    <>
                                    <ul>
                                      <li className="card-text" key={index2}>{abilities.ability.name}</li>
                                    </ul>
                                    </>
                                  ))
                                }
                                
                                

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
  