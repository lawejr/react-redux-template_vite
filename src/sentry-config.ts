import * as Sentry from '@sentry/react';
import {
  browserTracingIntegration,
  breadcrumbsIntegration,
} from '@sentry/react';
import { version } from '../package.json'; // путь подставь свой

export function createConfig(dsn: string): Sentry.BrowserOptions {
  return {
    dsn,
    environment: process.env.NODE_ENV,
    release: version,

    integrations: [
      browserTracingIntegration(),
      breadcrumbsIntegration({ console: false }),
    ],

    tracesSampleRate: 1.0,

    beforeSend(event) {
      const message = event.extra?.message;
      const isNetworkError =
        typeof message === 'string' &&
        message.toLowerCase().includes('network error');

      return isNetworkError ? null : event;
    },
  };
}
