/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*.com', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
