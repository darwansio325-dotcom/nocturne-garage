import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from '../pages/Login';
import '@testing-library/jest-dom';

describe('Pruebas Unitarias - Pantalla de Login', () => {

  test('1. Debe renderizar los campos de correo y contraseña', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('2. Debe renderizar el botón de ingresar', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    const submitButton = screen.getByRole('button', { name: /ingresar/i });
    expect(submitButton).toBeInTheDocument();
  });

});