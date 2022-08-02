/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.autochek.africa"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
