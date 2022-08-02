/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.autochek.africa", "storage.googleapis.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
