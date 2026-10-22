import { Link } from 'react-router';

export function HomePage() {
  return (
    <section>
      <h1>Welcome to my blog</h1>
      <p>
        Hi, I'm Zhansaya — a 3rd year IT Management student at KBTU.
        This is a small blog built with React, TypeScript and React Router.
      </p>
      <p>
        <Link to="/posts">Browse all posts →</Link>
      </p>
    </section>
  );
}