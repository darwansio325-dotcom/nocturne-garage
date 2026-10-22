// server/seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://darwinandrade24:darwin1230@cluster0.nbhhxwb.mongodb.net/nocturne_garage?retryWrites=true&w=majority";

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, default: '' },
}, { timestamps: true });

const Producto = mongoose.model('Producto', ProductoSchema);

const productosSemilla = [
  {
    nombre: "Exploradoras LED Dual Color (Blanco / Amarillo Warm)",
    precio: 220000,
    imagen: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Barra LED Curva 42\" Tri-Row Lente Óptico 400W",
    precio: 380000,
    imagen: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Kit de Faros LED RGB Demon Eyes con App Control",
    precio: 290000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Kit de Luces Neón Underglow LED Subchasis RGB",
    precio: 210000,
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Exploradoras Tipo Ojo de Ángel LED High Beam 3\"",
    precio: 185000,
    imagen: "https://images.unsplash.com/photo-1600792580403-010e6a8d79b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Película de Seguridad Smoked / Sombra para Faros",
    precio: 95000,
    imagen: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Iluminación Ambiental Interior LED Neón de Fibra Óptica",
    precio: 160000,
    imagen: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Kit Bombillos LED Canbus H7 / H4 20.000 Lúmenes",
    precio: 175000,
    imagen: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Proyectores Bi-LED Mini H1 con Ojo de Demonio Rojo",
    precio: 340000,
    imagen: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Exploradoras Láser Spot Light para Ruta Extrema",
    precio: 310000,
    imagen: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Strobe Lights LED Rompebruma Estilo Escolta",
    precio: 140000,
    imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Cinta Neón Secuencial Direccional / DRL Blanco-Ámbar",
    precio: 125000,
    imagen: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Luz LED Proyectora de Puerta con Logo Personalizable",
    precio: 85000,
    imagen: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Módulo de Control Estroboscópico para Luz de Freno",
    precio: 65000,
    imagen: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80"
  },
  {
    nombre: "Servicio Instalación & Personalización de Faros Nocturne",
    precio: 250000,
    imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
  }
];

const sembrarBD = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado a MongoDB...');

    await Producto.deleteMany({});
    console.log('🗑️ Base de datos limpiada.');

    await Producto.insertMany(productosSemilla);
    console.log('🚀 ¡15 productos de Lujos, Exploradoras y Luces LED agregados con éxito!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error al sembrar datos:', error);
    process.exit(1);
  }
};

sembrarBD();