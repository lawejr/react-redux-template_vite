import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  const frontEnv = {
    BACKEND_URL: env.BACKEND_URL,
    SENTRY_DSN: env.SENTRY_DSN,
  };

  return {
    define: {
      'process.env': frontEnv,
    },
    resolve: {
      alias: {
        '~src': resolve(__dirname, 'src'),
      },
    },
    plugins: [reactPlugin(), eslintPlugin({ eslintOptions: { cache: false } })],
  };
});
