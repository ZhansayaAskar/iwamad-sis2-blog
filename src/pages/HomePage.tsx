import { Link } from 'react-router';

export function HomePage() {
  return (
    <section style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Welcome to My Personal Blog</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#4b5563' }}>
        Hi, I'm Zhansaya! I'm a student at KBTU. Here I share my everyday life, 
        my struggles with studies, fun memories with friends, and my love for traveling 
        and cars. This is my space to capture the moments that matter.
      </p>
      <div style={{ marginTop: '24px' }}>
        <Link to="/posts" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Browse all posts →
        </Link>
      </div>
    </section>
  );
}