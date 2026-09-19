import { useFavoritos } from '../context/FavoritosContext';

export const Favoritos = () => {
  const { favoritos, eliminarFavorito } = useFavoritos();

  return (
    <div>
      <h2>Mis Servicios Favoritos</h2>
      {favoritos.length === 0 ? (
        <p style={{ marginTop: '20px' }}>No has guardado ningún servicio en favoritos aún.</p>
      ) : (
        <div className="grid-servicios">
          {favoritos.map((fav) => (
            <div key={fav.id} className="card-servicio">
              {fav.imagen && (
                <img
                  src={fav.imagen}
                  alt={fav.nombre}
                  className="img-servicio"
                />
              )}
              <div>
                <h3>{fav.nombre}</h3>
                <p>Precio: {fav.precio}</p>
              </div>
              <button onClick={() => eliminarFavorito(fav.id)} className="btn-remove">
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;