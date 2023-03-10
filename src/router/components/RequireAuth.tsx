import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '~/hooks';
import { selectIsAuth } from '~/examples/domains/userSlice';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
