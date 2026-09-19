import { Link } from 'react-router-dom';
import { serviciosData } from './Catalogo';

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Bienvenido a Nocturne Garage</h1>
          <p>Especialistas en potenciación, tuning y mantenimiento de alto rendimiento.</p>
          <Link to="/catalogo" className="btn-primary">
            Ver Todos los Servicios
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Nuestros Servicios Destacados</h2>
        <div className="grid-servicios" style={{ marginTop: '20px' }}>
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="card-servicio">
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="img-servicio"
              />
              <h3>{servicio.nombre}</h3>
              <p>Categoría: {servicio.categoria}</p>
              <p>Precio: {servicio.precio}</p>
              <p style={{ fontSize: '14px', color: '#aaa', marginTop: '8px' }}>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;