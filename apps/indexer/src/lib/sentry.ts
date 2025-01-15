import * as Sentry from '@sentry/node'
import { nodeProfilingIntegration } from '@sentry/profiling-node'
import type { Express } from 'express'
import { appConfig } from '~/config'

export function initSentry() {
  // Ensure to call this before requiring any other modules!
  Sentry.init({
    dsn: appConfig.sentry.dsn,
    integrations: [
      // Add our Profiling integration
      nodeProfilingIntegration(),
    ],

    // Add Tracing by setting tracesSampleRate
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // Set sampling rate for profiling
    // This is relative to tracesSampleRate
    profilesSampleRate: 1.0,
  })
}

export function setupSentryErrorHandler(app: Express) {
  // The error handler must be before any other error middleware and after all controllers
  Sentry.setupExpressErrorHandler(app)
}
