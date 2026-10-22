import { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagenFile, setImagenFile] = useState(null);
  const [error, setError] = useState('');

  const BACKEND_URL = 'http://localhost:5000';

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/productos`);
      setProductos(response.data);
      setError('');
    } catch (err) {
      console.error("Error al conectar con el backend:", err);
      setError("No se pudo conectar con el servidor backend.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    if (imagenFile) {
      formData.append('imagen', imagenFile);
    }

    try {
      await axios.post(`${BACKEND_URL}/api/productos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setNombre('');
      setPrecio('');
      setImagenFile(null);
      const fileInput = document.getElementById('fileInput');
      if (fileInput) fileInput.value = '';
      cargarProductos();
    } catch (err) {
      console.error("Error al crear el producto:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/productos/${id}`);
      cargarProductos();
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#07090e',
      backgroundImage: `
        radial-gradient(circle at 50% 0%, rgba(0, 230, 118, 0.15) 0%, transparent 60%),
        radial-gradient(circle at 85% 30%, rgba(0, 180, 216, 0.12) 0%, transparent 50%),
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
      padding: '40px 20px',
      color: '#fff',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Encabezado Futurista */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.6rem', 
            fontWeight: '900', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            margin: '0 0 10px 0',
            background: 'linear-gradient(90deg, #00e676, #00b0ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 15px rgba(0, 230, 118, 0.4))'
          }}>
            Catálogo Nocturne Garage
          </h1>
          <p style={{ color: '#8a99ad', fontSize: '1.05rem', margin: 0, letterSpacing: '1px' }}>
            Luces LED · Exploradoras · Sombra Custom · Lujos de Alto Rendimiento
          </p>
        </div>

        {error && (
          <div style={{ 
            color: '#ff5252', 
            background: 'rgba(255, 23, 68, 0.1)', 
            border: '1px solid #ff1744', 
            padding: '14px 20px', 
            borderRadius: '10px', 
            marginBottom: '30px', 
            textAlign: 'center',
            boxShadow: '0 0 15px rgba(255, 23, 68, 0.2)'
          }}>
            {error}
          </div>
        )}

        {/* Formulario Estilo Cyberpunk/Neon */}
        <form onSubmit={handleSubmit} style={{ 
          marginBottom: '50px', 
          padding: '28px', 
          border: '1px solid rgba(0, 230, 118, 0.3)', 
          borderRadius: '16px', 
          background: 'rgba(15, 20, 28, 0.85)', 
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 230, 118, 0.05)'
        }}>
          <h3 style={{ 
            margin: '0 0 22px 0', 
            fontSize: '1.3rem', 
            color: '#00e676', 
            textAlign: 'center', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            textShadow: '0 0 8px rgba(0, 230, 118, 0.6)'
          }}>
            + Agregar Elemento
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Nombre del repuesto/servicio (ej. Barra LED Curva)" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                style={{ 
                  padding: '14px 16px', 
                  flex: '2 1 260px', 
                  background: '#0a0d14', 
                  border: '1px solid #1e293b', 
                  borderRadius: '8px', 
                  color: '#fff', 
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
                required 
              />
              <input 
                type="number" 
                placeholder="Precio ($)" 
                value={precio} 
                onChange={(e) => setPrecio(e.target.value)} 
                style={{ 
                  padding: '14px 16px', 
                  flex: '1 1 130px', 
                  background: '#0a0d14', 
                  border: '1px solid #1e293b', 
                  borderRadius: '8px', 
                  color: '#fff', 
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
                required 
              />
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              background: '#0a0d14', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '1px solid #1e293b' 
            }}>
              <label style={{ fontSize: '14px', color: '#8a99ad', minWidth: '70px', fontWeight: 'bold' }}>Imagen:</label>
              <input 
                id="fileInput"
                type="file" 
                accept="image/*" 
                onChange={(e) => setImagenFile(e.target.files[0])} 
                style={{ color: '#cbd5e1', fontSize: '14px' }}
              />
            </div>

            <button type="submit" style={{ 
              padding: '16px', 
              background: 'linear-gradient(90deg, #00c853, #00b0ff)', 
              color: '#000', 
              border: 'none', 
              cursor: 'pointer', 
              borderRadius: '8px', 
              fontWeight: '800', 
              fontSize: '1rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 0 20px rgba(0, 200, 83, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              Guardar Producto
            </button>
          </div>
        </form>

        {/* Tarjetas Futuristas */}
        <h2 style={{ 
          fontSize: '1.6rem', 
          marginBottom: '25px', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingBottom: '12px',
          color: '#e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between'
        }}>
          <span>Inventario Activo</span>
          <span style={{ fontSize: '1rem', color: '#00e676', background: 'rgba(0, 230, 118, 0.1)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
            {productos.length} Ítems
          </span>
        </h2>

        {productos.length === 0 ? (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '40px' }}>No hay repuestos registrados en el sistema.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
            {productos.map((prod) => {
              const imagenUrl = prod.imagen?.startsWith('/uploads')
                ? `${BACKEND_URL}${prod.imagen}`
                : prod.imagen;

              return (
                <div key={prod._id} style={{ 
                  background: 'rgba(15, 23, 42, 0.75)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '14px', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justify: 'space-between', 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(8px)'
                }}>
                  
                  <div style={{ width: '100%', height: '190px', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                    {imagenUrl ? (
                      <img 
                        src={imagenUrl} 
                        alt={prod.nombre} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    ) : (
                      <span style={{ color: '#475569', fontSize: '0.85rem' }}>Sin Imagen</span>
                    )}
                  </div>

                  <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#f8fafc', fontWeight: '600', lineHeight: '1.4' }}>
                        {prod.nombre}
                      </h3>
                      <p style={{ fontSize: '1.35rem', color: '#00e676', fontWeight: '800', margin: '0 0 18px 0', textShadow: '0 0 10px rgba(0, 230, 118, 0.3)' }}>
                        ${prod.precio?.toLocaleString('es-CO')}
                      </p>
                    </div>

                    <button 
                      onClick={() => handleDelete(prod._id)} 
                      style={{ 
                        background: 'rgba(239, 68, 68, 0.15)', 
                        color: '#ef4444', 
                        border: '1px solid rgba(239, 68, 68, 0.4)', 
                        padding: '11px', 
                        cursor: 'pointer', 
                        borderRadius: '8px', 
                        fontWeight: '700', 
                        width: '100%',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Eliminar Ítem
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;