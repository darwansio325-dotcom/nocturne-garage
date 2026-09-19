import { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
const FavoritosContext = createContext();

// 2. Proveedor del contexto
export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Función para agregar un servicio a favoritos
  const agregarFavorito = (servicio) => {
    if (!favoritos.some((item) => item.id === servicio.id)) {
      setFavoritos([...favoritos, servicio]);
    }
  };

  // Función para eliminar de favoritos
  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter((item) => item.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useFavoritos = () => useContext(FavoritosContext);