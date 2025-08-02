import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsAuth } from '~/examples/domains/userSlice';
import { useAppSelector } from '~/hooks';

export function RequireAuth({ children }: PropsWithChildren) {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
