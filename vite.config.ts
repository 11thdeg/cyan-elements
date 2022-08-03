import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      // We'll be publishing this as a library, so we'll need to internalize lit.
      // external: /^lit/
    }
  }
})
