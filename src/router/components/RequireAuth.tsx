import { PropsWithChildren } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '~/hooks';
import { selectIsAuth } from '~/examples/domains/userSlice';

export function RequireAuth({ children }: PropsWithChildren) {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
