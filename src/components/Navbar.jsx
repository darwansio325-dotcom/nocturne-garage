import { NavLink } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

export const Navbar = () => {
  const { favoritos } = useFavoritos();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Nocturne <span>Garage</span></h2>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalogo" className={({ isActive }) => (isActive ? 'active' : '')}>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Favoritos
            {favoritos.length > 0 && (
              <span className="fav-badge">{favoritos.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};