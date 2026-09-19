import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritosProvider } from './context/FavoritosContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { Favoritos } from './pages/Favoritos';
import './App.css';

function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;