import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { getPokemonBydId } from '../helpers/GetPokemons';
import LoadingPokemon from './LoadingPokemon';

export const PokemonById = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [poke, setPoke] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getPokemonById = async() => {
        const pokemon = await getPokemonBydId(id);
        setPoke(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
      getPokemonById()
    }, [])
    
    

    console.log(poke, isLoading)

    const onReturn = () => {
        navigate(-1)
    }
    if (isLoading) {
        return <LoadingPokemon />
    }else{
        return (
          <>
            <div className="row mt-5 animate__animated animate__fadeInLeft ">
              <div className="col-4">
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={poke.sprites.front_default}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src={poke.sprites.back_default}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-large"
                      src={poke.sprites.front_shiny}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-large"
                      src={poke.sprites.back_shiny}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-8 ">
                <h3 className="center tamaño">{poke.name}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Tipo pokemon: </b>
                    {poke.types.map((types, i) => (
                      <>{types.type.name}, </>
                    ))}
                  </li>
                  <li className="list-group-item">
                    <b>Habilidades: </b>
                    {poke.abilities?.map((abilities, index2) => (
                      <>  {abilities.ability.name}, </>
                    ))}
                  </li>
                  <li className="list-group-item">
                    <b>Movimientos: </b>{poke.moves.map((moves, i) => (
                        <>{moves.move.name}, </>
                    ))}
                  </li>
                </ul>

                <br />

                <button className="botones" onClick={onReturn}>
                  Back
                </button>
              </div>
            </div>
          </>
        );
    }
}
