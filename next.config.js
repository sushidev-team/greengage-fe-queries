/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [479, 768, 992, 1280, 1920],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
