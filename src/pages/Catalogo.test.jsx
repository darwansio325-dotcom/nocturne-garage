import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Catalogo from './Catalogo';

// Simulamos axios para que la prueba no dependa del servidor backend activo
vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [] })),
    post: vi.fn(() => Promise.resolve({ data: {} })),
    delete: vi.fn(() => Promise.resolve({ data: {} }))
  }
}));

describe('Pruebas Unitarias del Catálogo', () => {
  it('Debe renderizar el título principal de Nocturne Garage', () => {
    render(<Catalogo />);
    const titulo = screen.getByText(/Catálogo Nocturne Garage/i);
    expect(titulo).toBeInTheDocument();
  });

  it('Debe renderizar el botón para guardar productos', () => {
    render(<Catalogo />);
    const botonGuardar = screen.getByRole('button', { name: /Guardar Producto/i });
    expect(botonGuardar).toBeInTheDocument();
  });
});