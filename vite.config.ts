import reactPlugin from '@vitejs/plugin-react';

import eslintPlugin from '@nabla/vite-plugin-eslint';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';

// @ts-ignore
import { version } from './package.json';

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
              currentColor: false,
            },
          },
        },
      },
    ],
  },
};

// config from internal used package https://www.npmjs.com/package/favicons
const faviconsConfig = {
  appName: 'Example APP',
  appShortName: 'Example APP',
  appDescription: '',
  lang: 'ru-RU', // Primary language for name and short_name
  background: '#fbfafc', // Background colour for flattened icons. `string`
  theme_color: '#fbfafc', // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: 'default', // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  start_url: '.', // Start URL when launching the application from a device. `string`
  preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
  relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
  version: version, // Your application's version string. `string`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
  // shortcuts: [
  // Your applications's Shortcuts (see: https://developer.mozilla.org/docs/Web/Manifest/shortcuts)
  // Array of shortcut objects:
  // {
  //   name: 'View your Inbox', // The name of the shortcut. `string`
  //   short_name: 'inbox', // optionally, falls back to name. `string`
  //   description: 'View your inbox messages', // optionally, not used in any implemention yet. `string`
  //   url: '/inbox', // The URL this shortcut should lead to. `string`
  //   icon: 'test/inbox_shortcut.png', // source image(s) for that shortcut. `string`, `buffer` or array of `string`
  // },
  // more shortcuts objects
  // ],
};

// https://vitejs.dev/config/
export default defineConfig(({ command: _, mode }) => {
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
          plugins: [['babel-plugin-syntax-decorators', {}]],
        },
      }),
      eslintPlugin({ eslintOptions: { cache: false } }),
      imageminPlugin(imageminConfig),
    ],
  };
});
