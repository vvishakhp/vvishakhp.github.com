import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

function getGitHubPagesBase() {
  if (!process.env.GITHUB_ACTIONS) {
    return '/'
  }

  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

  if (!repository || repository.endsWith('.github.io')) {
    return '/'
  }

  return `/${repository}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: getGitHubPagesBase(),
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        printable: resolve(projectRoot, 'printable.html'),
      },
    },
  },
})
