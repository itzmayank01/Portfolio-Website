// Prefix for assets referenced OUTSIDE next/image or next/link — raw <img>
// tags, <a href> to files in /public, direct fetches. next/image and next/link
// apply the configured basePath automatically; these do not.
//
// Empty in local dev and on Vercel (served at root); set to the repo subpath
// for the GitHub Pages build. Driven by NEXT_PUBLIC_BASE_PATH in next.config.mjs.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const withBasePath = (path: string) => `${basePath}${path}`
