import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2026 Nocturne Garage - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};