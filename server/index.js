require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://darwinandrade24:darwin1230@cluster0.nbhhxwb.mongodb.net/nocturne_garage?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado exitosamente a MongoDB'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Esquema actualizado para incluir el campo 'imagen'
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, default: '' },
}, { timestamps: true });

const Producto = mongoose.model('Producto', ProductoSchema);

// Rutas de la API
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
});

app.post('/api/productos', async (req, res) => {
  try {
    const { nombre, precio, imagen } = req.body;
    const nuevoProducto = new Producto({ nombre, precio, imagen });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar el producto' });
  }
});

app.delete('/api/productos/:id', async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar producto' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));