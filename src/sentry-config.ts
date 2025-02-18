import { ErrorEvent, EventHint } from '@sentry/types';
import { version } from '../package.json';
import { breadcrumbsIntegration, browserTracingIntegration } from '@sentry/react';

export function createConfig(dsn: string) {
  return {
    dsn,
    // It also can be integrated with react-router/redux etc.
    integrations: [
      browserTracingIntegration(),
      breadcrumbsIntegration({ console: false }),
    ],
    environment: process.env.NODE_ENV,
    release: version,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    beforeSend(sentryEvent: ErrorEvent, _: EventHint) {
      const isNetworkError =
        sentryEvent.extra?.message &&
        typeof sentryEvent.extra.message === 'string'
          ? sentryEvent.extra.message.toLowerCase().includes('network error')
          : false;

      if (isNetworkError) {
        return null;
      }

      // group events on list of various grounds
      // const exception = hint.originalException as any;
      //
      // sentryEvent.fingerprint = [
      //   String(exception.functionName),
      //   String(exception.errorCode),
      // ];

      return sentryEvent;
    },
  };
}
