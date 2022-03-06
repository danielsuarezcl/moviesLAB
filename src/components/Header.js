import React from "react"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/"><span role="img" aria-label="sheep">🎬 🎞 </span> Seguidor de películas</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Películas no vistas</Link>
            </li>

            <li>
              <Link to="/watched">Películas vistas</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
              <span role="img" aria-label="sheep">🔍</span> Buscar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
