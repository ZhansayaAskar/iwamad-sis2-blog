import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow max-w-4xl w-full mx-auto p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}