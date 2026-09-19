import { useState } from 'react';
import { useFavoritos } from '../context/FavoritosContext';

export const serviciosData = [
  {
    id: 1,
    nombre: 'Reprogramación ECU Stg 1',
    categoria: 'Rendimiento',
    precio: '$350',
    descripcion: 'Optimización de mapa de motor para aumentar potencia y torque.',
    imagen: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    nombre: 'Mantenimiento Carbocerámico',
    categoria: 'Mantenimiento',
    precio: '$200',
    descripcion: 'Servicio especializado y revisión de discos y pastillas de alto desempeño.',
    imagen: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    nombre: 'Suspensión Coilover',
    categoria: 'Modificación',
    precio: '$500',
    descripcion: 'Ajuste de altura y dureza para mejor agarre en pista y calle.',
    imagen: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    nombre: 'Sistema de Escape Deportivo',
    categoria: 'Rendimiento',
    precio: '$450',
    descripcion: 'Fabricación e instalación en acero inoxidable con alto flujo.',
    imagen: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    nombre: 'Instalación Kit de Turbo',
    categoria: 'Rendimiento',
    precio: '$1,200',
    descripcion: 'Montaje de turbocargador, intercooler y tubería de presión.',
    imagen: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    nombre: 'Alineación y Balanceo Láser',
    categoria: 'Mantenimiento',
    precio: '$80',
    descripcion: 'Ajuste de geometría de suspensión computarizada para alta velocidad.',
    imagen: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    nombre: 'Wrap Personalizado Vinilo',
    categoria: 'Estética',
    precio: '$850',
    descripcion: 'Forrado completo en vinilo mate, brillante o satinado de alta calidad.',
    imagen: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    nombre: 'Tratamiento Cerámico de Pintura',
    categoria: 'Estética',
    precio: '$300',
    descripcion: 'Protección de carrocería con sellado nanocerámico y acabado espejo.',
    imagen: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    nombre: 'Servicio de Escáner y Diagnóstico',
    categoria: 'Mantenimiento',
    precio: '$60',
    descripcion: 'Lectura de códigos de falla y diagnóstico integral de módulos electrónicos.',
    imagen: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
  },
];

export const Catalogo = () => {
  const [busqueda, setBusqueda] = useState('');
  const { agregarFavorito, favoritos } = useFavoritos();

  const serviciosFiltrados = serviciosData.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo de Servicios</h2>
      
      <input
        type="text"
        placeholder="Buscar servicio..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-search"
      />

      <div className="grid-servicios">
        {serviciosFiltrados.map((servicio) => {
          const esFavorito = favoritos.some((fav) => fav.id === servicio.id);
          return (
            <div key={servicio.id} className="card-servicio">
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="img-servicio"
              />
              <div>
                <h3>{servicio.nombre}</h3>
                <p>Categoría: {servicio.categoria}</p>
                <p>Precio: {servicio.precio}</p>
                <p style={{ fontSize: '14px', color: '#aaa', marginTop: '8px' }}>{servicio.descripcion}</p>
              </div>
              <button
                onClick={() => agregarFavorito(servicio)}
                disabled={esFavorito}
                className="btn-fav"
              >
                {esFavorito ? 'Agregado ❤️' : 'Agregar a Favoritos ♡'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogo;