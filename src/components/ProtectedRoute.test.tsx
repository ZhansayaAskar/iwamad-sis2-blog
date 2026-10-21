import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { describe, it, expect } from 'vitest';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

function Private() {
  return <div>Private content</div>;
}

function Login() {
  return <div>Login page</div>;
}

describe('ProtectedRoute', () => {
  it('redirects to /login when the user is not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/private']}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/private"
              element={
                <ProtectedRoute>
                  <Private />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login page')).toBeInTheDocument();
    expect(screen.queryByText('Private content')).not.toBeInTheDocument();
  });
});