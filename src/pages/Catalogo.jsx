import { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [error, setError] = useState('');

  // Cargar productos al iniciar la vista (GET)
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos');
      setProductos(response.data);
      setError('');
    } catch (err) {
      console.error("Error al conectar con el backend:", err);
      setError("No se pudo conectar con el servidor backend.");
    }
  };

  // Crear un nuevo producto (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/productos', {
        nombre,
        precio: Number(precio)
      });
      setNombre('');
      setPrecio('');
      cargarProductos(); // Recargar la lista
    } catch (err) {
      console.error("Error al crear el producto:", err);
    }
  };

  // Eliminar un producto (DELETE)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/productos/${id}`);
      cargarProductos();
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      <h1>Catálogo de Servicios / Repuestos</h1>
      <p>Gestión conectada a MongoDB mediante Axios.</p>

      {error && <p style={{ color: 'orange', background: '#332200', padding: '10px' }}>{error}</p>}

      {/* Formulario de Escritura (POST) */}
      <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '15px', border: '1px solid #444', borderRadius: '6px', background: '#1a1a1a' }}>
        <h3>Agregar Nuevo Elemento</h3>
        <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Nombre del repuesto/servicio" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            style={{ padding: '8px', flex: 2 }}
            required 
          />
          <input 
            type="number" 
            placeholder="Precio" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            style={{ padding: '8px', flex: 1 }}
            required 
          />
          <button type="submit" style={{ padding: '8px 15px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
            Guardar
          </button>
        </div>
      </form>

      {/* Lista de Lectura (GET) */}
      <h3>Lista Actual en la Base de Datos</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productos.length === 0 ? (
          <p>No hay elementos registrados todavía.</p>
        ) : (
          productos.map((prod) => (
            <li key={prod._id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#222', padding: '12px', borderRadius: '4px' }}>
              <span><strong>{prod.nombre}</strong> - ${prod.precio}</span>
              <button onClick={() => handleDelete(prod._id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }}>
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Catalogo;