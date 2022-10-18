import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export const PokemonCardSearch = ({poke}) => {
  const navigate = useNavigate();
  const navegar = (id) => {
    navigate(`/about/${id}`);
  }
    return (
        <>
            <div className="col animate__animated animate__bounce " key={poke.id}>
              <div className="card container">
                <div className="row no-gutters">
                  <div className="col-md-4 col-12">
                    <img
                      src={poke.sprites?.front_default}
                      alt={poke.name}
                      className="card-img"
                    />
                  </div>
                  <div className="col-md-8 col-12">
                    <div className="car-body">
                      <h5 className="card-title letra-title">{poke.name}</h5>
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

<button  class="learn-more" onClick={() => navegar(poke.id)}>
                            <span class="circle" aria-hidden="true">
                              <span class="icon arrow"></span>
                            </span>
                            <span class="button-text" ><a className='texto_button'>Read more</a></span>
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        </>
    )
}
