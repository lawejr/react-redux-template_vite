import { createBrowserRouter } from 'react-router-dom';
import { urls } from '~/router/urls';
import {
  IndexPage,
  PostsListPage,
  PostDetailsPage,
  PostCreatePage,
  LoginPage,
} from '~/examples/routes';
import { BaseLayout } from '~/examples/components/BaseLayout';
import { RequireAuth } from '~/router/components/RequireAuth';

function makePrivate(element: JSX.Element) {
  return <RequireAuth>{element}</RequireAuth>;
}

export const router = createBrowserRouter([
  {
    path: urls.ROOT,
    element: <BaseLayout />,
    children: [
      { index: true, element: <PostsListPage /> },
      { path: urls.STATES_EXAMPLE, element: <IndexPage /> },
      {
        path: urls.POST_DETAILS(),
        element: <PostDetailsPage />,
      },
      {
        path: urls.POST_CREATE,
        element: makePrivate(<PostCreatePage />),
      },
    ],
  },
  {
    path: urls.LOGIN,
    element: <LoginPage />,
  },
]);
