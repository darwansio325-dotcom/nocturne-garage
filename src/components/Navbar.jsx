import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null; // Si no hay usuario logueado, no muestra la barra

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#1a1a1a', color: '#fff' }}>
      <h2>🚗 Nocturne Garage</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/catalogo" style={{ color: '#fff', textDecoration: 'none' }}>Catálogo</Link>
        <span>Bienvenido, <strong>{user.email}</strong></span>
        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;