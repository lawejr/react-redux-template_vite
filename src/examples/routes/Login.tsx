import { InputHTMLAttributes, useCallback } from 'react';
import { Field, FieldRenderProps, Form as FinalForm } from 'react-final-form';
import { Navigate, useLocation } from 'react-router-dom';
import {
  selectAuthStatus,
  selectIsAuth,
  userActions,
} from '~/examples/domains/userSlice';
import { useActionCreators, useAppSelector } from '~/hooks';

interface FormValues {
  username: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldRenderProps<string, any>;

function TextInput({ input, ...rest }: InputProps) {
  return <input type="text" {...input} {...rest} />;
}

export function LoginPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const actions = useActionCreators(userActions);
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectAuthStatus) === 'loading';

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      if (values.username) {
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
      <FinalForm onSubmit={handleSubmit}>
        {({ handleSubmit: onSubmit, submitting, pristine }) => (
          <form onSubmit={onSubmit}>
            <Field<string>
              name="username"
              component={TextInput}
              placeholder="username"
            />
            <button type="submit" disabled={submitting || pristine}>
              {isLoading ? 'loading...' : 'Login'}
            </button>
          </form>
        )}
      </FinalForm>
    </section>
  );
}
