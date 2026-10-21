import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLikes } from '../context/LikesContext';

export function Header() {
  const { isLoggedIn, logout } = useAuth();
  const { likes } = useLikes();
  const totalLikes = Object.values(likes).reduce((sum, count) => sum + count, 0);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <span style={{ marginLeft: 'auto' }}>♥ {totalLikes}</span>

        <button className="btn btn--secondary" onClick={handleAuthClick}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </nav>
    </header>
  );
}