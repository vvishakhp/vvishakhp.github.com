import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

const dataPath = join(projectRoot, 'src', 'data', 'data.json')
const faviconOutputPath = join(projectRoot, 'public', 'favicon.svg')

async function generateFavicon() {
  const raw = await readFile(dataPath, 'utf8')
  const data = JSON.parse(raw)
  const seed = data?.basics?.name

  if (!seed || typeof seed !== 'string') {
    throw new Error('Missing `basics.name` in src/data/data.json')
  }

  const url = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(seed)}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`DiceBear request failed: ${response.status} ${response.statusText}`)
  }

  const svg = await response.text()
  await mkdir(dirname(faviconOutputPath), { recursive: true })
  await writeFile(faviconOutputPath, svg, 'utf8')

  console.log(`Generated favicon for "${seed}" at public/favicon.svg`)
}

generateFavicon().catch((error) => {
  console.error(error)
  process.exit(1)
})
