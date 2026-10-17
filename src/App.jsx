import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RutaProtegida } from './components/RutaProtegida';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ruta Pública */}
          <Route path="/" element={<Login />} />

          {/* Rutas Protegidas */}
          <Route element={<RutaProtegida />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;