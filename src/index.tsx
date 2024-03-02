import { Global } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { enableMapSet } from 'immer';
import { globalStyles } from '~/css/global';
import { router } from './router';
import { createConfig } from './sentry-config';
import { store } from './store';

const { SENTRY_DSN } = process.env;

if (SENTRY_DSN) {
  Sentry.init(createConfig(SENTRY_DSN));
}

enableMapSet();

let container = document.getElementById('app');

if (!container) {
  container = document.createElement('div');
  container.id = 'app';
  document.body.prepend(container);
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
