import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

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
})
