import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonsMaing } from './PokemonsMaing';
import { BrowserRouter } from "react-router-dom";
import './styles.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PokemonsMaing />
    </React.StrictMode>
  </BrowserRouter>
);
