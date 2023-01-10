import { InputHTMLAttributes, useCallback } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Form as FinalForm, Field, FieldRenderProps } from 'react-final-form';
import { useAppDispatch, useAppSelector } from '~/hooks';
import {
  login,
  selectAuthStatus,
  selectIsAuth,
} from '~/examples/domains/userSlice';

interface FormValues {
  username: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldRenderProps<string, any>;

function TextInput({ input, ...rest }: InputProps) {
  return <input type="text" {...input} {...rest} />;
}

export function LoginPage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectAuthStatus) === 'loading';

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      if (values.username) {
        dispatch(login());
      }
    },
    [dispatch],
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
