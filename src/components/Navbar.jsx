import React from 'react';
import { Link} from "react-router-dom";

export const Navbar = () => {
    return (
      <header id="Datos">
        <a id="Datos-personal">
          <span className="nombre">Pokedex</span>
          <span className="datos-personales">Cartful solutions</span>
        </a>

        <nav>
          <ul>
            <Link className="link" to="/">
              <a className="a">Inicio</a>
            </Link>
            <Link className="link" to="/search">
              <a className="a">Buscar</a>
            </Link>
          </ul>
        </nav>
      </header>
    );
}
