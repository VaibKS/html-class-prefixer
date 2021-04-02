import { defineConfig } from 'vite';

const prefix = `monaco-editor/esm/vs`;

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          htmlWorker: [`${prefix}/language/html/html.worker`],
          editorWorker: [`${prefix}/editor/editor.worker`],
        },
      },
    },
  },
});
