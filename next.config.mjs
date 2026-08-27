/** @type {import('next').NextConfig} */

// The GitHub Pages build sets GITHUB_PAGES=true (see .github/workflows/deploy.yml)
// to produce a static export served from the repo subpath. Every other build
// (local dev, Vercel) leaves it unset and serves the app normally at the root.
const isPages = process.env.GITHUB_PAGES === 'true'
const basePath = isPages ? '/Portfolio-Website' : ''

const nextConfig = {
  // Static HTML export only for GitHub Pages (no Node server there).
  ...(isPages ? { output: 'export', basePath } : {}),
  // Exposed to the client so raw <img>/<a> asset paths can be prefixed
  // (next/image and next/link apply basePath automatically; these do not).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
