/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*.com', 'image.tmdb.org', 'https://github.com/'],
  },
  target: "serverless",
  webpack: (config,  { isServer }) => {
    config.resolve.alias["~antd"] = path.join(__dirname, "node_modules/antd");
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
}

module.exports = nextConfig
