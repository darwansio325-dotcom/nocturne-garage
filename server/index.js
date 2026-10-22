require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// 1. Servir de forma pública las imágenes guardadas en la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 2. Configuración de Multer para guardar las imágenes en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const MONGO_URI = "mongodb+srv://darwinandrade24:darwin1230@cluster0.nbhhxwb.mongodb.net/nocturne_garage?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado exitosamente a MongoDB'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Esquema del Producto
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, default: '' },
}, { timestamps: true });

const Producto = mongoose.model('Producto', ProductoSchema);

// Rutas de la API

// GET: Obtener todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
});

// POST: Guardar producto con soporte para subir archivo de imagen (Multer) o URL
app.post('/api/productos', upload.single('imagen'), async (req, res) => {
  try {
    const { nombre, precio } = req.body;
    
    // Si viene un archivo local usa la ruta de uploads, de lo contrario revisa si enviaron una URL en req.body
    let imagenPath = req.body.imagen || '';
    if (req.file) {
      imagenPath = `/uploads/${req.file.filename}`;
    }

    const nuevoProducto = new Producto({
      nombre,
      precio,
      imagen: imagenPath
    });

    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar el producto' });
  }
});

// DELETE: Eliminar producto
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