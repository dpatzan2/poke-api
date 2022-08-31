import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

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
              <a href="#">Inicio</a>
            </Link>
            
          </ul>
        </nav>
      </header>
    );
}
