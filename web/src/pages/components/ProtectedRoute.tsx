import { Navigate, Outlet } from 'react-router';
import useAuth from '@/hooks/useAuth';
export default function ProtectedRoute() {
  const { currentUser, isLoading } = useAuth();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
}
