/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*.com', 'image.tmdb.org'],
  },
  webpack: (config) => {
    config.resolve.alias["~antd"] = path.join(__dirname, "node_modules/antd");
    return config;
  }
}

module.exports = nextConfig
