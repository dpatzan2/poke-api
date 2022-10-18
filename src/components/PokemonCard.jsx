import React from "react";
import { Link, useNavigate } from "react-router-dom";



export const PokemonCard = ({ pokemons }) => {
  const navigate = useNavigate();
  const navegar = (id) => {
    navigate(`/about/${id}`);
  }
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3 principal">
        {pokemons.map((poke, index) => (
          <div class="container">
            <div class="row row-cols-3">
              <div class="col-12 mt-4">
                <div
                  className="col animate__animated animate__bounce "
                  key={index}
                >
                  <div className="card container">
                    <div className="row no-gutters">
                      <div className="col-md-4 col-12 ">
                        <img
                          src={poke.sprites?.front_default}
                          alt={poke.name}
                          className="card-img"
                        />
                      </div>
                      <div className="col-md-8 col-12">
                        <div className="car-body">
                          <h5 className="card-title">{poke.name}</h5>
                          <p className="card-text">
                            <small className="text-muted">
                              <b>Habilidades:</b>
                            </small>
                          </p>
                          {poke.abilities?.map((abilities, index2) => (
                            <>
                            <div className="centrar-listas">
                            <ul>
                                <li className="card-text" key={index2}>
                                  {abilities.ability.name}
                                </li>
                              </ul>
                            </div>
                              
                            </>
                          ))}
                          <button  class="learn-more">
                            <span class="circle" aria-hidden="true">
                              <span class="icon arrow"></span>
                            </span>
                            <span class="button-text" onClick={() => navegar(poke.id)}><Link className="texto_button" to={``}>Read more</Link></span>
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
