import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
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
    
    
    const onReturn = () => {
      console.log('asdasd')
        navigate(-1)
    }
    if (isLoading) {
        return <LoadingPokemon />
    }else{
        return (
          <>
            <div className="row mt-5 animate__animated animate__fadeInLeft ">
              <div className="col-md-4 col-12 responsive">
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
              <div className="col-md-8 col 12 responsive">
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

                <button className="botones back" onClick={onReturn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>
                </button>
              </div>
            </div>
          </>
        );
    }
}
