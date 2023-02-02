import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { enableAllPlugins } from 'immer';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Global } from '@emotion/react';
import { globalStyles } from '~/css/global';
import { createConfig } from './sentry-config';
import { store } from './store';
import { router } from './router';

const { SENTRY_DSN } = process.env;

if (SENTRY_DSN) {
  Sentry.init(createConfig(SENTRY_DSN));
}

enableAllPlugins();

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
