import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getPokemonByName } from '../helpers/GetPokemons';
import { useForm } from '../hooks/useForm';
import { PokemonCardSearch } from './PokemonCardSearch';

export const SearchPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [error, setError] = useState(''); 

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const getPokemon = async () => {
        await getPokemonByName(q).then((response) => {
            setPokemon(response.data);
            setError('');
        }).catch((err) => {
            setPokemon([]);
            setError(err)
        });
    }

    const showSearch = (q.length === 0) ;
    const showError = (q.length > 0  ) && error != '';

    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmit  = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`)
    }

    useEffect(() => {
        getPokemon();
    }, [q])
    

    return (
        <>
            <h1 className="center letra-title">Search a pokemon</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                <h4>Searching</h4>
                <hr />
                <form action="" onSubmit={onSearchSubmit}>
                    <input type="text" placeholder="Search a pokemon" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange}/>
                    <button className="btn btn-outline-primary mt-1">Search</button>
                </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />
                {/* {
                    (q === '')
                        ?<div className="alert alert-primary">Search a hero</div>
                        : (hereos.length === 0) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                } */}
                
                <div className="alert alert-primary" style={{display: showSearch ? "" : 'none'}}>Search a pokemon</div>
                <div className="alert alert-danger" style={{display: showError ? '' : "none"}}>No hay ningun pokemon con los datos ingresados <b>{q}</b> no es un pokemon, prueba ingresando un nombre mas especifico</div>
                
            
                {
                (!showError && !showSearch)
                ? <PokemonCardSearch poke={pokemon} />
                : ''
                }
            </div>
            </div>
        </>
    )
}
