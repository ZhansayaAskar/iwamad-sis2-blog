import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>Sorry, this page doesn't exist.</p>
      <Link to="/">← Back to Home</Link>
    </section>
  );
}