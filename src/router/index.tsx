import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '~/examples/UIKit/BaseLayout';
import {
  IndexPage,
  LoginPage,
  PostCreatePage,
  PostDetailsPage,
  PostsListPage,
} from '~/examples/routes';
import { RequireAuth } from '~/router/components/RequireAuth';
import { ReactNode } from 'react';
import { urls } from '~/router/urls';

function makePrivate(element: ReactNode) {
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
