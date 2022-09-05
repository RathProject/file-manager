/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
