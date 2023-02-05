import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';

const imageminConfig: unknown = {
  gifsicle: false,
  optipng: false,
  mozjpeg: false,
  pngquant: false,
  svgo: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            convertColors: {
              currentColor: true,
            },
          },
        },
      },
    ],
  },
};

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
    server: {
      host: true,
    },
    define: {
      'process.env': frontEnv,
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      reactPlugin({
        babel: {
          plugins: [
            ['babel-plugin-syntax-decorators', {}],
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
      eslintPlugin({ eslintOptions: { cache: false } }),
      imageminPlugin(imageminConfig),
    ],
  };
});
