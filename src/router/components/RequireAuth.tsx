import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '~src/hooks';
import { selectIsAuth } from '~src/examples/domains/userSlice';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
