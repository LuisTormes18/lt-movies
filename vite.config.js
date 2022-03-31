import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
  }
})