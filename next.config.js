/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove the basePath and assetPrefix - let GitHub Pages handle this automatically
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
