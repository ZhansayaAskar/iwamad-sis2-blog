import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <section>
      <h1>Log in</h1>
      <p>This is a fake login for demo purposes. Click the button to log in.</p>
      <Button onClick={handleLogin}>Log in</Button>
    </section>
  );
}