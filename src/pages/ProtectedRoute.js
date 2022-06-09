import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  let location = useLocation();
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
