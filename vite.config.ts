import { defineConfig, loadEnv } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [eslintPlugin(), reactPlugin()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
