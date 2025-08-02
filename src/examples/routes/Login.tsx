import { FormEvent, InputHTMLAttributes, useCallback } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  selectAuthStatus,
  selectIsAuth,
  userActions,
} from '~/examples/domains/userSlice';
import { useActionCreators, useAppSelector } from '~/hooks';

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="text" {...props} />;
}

export function LoginPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const actions = useActionCreators(userActions);
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectAuthStatus) === 'loading';

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      if (event) {
        actions.login();
      }
    },
    [actions],
  );

  if (isAuth) {
    return <Navigate to={from} replace />;
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextInput name="username" />
        <button type="submit">{isLoading ? 'loading...' : 'Login'}</button>
      </form>
    </section>
  );
}
