import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { enableAllPlugins } from 'immer';
import { GlobalStyles } from '~/css/global';
import { router } from './router';
import { createConfig } from './sentry-config';
import { store } from './store';

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
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
